// Repositories
import LivroRepository from "../repositories/livro.repository.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function createLivro(livro) {
  return await LivroRepository.insertLivro({
    ...livro,
    estoque: livro.estoque ?? 0,
  });
}

async function listLivros(autorId) {
  if (autorId) {
    return await LivroRepository.listLivrosByAutorId(autorId);
  }

  return await LivroRepository.listLivros();
}

async function getLivro(livroId) {
  return await LivroRepository.getLivro(livroId);
}

async function deleteLivro(livroId) {
  // TODO: Descomentar após implementar VendaRepository
  // const vendas = await VendaRepository.listVendasByLivroId(clienteId);
  // if (vendas.length > 0) {
  // const error = errorHandler(
  // 405,
  // `Não é possível excluir um livro que possui uma ou mais vendas.`
  // );
  // throw error;
  // }

  await LivroRepository.deleteLivro(livroId);
}

async function updateLivro(livroId, livro) {
  const camposAtualizados = {};
  if (livro.valor) camposAtualizados.valor = Number(livro.valor);
  if (livro.estoque) camposAtualizados.estoque = Number(livro.estoque);

  return await LivroRepository.updateLivro(livroId, camposAtualizados);
}

async function addInfoLivro(livroId, infoLivro) {
  return await LivroRepository.createInfoLivro({ livroId, ...infoLivro });
}

async function deleteInfoLivro(livroId) {
  return await LivroRepository.deleteInfoLivro(livroId);
}

async function updateInfoLivro(livroId, infoLivro) {
  return await LivroRepository.updateInfoLivro({ livroId, ...infoLivro });
}

async function addAvaliacaoLivro(livroId, avaliacaoLivro) {
  return await LivroRepository.createAvaliacaoLivro(livroId, avaliacaoLivro);
}

async function deleteAvaliacaoLivro(livroId, index) {
  return await LivroRepository.deleteAvaliacaoLivro(livroId, index);
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
