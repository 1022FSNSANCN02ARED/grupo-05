const fs = require("fs");

const path = require("path");
const { stringify } = require("querystring");

const adminFilePath = path.join(__dirname, "../data/adminDataBase.json");

//module.exports
const Admin = {
  findAll: () => {
    return JSON.parse(fs.readFileSync(adminFilePath, "utf-8"));
  },

  generateAdminId: () => {
    const allAdmins = Admin.findAll();
    const lastAdmin = allAdmins.pop();
    if (lastAdmin) {
      return lastAdmin.id + 1;
    }
    return 1;
  },

  findByPk: (id) => {
    return Admin.findAll().find((oneAdmin) => oneAdmin.id == id);
  },

  findByField: (field, text) => {
    return Admin.findAll().filter((oneAdmin) => oneAdmin[field] == text);
  },

  create: (admin) => {
    const admins = Admin.findAll();
    const newAdmin = {
      id: Admin.generateAdminId(),
      ...admin,
    };
    admins.push(newAdmin);
    fs.writeFileSync(adminFilePath, JSON.stringify(admins, null, " "), "utf-8");
    return true;
  },

  delete: (id) => {
    const allAdmins = Admin.findAll();
    const finalAdmins = allAdmins.filter((oneAdmin) => oneAdmin.id !== id);
    fs.writeFileSync(adminFilePath, JSON.stringify(finalAdmins, null, " "));
    return true;
  },
};

//console.log(Admin.delete());
