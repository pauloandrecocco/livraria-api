import Sequelize from "sequelize";
import mongoose from "mongoose";

// PostgreSQL
const sequelize = new Sequelize(
  "postgres",
  "postgres",
  process.env.POSTGRES_PASSWORD,
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    define: {
      timestamps: false, // Cria colunas 'created_at' e 'updated_at'
    },
  }
);

// MongoDB
async function connectMongodb() {
  const mongoDBUrl = "mongodb://localhost:27017/livraria";

  return await mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  });
}

export { sequelize, connectMongodb };
