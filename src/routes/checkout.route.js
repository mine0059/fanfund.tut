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
const { checkout } = require('../constollers/checkout.controller');

router.post('/', checkout);

module.exports = router;  