import { errorHandler } from "./error-handler.js";

function validateId(id, donoId = "") {
  id = Number(id);
  if (!id || typeof id !== "number" || id - Math.floor(id) !== 0 || id <= 0) {
    const message = donoId
      ? `Informe um ID de ${donoId} válido.`
      : `Informe um ID válido.`;
    const error = errorHandler(400, message);
    throw error;
  }
}

export { validateId };
