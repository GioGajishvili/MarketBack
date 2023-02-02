module.exports = (app) => {
  var handlers = require("./controllers");
  app.route("/products").get(handlers.get);
  app.route("/products").post(handlers.post);
};
