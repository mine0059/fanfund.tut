/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

/**
 * custom modules
 */
const client = require('../config/db.config');


const storeData = async (data) => {
    try {

        await client.connect();

        const db = await client.db('fansfund-tut');

        const contribution = await db.collection('contribution');

        const footprint = await contribution.insertOne(data);

        return footprint;
        
    } catch (error) {

        console.error(error);
        throw error
        
    } finally {

        await client.close();

    }
}

const updateData = async (order_id, data) => {
    try {

        await client.connect();

        const db = await client.db('fansfund-tut');

        const contribution = await db.collection('contribution');

        const filter = { order_id }

        const updateStatus = { $set: data };

        const response = await contribution.updateOne(filter, updateStatus);

        return response;
        
    } catch (error) {

        console.error(error);
        throw error
        
    } finally {

        await client.close();

    }
}

const readData = async (filter, projection, limit = 20) => {
    try {

        await client.connect();

        const db = await client.db('fansfund-tut');

        const contribution = await db.collection('contribution');

        const response = await contribution .find(filter, { projection })
            .limit(limit)
            .toArray();
            
        return response;
        
    } catch (error) {

        console.error(error);
        throw error
        
    } finally {

        await client.close();

    }
}

module.exports = { 
    storeData,
    updateData,
    readData
}
