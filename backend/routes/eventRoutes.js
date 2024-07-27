const express = require('express');
const router = express.Router();
const { getEventsByLocation } = require('../controllers/eventController');

router.get('/events', getEventsByLocation);

module.exports = router;
