const express = require('express');
const rateLimit = require('express-rate-limit');
require('dotenv').config()

const route_register = require('./routes/register');

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);

// Routes
app.use('/', route_register);

app.get('/', (req, res) => {
    res.status(200).send('Server online');
});

app.listen(process.env.API_PORT, () => {
    console.log(`server online at ${process.env.API_PORT}`);
});
