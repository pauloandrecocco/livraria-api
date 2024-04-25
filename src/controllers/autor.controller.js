// Services
import AutorService from "../services/autor.service.js";

// Utils
import { validateId } from "../utils/validators.js";

async function createAutor(req, res, next) {
  const autor = req.body;

  try {
    // validateAutor(autor);

    res.send(await AutorService.createAutor(autor));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listAutores(req, res, next) {
  try {
    res.send(await AutorService.listAutores());
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getAutor(req, res, next) {
  const { autorId } = req.params;

  try {
    validateId(autorId, "autor");

    res.send(await AutorService.getAutor(autorId));
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteAutor(req, res, next) {
  const { autorId } = req.params;

  try {
    validateId(autorId, "autor");

    await AutorService.deleteAutor(autorId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateAutor(req, res, next) {
  const { autorId } = req.params;
  const autor = req.body;

  try {
    validateId(autorId, "autor");

    res.send(await AutorService.updateAutor(autorId, autor));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAutor,
  listAutores,
  getAutor,
  deleteAutor,
  updateAutor,
};
