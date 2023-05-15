const authMiddleware = (req, res, next) => {
  if (req.session.userLog) {
    next();
  } else {
    res.redirect("/user/login");
  }
};

module.exports = authMiddleware;
