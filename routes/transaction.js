const express = require('express');
const {
    addTransaction,
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    getSummary
} = require('../controllers/transactions');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route definitions
router.post('/', protect, addTransaction);
router.get('/', protect, getTransactions);
router.get('/:id', protect, getTransactionById);  // This route expects an ID
router.put('/:id', protect, updateTransaction);
router.delete('/:id', protect, deleteTransaction);
router.get('/summary', protect, getSummary); // This route should not expect an ID

module.exports = router;
