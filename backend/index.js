const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const eventRoutes = require('./routes/eventRoutes');
app.use('/events', eventRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
