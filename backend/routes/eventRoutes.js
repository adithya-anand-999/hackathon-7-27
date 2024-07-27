const express = require('express');
const router = express.Router();
const { searchEvents } = require('../controllers/eventController');

router.get('/search', searchEvents);

module.exports = router;
