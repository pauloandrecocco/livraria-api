// Models
import Autor from "../models/autor.model.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertAutor(autor) {
  try {
    return await Autor.create(autor);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listAutores() {
  try {
    return await Autor.findAll();
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function getAutor(autorId) {
  try {
    return await Autor.findByPk(autorId, {
      raw: true,
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function deleteAutor(autorId) {
  try {
    await Autor.destroy({
      where: {
        autorId,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updateAutor(autorId, autor) {
  try {
    await Autor.update(autor, {
      where: {
        autorId,
      },
    });
    return await getAutor(autorId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertAutor,
  listAutores,
  getAutor,
  deleteAutor,
  updateAutor,
};
