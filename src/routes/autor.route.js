import express from "express";

// Controllers
import AutorController from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", AutorController.createAutor);
router.get("/", AutorController.listAutores);
router.get("/:autorId", AutorController.getAutor);
router.delete("/:autorId", AutorController.deleteAutor);
router.put("/:autorId", AutorController.updateAutor);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
