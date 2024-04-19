// Services
import LivroService from "../services/livro.service.js";

// Utils
// import { validateId, validateLivro, validateInfoLivro, validateAvaliacaoLivro } from "../utils/validators.js";

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

async function addInfoLivro(req, res, next) {
  const { livroId } = req.params;
  const infoLivro = req.body;

  try {
    // validateId(livroId, "Livro");
    // validateInfoLivro(infoLivro);

    res.send(await LivroService.addInfoLivro(livroId, infoLivro));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteInfoLivro(req, res, next) {
  const { livroId } = req.params;

  try {
    // validateId(livroId, "Livro");

    await LivroService.deleteInfoLivro(livroId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateInfoLivro(req, res, next) {
  const { livroId } = req.params;
  const infoLivro = req.body;

  try {
    // validateId(livroId, "Livro");

    res.send(await LivroService.updateInfoLivro(livroId, infoLivro));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function addAvaliacaoLivro(req, res, next) {
  const { livroId } = req.params;
  const avaliacaoLivro = req.body;

  try {
    // validateId(livroId, "Livro");
    // validateAvaliacaoLivro(avaliacaoLivro);

    res.send(await LivroService.addAvaliacaoLivro(livroId, avaliacaoLivro));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteAvaliacaoLivro(req, res, next) {
  const { livroId, index } = req.params;

  try {
    // validateId(livroId, "Livro");

    await LivroService.deleteAvaliacaoLivro(livroId, index);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
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
  addInfoLivro,
  deleteInfoLivro,
  updateInfoLivro,
  addAvaliacaoLivro,
  deleteAvaliacaoLivro,
};
