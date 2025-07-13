const alertaModel = require('../model/alerta.model');

const obtenerAlertas = async () => {
  return await alertaModel.getAlertas();
};

module.exports = { obtenerAlertas };
