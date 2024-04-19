// Services
import LivroService from "../services/livro.service.js";

// Utils
// import { validateId, validateLivro } from "../utils/validators.js";

async function createLivro(req, res, next) {
  const livro = req.body;

  try {
    // validateLivro(livro);

    res.send(await LivroService.createLivro(livro));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listLivros(req, res, next) {
  const { autorId } = req.query;

  try {
    res.send(await LivroService.listLivros(autorId));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getLivro(req, res, next) {
  const { livroId } = req.params;

  try {
    // validateId(livroId, "Livro");

    res.send(await LivroService.getLivro(livroId));
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteLivro(req, res, next) {
  const { livroId } = req.params;

  try {
    // validateId(livroId, "Livro");

    await LivroService.deleteLivro(livroId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateLivro(req, res, next) {
  const { livroId } = req.params;
  const livro = req.body;

  try {
    // validateId(livroId, "Livro");

    res.send(await LivroService.updateLivro(livroId, livro));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createLivro,
  listLivros,
  getLivro,
  deleteLivro,
  updateLivro,
};
