/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

/**
 * custon modules 
 */

const crypto = require('crypto');
require('dotenv').config();


module.exports = (req, res, next) => {

    const sign = req.body;

    if (!sign) {
        return res.status(400).send('Invalid payload');
    }

    const data = JSON.parse(req.rawBody);

    delete data.sign;

    const hash = crypto
    .createHash('md5')
    .update(Buffer.from(JSON.stringify(data)).toString('base64') + 
    process.env.PAYMENT_API_KEY)
    .digest('hex');

    if (hash !== sign) {
        return res.status(400).send('Invalid sign');
    }

    next();
}