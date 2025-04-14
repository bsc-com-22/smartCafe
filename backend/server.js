const express = require('express');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());
app.use('/api', paymentRoutes);  // Prefix all routes with /api

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
