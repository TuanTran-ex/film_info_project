const express = require('express');
const {
  index,
  login,
  forgotPass,
  recoverPass,
} = require('./controllers/account.controller');
const router = express.Router();

router.get('/', index);
router.get('/login', login);
router.get('/forgot-pass', forgotPass);
router.post('/recover-pass', recoverPass);

module.exports = router;
