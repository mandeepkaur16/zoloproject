const Sequelize = require("sequelize");

const database = new Sequelize('zolocar', 'root', '', {

  host: "192.168.64.2",
  dialect: 'mysql',
  operatorsAliases: false
});

database.authenticate().then(function () {
  console.log("sucess");
}).catch(function (error) {
  console.log("error: " + error);
});

//return Sequelize.Query("CREATE DATABASE'<STUDENT>';").then(data
//=> {
//console.log("done");
//});


module.exports = database;