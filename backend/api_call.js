const axios = require('axios');
const geohash = require('ngeohash');

const lat = 29.76;
const long = 95.37;
const geoHashEx = geohash.encode(lat,long)

axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${geoHashEx}&apikey=T48f985wgjEIt3GaLBUqGpAdjcn2aMqx`).then(function(res){
    const events = res.data._embedded?.events;

    // console.log(events);   //to see structure of the events object

    if (events && events.length > 0) {
        events.forEach(event => {
          console.log(event.name);
        });
      } else {
        console.log('No events found for the given geoPoint.');
      }
    })
    .catch(function (error) {
      console.error('Error fetching events:', error);
})

