// Models
import Cliente from "../models/cliente.model.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertCliente(cliente) {
  try {
    return await Cliente.create(cliente);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listClientes() {
  try {
    return await Cliente.findAll({
      attributes: { exclude: ["senha"] },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function getCliente(clienteId) {
  try {
    return await Cliente.findByPk(clienteId, {
      raw: true,
      attributes: { exclude: ["senha"] },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function deleteCliente(clienteId) {
  try {
    await Cliente.destroy({
      where: {
        clienteId,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updateCliente(clienteId, cliente) {
  try {
    await Cliente.update(cliente, {
      where: {
        clienteId,
      },
    });
    return await getCliente(clienteId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertCliente,
  listClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
