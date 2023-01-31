const { default: AdminBro } = require("admin-bro");
const AdminBroMongoose = require("admin-bro-mongoose");
const canModifyUsers = ({ currentAdmin }) => {
  return currentAdmin && currentAdmin.role === "admin";
};

const { User } = require("./user/User");

const UserCategory = {
  name: "Users",
};

const actions = {
  edit: { isAccessible: canModifyUsers },
  delete: { isAccessible: canModifyUsers },
  new: { isAccessible: canModifyUsers },
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
    },
  ],
};
module.exports = options;
