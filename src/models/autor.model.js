import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Autor = sequelize.define(
  "autores",
  {
    autorId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "autor_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscore: true }
);

export default Autor;
