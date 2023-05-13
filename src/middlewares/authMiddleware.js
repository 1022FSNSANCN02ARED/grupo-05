const authMiddleware = (req, res, next) => {
  if (req.session.userLog) {
    next();
  } else {
    res.redirect("/user");
  }
};

module.exports = authMiddleware;
