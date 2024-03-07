const cache = require("../controllers/redis.controller");
const auth = require("../middlewares/authJwt");

module.exports = function (app, redis, prefix) {
  app.use(function (req, res, next) {

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/api/cache', auth.isModerator, (req, res) => cache.postCache(req, res, redis, prefix)); //api/cache
};
