const cache = require("../controllers/redis.controller");
const controller = require("../controllers/badword.controller");
const auth = require("../middlewares/authJwt");

module.exports = function (app, redis) {
  app.use(function (req, res, next) {

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
};
