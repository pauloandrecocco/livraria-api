// Repositories
import AutorRepository from "../repositories/autor.repository.js";
import LivroRepository from "../repositories/livro.repository.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function createAutor(autor) {
  return await AutorRepository.insertAutor(autor);
}

async function listAutores() {
  return await AutorRepository.listAutores();
}

async function getAutor(autorId) {
  return await AutorRepository.getAutor(autorId);
}

async function deleteAutor(autorId) {
  const livros = await LivroRepository.listLivrosByAutorId(autorId);
  if (livros.length > 0) {
    const error = errorHandler(
      405,
      `Não é possível excluir um autor que possui um ou mais livros cadastrados.`
    );
    throw error;
  }

  await AutorRepository.deleteAutor(autorId);
}

async function updateAutor(autorId, autor) {
  return await AutorRepository.updateAutor(autorId, autor);
}

export default {
  createAutor,
  listAutores,
  getAutor,
  deleteAutor,
  updateAutor,
};
