const { DataTypes } = require('sequelize');
const sequelize = require('./connectDB');
const bcrypt = require('bcrypt');

const Account = sequelize.define(
  'Account',
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
  },
  {
    timeStamp: true,
    tableName: 'Account',
  }
);

Account.prototype.isPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

Account.beforeCreate(async (user, options) => {
  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (error) {
    throw new Error(error);
  }
});

// Account.sync({ alter: true })
//   .then(() => console.log('Sync DB Account table successfully'))
//   .catch((err) => console.log('Sync Account table error: ' + err));

module.exports = Account;
