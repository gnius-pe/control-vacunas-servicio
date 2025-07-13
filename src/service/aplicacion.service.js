const aplicacionModel = require('../model/aplicacion.model');

const registrarAplicacion = async (data) => {
  return await aplicacionModel.createAplicacion(data);
};

module.exports = { registrarAplicacion };
