const axios = require('axios');

async function searchEvents(req, res) {
    const { location } = req.query;

    if (!location) {
        return res.status(400).json({ error: 'Location query parameter is required' });
    }

    try {
        const response = await axios.get('https://www.eventbriteapi.com/v3/events/search/', {
            params: {
                'location.address': location, // Use this parameter for location-based search
                token: process.env.EVENTBRITE_API_KEY // Ensure the API key is correct
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(error.response?.status || 500).json({
            error: error.response?.data?.error || 'Internal Server Error',
            error_description: error.response?.data?.error_description || 'An error occurred while fetching events'
        });
    }
}

module.exports = {
    searchEvents
};
