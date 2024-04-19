import express from "express";

// Controllers
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

// Livro
router.post("/", LivroController.createLivro);
router.get("/", LivroController.listLivros);
router.get("/:livroId", LivroController.getLivro);
router.delete("/:livroId", LivroController.deleteLivro);
router.put("/:livroId", LivroController.updateLivro);
// InfoLivro
router.post("/:livroId/info", LivroController.addInfoLivro);
router.put("/:livroId/info", LivroController.updateInfoLivro);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
