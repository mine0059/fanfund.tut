/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

/**
 * node modules
 */

const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

/**
 * custom modules
 */
const home = require('./src/routes/home.route');
const checkout = require('./src/routes/checkout.route');

/**
 * initial express app
 */

const app = express();

/**
 * setting ejs view engine
 */
app.set('view engine', 'ejs');

/**
 * setting public folder
 */

app.use(express.static(`${__dirname}/public`));



/**
 * setting HTTP response headers 
 */
app.use(helmet());


/**
 * parse request body
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));

/**
 * home page
 */
app.use('/', home);

/**
 * checkout
 */
app.use('/checkout', checkout);

app.listen(process.env.PORT, () => {
    console.log(`app listening on http://localhost:${process.env.PORT}`);
});


