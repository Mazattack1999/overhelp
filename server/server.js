const express = require('express');
const {authMiddleware} = require('./utils/auth');
const path = require('path');
// Database connection
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});