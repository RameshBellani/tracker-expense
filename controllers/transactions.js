const Transaction = require('../models/transaction');

// Add a new transaction
exports.addTransaction = async (req, res) => {
    const { type, category, amount, date, description } = req.body;
    const userId = req.user.id;  

    try {
        const transaction = new Transaction({
            user: userId,
            type,
            category,
            amount,
            date,
            description
        });

        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Get all transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({});
        res.json(transactions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update transaction by ID
exports.updateTransaction = async (req, res) => {
    const { type, category, amount, date, description } = req.body;
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

        transaction.type = type || transaction.type;
        transaction.category = category || transaction.category;
        transaction.amount = amount || transaction.amount;
        transaction.date = date || transaction.date;
        transaction.description = description || transaction.description;

        await transaction.save();
        res.json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete transaction by ID
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

        res.json({ message: 'Transaction deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//getting error
exports.getSummary = async (req, res) => {
    try {
        console.log("User ID:", req.user.id); 
        const income = await Transaction.aggregate([
            { $match: { user: req.user.id, type: 'income' } },
            { $group: { _id: null, totalIncome: { $sum: "$amount" } } },
        ]);

        const expense = await Transaction.aggregate([
            { $match: { user: req.user.id, type: 'expense' } },
            { $group: { _id: null, totalExpense: { $sum: "$amount" } } },
        ]);

        const totalIncome = income[0]?.totalIncome || 0;
        const totalExpense = expense[0]?.totalExpense || 0;
        const balance = totalIncome - totalExpense;

        res.json({ totalIncome, totalExpense, balance });
    } catch (error) {
        console.error("Error in getSummary:", error); 
        res.status(400).json({ message: error.message });
    }
};

