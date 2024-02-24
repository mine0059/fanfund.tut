/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

/**
 * node modules
 */

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const username  = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const clusterUrl = 'cluster0.acaq9pm.mongodb.net'
const connectionStr = `mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(connectionStr, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
    compressors: ['snappy']
});

module.exports = client;