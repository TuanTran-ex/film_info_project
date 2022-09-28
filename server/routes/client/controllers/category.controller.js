const pool = require('../../models/connectDB');
const query = require('../../models/query');

const { CustomError } = require('../../utils/errorHandling');

exports.getAllCategory = async (req, res, next) => {
  try {
    const [rows, fields] = await pool.query(query.qGetAllCategory());
    if (rows) {
      return res.status(200).json({ data: rows });
    } else next(new Error());
  } catch (err) {
    next(err);
  }
};
