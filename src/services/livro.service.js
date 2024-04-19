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

export default {
  createLivro,
  listLivros,
  getLivro,
  deleteLivro,
  updateLivro,
};
