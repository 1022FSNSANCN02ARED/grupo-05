module.exports = {
  development: {
    username: "npcgames",
    password: "AgusLautiFede",
    database: "npcgames_db",
    host: "mysql-npcgames.alwaysdata.net",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
