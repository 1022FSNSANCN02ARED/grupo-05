const db = require("../../database/models");

const recordameMiddleware = (req, res, next) => {
  if (req.cookies && req.cookies.recordame && !req.session.userLog) {
    db.Users.findOne({
      where: {
        email: req.cookies.recordame,
      },
    }).then((user) => {
      req.session.userLog = user;
      next();
    });
  } else {
    next();
  }
};

module.exports = recordameMiddleware;
