require('dotenv').config({ path: './backend/.env.backend' });
require('express-async-errors');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//Middleware
app.set('trust proxy', 1);
app.use(rateLimiter(
    {
        windowMs: 15 * 60 * 1000,
        max: 100
    }
));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

// Routes

// Error middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = +process.env.PORT;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();