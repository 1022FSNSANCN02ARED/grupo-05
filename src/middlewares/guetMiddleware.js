const guestMiddleware = (req, res, next) => {
  if (!req.session.userLog) {
    next();
  } else {
    res.redirect("/user/profile");
  }
};

module.exports = guestMiddleware;
