import express from "express";

// Controllers
import ClienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", ClienteController.createCliente);
router.get("/", ClienteController.listClientes);
router.get("/:clienteId", ClienteController.getCliente);
router.delete("/:clienteId", ClienteController.deleteCliente);
router.put("/:clienteId", ClienteController.updateCliente);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
