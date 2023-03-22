const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "userDataBase.json");

module.exports = {
  AllUser() {
    const usersFileContent = fs.readFileSync(usersFilePath, "utf-8");
    const users = JSON.parse(usersFileContent);
    return users;
  },
  FindUserId(id) {
    return this.AllUser().find((theUser) => theUser.id == id);
  },
  SaveUser(user) {
    const users = this.AllUser();
    users.push(user);
    const productFileContent = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, productFileContent, "utf-8");
  },
};
