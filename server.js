// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     res.write('<h1>Hello, Node.js HTTP Server!</h1>');
//     res.end();
// })

// const port = 3000;

// server.listen(port, () => {
//     console.log('Node.js HTTP server is running on port ' + port);
// })

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    /**
     * This route will be the home page of the app, from here I will need to 
     * grab the user query and make an API call to the event bright API.
     */
    res.send('<h1>Hello, Node.js with express HTTP Server!</h1>');
});


const port = 3000
app.listen(port, () => {
    console.log('Server running on port ' + port);
})