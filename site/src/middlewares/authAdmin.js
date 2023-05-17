const authAdmin = (req, res, next) => {
  if (req.session.userLog && req.session.userLog.rol == "admin") {
    res.locals.adminLog = true;
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = authAdmin;
