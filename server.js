const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/spare-parts', require('./routes/partRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));
app.use('/api/suppliers', require('./routes/supplierRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

