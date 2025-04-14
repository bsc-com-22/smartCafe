const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config(); // Load API keys from .env

router.post('/create-payment', async (req, res) => {
    const { amount, orderId, customerEmail } = req.body;

    try {
        const response = await axios.post('https://paychangu.com/api/v1/payment/initiate', {
            amount: amount,
            order_id: orderId,
            email: customerEmail,
            callback_url: 'https://your-domain.com/payment/callback',
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.PAYCHANGU_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        res.json({ redirectUrl: response.data.redirect_url });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Payment initiation failed' });
    }
});

module.exports = router;
