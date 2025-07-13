const pacienteModel = require('../model/paciente.model');

const obtenerPacientes = async () => {
  return await pacienteModel.getAll();
};

const registrarPaciente = async (data) => {
  return await pacienteModel.create(data);
};

module.exports = { obtenerPacientes, registrarPaciente };
