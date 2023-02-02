const { default: AdminBro } = require("admin-bro");
const AdminBroMongoose = require("admin-bro-mongoose");
const { Product } = require("./product/Product");
const canModifyUsers = ({ currentAdmin }) => {
  return currentAdmin && currentAdmin.role === "admin";
};

const { User } = require("./user/User");

const UserCategory = {
  name: "Users",
};

const ProductCategory = {
  name: "Products",
};

const actions = {
  edit: { isAccessible: canModifyUsers },
  delete: { isAccessible: canModifyUsers },
  new: { isAccessible: canModifyUsers },
  create: { isAccessible: canModifyUsers },
};

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
  logoutPath: "/admin/logout",
  loginPath: "/admin/login",
  resources: [
    {
      resource: User,
      options: {
        parent: UserCategory,
        actions,
      },
      properties: {
        passwordHash: { isVisible: true },
      },
    },
    {
      resource: Product,
      options: {
        parent: ProductCategory,
        actions,
      },
    },
  ],
};
module.exports = options;
