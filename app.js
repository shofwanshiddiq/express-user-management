const express = require('express');
const helmet = require('helmet');
const userRoute = require('./route/user_route');

const app = express();

// Security headers
app.use(helmet());
app.use(helmet.frameguard({ action: 'deny' })); // X-Frame-Options: DENY
app.use(helmet.noSniff()); // X-Content-Type-Options: nosniff
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'none'"], // Prevents loading from any external sources
        scriptSrc: ["'self'"], // Allows scripts only from the same origin
        styleSrc: ["'self'"], // Allows styles only from the same origin
        imgSrc: ["'self'"], // Allows images only from the same origin
    }
}));

// Remove fingerprinting headers
app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.get('/', (req, res) => {
    res.type('application/json'); // Ensure proper Content-Type
    res.send(JSON.stringify({ message: 'Welcome to the API!' }));
});

const baseRoute = '/api/v1';
app.use(baseRoute, userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
