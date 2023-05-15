const authRol = (req, res, next) => {
  res.locals.userLog = false;
  if (req.session && req.session.user) {
    res.locals.userLog = true;
  }
  next();
};

module.exports = authRol;
