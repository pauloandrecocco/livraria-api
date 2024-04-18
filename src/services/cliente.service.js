// Repositories
import ClienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function listClientes() {
  return await ClienteRepository.listClientes();
}

async function getCliente(clienteId) {
  return await ClienteRepository.getCliente(clienteId);
}

async function deleteCliente(clienteId) {
  // TODO: Descomentar após implementar VendaRepository
  // const vendas = await VendaRepository.listVendasByClienteId(clienteId);
  // if (vendas.length > 0) {
  // const error = errorHandler(
  // 405,
  // `Não é possível excluir um cliente que possui uma ou mais vendas.`
  // );
  // throw error;
  // }

  await ClienteRepository.deleteCliente(clienteId);
}

async function updateCliente(clienteId, cliente) {
  return await ClienteRepository.updateCliente(clienteId, cliente);
}

export default {
  createCliente,
  listClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
