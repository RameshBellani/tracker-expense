const Category = require('../models/categories');

// Add a new category
exports.addCategory = async (req, res) => {
    const { name, type } = req.body;
    try {
        const category = new Category({ name, type });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
