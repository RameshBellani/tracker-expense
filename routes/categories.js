const express = require('express');
const { addCategory, getCategories } = require('../controllers/categories');
const router = express.Router();

router.post('/', addCategory);
router.get('/', getCategories);

module.exports = router;
