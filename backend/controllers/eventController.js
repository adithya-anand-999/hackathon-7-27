const axios = require('axios');

const getEventsByLocation = async (req, res) => {
    try {
        const { postalCode, latlong } = req.query;

        if (!postalCode && !latlong) {
            return res.status(400).json({ message: 'Please provide a postalCode or latlong.' });
        }

        const query = postalCode ? `postalCode=${postalCode}` : `latlong=${latlong}`;

        // Replace YOUR_API_KEY with your actual API key.
        const response = await axios.get(`https://api.example.com/discovery/v2/events?${query}&apikey=yh2RVAgMZZNrv5rF`);
        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching events:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getEventsByLocation,
};
