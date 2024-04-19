import "dotenv/config";
import express from "express";
import winston from "winston";
import cors from "cors";

// Routers
import autorRouter from "./src/routes/autor.route.js";
import clienteRouter from "./src/routes/cliente.route.js";
import livroRouter from "./src/routes/livro.route.js";

const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console({
      // format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: "logs/livraria-api.log",
      // format: winston.format.simple(),
    }),
  ],
  format: combine(label({ label: "livraria-api" }), timestamp(), logFormat),
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/autores", autorRouter);
app.use("/clientes", clienteRouter);
app.use("/livros", livroRouter);

app.listen(3000, async () => {
  logger.info("API rodando na porta 3000.");
});
