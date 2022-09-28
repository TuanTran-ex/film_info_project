exports.index = (req, res) => {
  res.render('admin/account');
};

exports.login = (req, res) => {
  res.render('admin/account/login', { layout: false });
};

exports.forgotPass = (req, res) => {
  res.render('admin/account/forgot-pass', { layout: false });
};

exports.recoverPass = (req, res) => {
  res.render('admin/account/recover-pass', { layout: false });
};
