const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./config/db');
const transactionsRoutes = require('./routes/transaction');
const categoriesRoutes = require('./routes/categories');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/transactions', transactionsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
