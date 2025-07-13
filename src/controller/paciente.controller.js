const pacienteService = require('../service/paciente.service');

const getPacientes = async (req, res) => {
  try {
    const pacientes = await pacienteService.obtenerPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postPaciente = async (req, res) => {
  try {
    const nuevo = await pacienteService.registrarPaciente(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPacientes, postPaciente };
