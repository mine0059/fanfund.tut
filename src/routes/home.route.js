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
const { home } = require('../constollers/home.controller');

router.get('/', home);

module.exports = router;  