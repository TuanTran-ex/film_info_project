exports.successRes = (res, data) => {
  return res.status(200).json({ success: true, data });
};
