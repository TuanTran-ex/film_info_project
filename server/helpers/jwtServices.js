const jwt = require('jsonwebtoken');
const BlackListTokenRepo = require('../repositories/blackListToken.repo');
const { CustomError } = require('../utils/errorHandling');

const signAccessToken = (accountId) => {
  const payload = { accountId };
  const secret = process.env.JWT_ACCESS_KEY;
  const opt = { expiresIn: '12h' };
  const accessToken = jwt.sign(payload, secret, opt);
  return accessToken;
};

const signRefreshToken = (accountId) => {
  const payload = { accountId };
  const secret = process.env.JWT_REFRESH_KEY;
  const opt = { expiresIn: '30d' };
  const refreshToken = jwt.sign(payload, secret, opt);
  return refreshToken;
};

/**
 * Middleware verifyAccessToken
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const verifyAccessToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new CustomError(4, 400, 'Invalid authorization'));
  }
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];
  if (token) {
    try {
      const blackListToken = await BlackListTokenRepo.findByToken(token);
      if (blackListToken) {
        return next(new CustomError(5, 400, 'Authentication Error'));
      }
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY);
      req.accountId = decoded.accountId;
      return next();
    } catch (error) {
      return next(new CustomError(5, 400, 'Authentication Error. ' + error));
    }
  }
};

// const verify = (accessToken) => {
//   return jwt.verify(token, process.env.JWT_ACCESS_KEY);
// };

const verifyRefreshToken = (refreshToken) => {
  if (!refreshToken) throw new CustomError(6, 400, 'Invalid refresh token');
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);
  return decoded;
};

const addToBlackList = async (token) => {
  jwt.verify(token, process.env.JWT_ACCESS_KEY);
  const blackListToken = await BlackListTokenRepo.create(token);
  return blackListToken;
};

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  addToBlackList,
};
