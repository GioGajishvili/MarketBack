const express = require("express");
const bodyParser = require("body-parser").json();
const mongoConnect = require("./db").mongoConnect;
const AdminBroExpressjs = require("admin-bro-expressjs");
const options = require("./admin.options");
const { default: AdminBro } = require("admin-bro");
const { buildRouter } = require("admin-bro-expressjs");
var userRoutes = require("./user/routes");
var cors = require("cors");
const app = express();

mongoConnect(() => {
  const admin = new AdminBro(options);
  const router = AdminBroExpressjs.buildRouter(admin);
  app.use(admin.options.rootPath, router);

  app.use(bodyParser);
  app.use(cors());

  userRoutes(app);

  app.listen(8000, () => {
    console.log("listening on port 8000");
  });
});
