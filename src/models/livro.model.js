import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

// Models
import Autor from "./autor.model.js";

const Livro = sequelize.define(
  "livros",
  {
    livroId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "livro_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscore: true }
);

Livro.belongsTo(Autor, {
  foreignKey: { name: "autorId", field: "autor_id" },
});

export default Livro;
