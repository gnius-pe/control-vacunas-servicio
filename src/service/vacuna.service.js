const vacunaModel = require('../model/vacuna.model');

const listarVacunas = async () => {
  return await vacunaModel.getAllVacunas();
};

const registrarVacuna = async (data) => {
  return await vacunaModel.createVacuna(data);
};

module.exports = { listarVacunas, registrarVacuna };
