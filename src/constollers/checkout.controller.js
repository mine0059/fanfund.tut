/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

/**
 * custom modules
 */

const paymentApi = require('../api/payment.api');
const contributeService = require('../services/contribute_service');

const checkout = async (req, res) => {
    
    try {

        const { amount } = req.body;

        const invoice = await paymentApi.createInvoice(amount);

        const data = {
            ...req.body,
            order_id: invoice.result.order_id,
            payment_status: invoice.result.status
        }

        await contributeService.storeData(data);

        console.log(invoice);

        res.json(invoice);
        
    } catch (error) {
        
        console.error(error)

        throw error;
    }

}

const callback = async  (req, res) => {
    try {

        const { order_id, status } = req.body;

        const data = { payment_status: status }

        await contributeService.updateData(order_id, data);

        res.sendStatus(200);

        
    } catch (error) {

        console.log(error);
        throw error
        
    }
}

module.exports = { checkout, callback }