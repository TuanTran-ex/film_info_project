exports.successRes = function (res, data, message) {
  return res.status(200).json({ success: true, message: message, data: data });
};
