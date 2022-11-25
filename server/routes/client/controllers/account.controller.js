const { CustomError } = require('../../../utils/errorHandling');
const AccountRepo = require('../../../repositories/account.repo');
const {
  validate,
  registerValidate,
  loginValidate,
} = require('../../../utils/validation');
const { successRes } = require('../../../utils/resposeUtils');
const jwtService = require('../../../helpers/jwtServices');

exports.login = async (req, res, next) => {
  validate(loginValidate, req.body);
  const { username, password } = req.body;
  if (!username || !password)
    throw new CustomError(1, 404, 'Invalid username or password');
  const account = await AccountRepo.getByUserName(username);
  if (!account) throw new CustomError(6, 404, 'Account not found');
  if (!(await account.isPassword(password)))
    throw new CustomError(3, 400, 'Password is incorrect');
  const accessToken = jwtService.signAccessToken(account.id.toString());
  const refreshToken = jwtService.signRefreshToken(account.id.toString());
  account.refreshToken = refreshToken;
  await account.save();
  return successRes(res, { accessToken, refreshToken });
};

exports.resgister = async (req, res, next) => {
  validate(registerValidate, req.body);
  const { username, password, email } = req.body;
  const account = await AccountRepo.getByUserNameOrEmail(username, email);
  if (account)
    throw new CustomError(2, 400, 'Username or Email is already in use');
  let newAccount = await AccountRepo.create({
    username,
    password,
    email,
  });
  newAccount = Object.assign({}, newAccount.dataValues);
  delete newAccount.password;
  return successRes(res, newAccount);
};

/**
 * Get Access Token from the Refresh Token
 */
exports.getAccessToken = async (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken) throw new CustomError(6, 400, 'Invalid refresh token');
  const payload = jwtService.verifyRefreshToken(refreshToken);
  const accountId = payload.accountId;
  const newAccessToken = jwtService.signAccessToken(accountId);
  const newRefreshToken = jwtService.signRefreshToken(accountId);
  const account = AccountRepo.getById(accountId);
  account.refreshToken = newRefreshToken;
  await account.save();
  return successRes(res, { newAccessToken, newRefreshToken });
};

exports.logout = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new CustomError(4, 400, 'Invalid authorization'));
  }
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];
  if (token) {
    try {
      await jwtService.addToBlackList(token);
      return successRes(res);
    } catch (error) {
      throw new CustomError(5, 400, 'Authentication Error.' + error);
    }
  }
};
