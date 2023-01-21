const express = require('express');
const { verifyAccessToken } = require('../../helpers/jwtServices');
const { tryCatchFunc } = require('../../utils/errorHandling');
const AccountController = require('./controllers/account.controller');
const router = express.Router();

router.post('/login', tryCatchFunc(AccountController.login));
router.post('/register', tryCatchFunc(AccountController.resgister));
router.get('/logout', tryCatchFunc(AccountController.logout));

router.post(
  '/accounts/films',
  verifyAccessToken,
  tryCatchFunc(AccountController.addFilmToCollection)
);

router.get('/accounts', verifyAccessToken, tryCatchFunc(AccountController.get));
module.exports = router;
