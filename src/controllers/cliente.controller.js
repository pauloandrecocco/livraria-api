// Services
import ClienteService from "../services/cliente.service.js";

// Utils
// import { validateId, validateCliente } from "../utils/validators.js";

async function createCliente(req, res, next) {
  const cliente = req.body;

  try {
    // validateCliente(cliente);

    res.send(await ClienteService.createCliente(cliente));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listClientes(req, res, next) {
  try {
    res.send(await ClienteService.listClientes());
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getCliente(req, res, next) {
  const { clienteId } = req.params;

  try {
    // validateId(clienteId, "Cliente");

    res.send(await ClienteService.getCliente(clienteId));
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteCliente(req, res, next) {
  const { clienteId } = req.params;

  try {
    // validateId(clienteId, "Cliente");

    await ClienteService.deleteCliente(clienteId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateCliente(req, res, next) {
  const { clienteId } = req.params;
  const cliente = req.body;

  try {
    // validateId(clienteId, "Cliente");

    res.send(await ClienteService.updateCliente(clienteId, cliente));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createCliente,
  listClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
