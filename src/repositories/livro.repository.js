// Database
import { connectMongodb } from "../../config/db.js";

// Models
import Livro from "../models/livro.model.js";

// Schemas
import InfoLivroSchema from "../schemas/infoLivro.schema.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertLivro(livro) {
  try {
    return await Livro.create(livro);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listLivros() {
  try {
    return await Livro.findAll();
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listLivrosByAutorId(autorId) {
  try {
    return await Livro.findAll({
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

async function getLivro(livroId) {
  try {
    const livro = await Livro.findByPk(livroId, {
      raw: true,
    });

    if (!livro) return;

    const infoLivro = await getInfoLivroByLivroId(livroId);
    livro.informacoes = infoLivro ?? null;

    return livro;
  } catch (err) {
    console.log(err);
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function deleteLivro(livroId) {
  try {
    await Livro.destroy({
      where: {
        livroId,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updateLivro(livroId, livro) {
  try {
    await Livro.update(livro, {
      where: {
        livroId,
      },
    });
    return await getLivro(livroId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function getInfoLivroByLivroId(livroId) {
  try {
    const mongoose = await connectMongodb();

    const InfoLivro = mongoose.model("InfoLivro", InfoLivroSchema);

    return await InfoLivro.findOne({ livroId }).select(["-_id", "-livroId"]);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function createInfoLivro(infoLivro) {
  try {
    if (await getInfoLivroByLivroId(infoLivro.livroId)) return;

    const mongoose = await connectMongodb();

    const InfoLivro = mongoose.model("InfoLivro", InfoLivroSchema);

    infoLivro = new InfoLivro(infoLivro);
    await infoLivro.save();

    return await getLivro(infoLivro.livroId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updateInfoLivro(infoLivro) {
  try {
    if (!(await getInfoLivroByLivroId(infoLivro.livroId))) return;

    const mongoose = await connectMongodb();

    const InfoLivro = mongoose.model("InfoLivro", InfoLivroSchema);

    infoLivro = await InfoLivro.findOneAndUpdate(
      { livroId: infoLivro.livroId },
      infoLivro,
      {
        returnOriginal: false,
      }
    );

    return await getLivro(infoLivro.livroId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertLivro,
  listLivros,
  getLivro,
  deleteLivro,
  updateLivro,
  listLivrosByAutorId,
  createInfoLivro,
  updateInfoLivro,
};
