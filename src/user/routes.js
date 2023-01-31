module.exports = (app) => {
  var handlers = require("./controllers");
  app.route("/users").get(handlers.get);
  app.route("/users").post(handlers.post);
};
