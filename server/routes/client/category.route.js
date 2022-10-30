const express = require('express');
const {
  getAllCategory,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('./controllers/category.controller');
const { tryCatchFunc } = require('../../utils/errorHandling');

const router = express.Router();

router.get('/', tryCatchFunc(getAllCategory));
router.get('/:id', tryCatchFunc(getCategory));
router.post('/', tryCatchFunc(addCategory));
router.patch('/:id', tryCatchFunc(updateCategory));
router.delete('/:id', tryCatchFunc(deleteCategory));

module.exports = router;
