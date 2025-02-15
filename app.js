const express = require('express');
const userRoute = require('./route/user_route');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

// routing

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});


const baseRoute = '/api/v1';
app.use(baseRoute, userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})