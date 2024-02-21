/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

/**
 * node modules
 */
const router = require('express').Router();
/**
 * custom module
 */
const { checkout, callback } = require('../constollers/checkout.controller');
const webhookVerification = require('../middleware/webhook_verify_middleware');

router.post('/', checkout);
router.post('/callback', webhookVerification, callback);

module.exports = router;  