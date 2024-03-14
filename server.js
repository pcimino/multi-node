// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).send('An error occurred on the server.');
        }
        // Replace a placeholder in the HTML with the port number
        const result = data.replace('{{PORT}}', port);
        res.send(result);
    });
});

app.get('/test', (req, res) => res.send('Test successful!'));

// Handle POST request
app.post('/test-post', (req, res) => {
    console.log('POST request received:', req.body);
    res.send('Posted');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
