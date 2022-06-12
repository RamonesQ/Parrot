const Sequelize = require("sequelize");
require('dotenv').config();



const DB_CONFIG = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let db: any = {};

try {
  db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, DB_CONFIG);
} catch (error) {
  console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados!");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
