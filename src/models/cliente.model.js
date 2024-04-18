import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Cliente = sequelize.define(
  "clientes",
  {
    clienteId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "cliente_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscore: true }
);

export default Cliente;
