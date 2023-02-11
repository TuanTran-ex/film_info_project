const Joi = require('joi');
const { CustomError } = require('./errorHandling');

const registerValidate = (data) => {
  const accountSchema = Joi.object({
    username: Joi.string().alphanum().min(2).max(50).required(),
    password: Joi.string()
      .min(4)
      .max(32)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    email: Joi.string().email().required(),
  });
  return accountSchema.validate(data);
};

const loginValidate = (data) => {
  const accountSchema = Joi.object({
    username: Joi.string().alphanum().min(2).max(50).required(),
    password: Joi.string()
      .min(4)
      .max(32)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
  });
  return accountSchema.validate(data);
};

const validate = (validateFunc, data, isUpdate) => {
  const res = validateFunc(data, isUpdate);
  if (res.error)
    throw new CustomError(
      1,
      400,
      'Data is not valid: ' + res.error.details[0].message
    );
  return res;
};

module.exports = {
  registerValidate,
  loginValidate,
  validate,
};
