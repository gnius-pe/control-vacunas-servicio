const vacunaService = require('../service/vacuna.service');

const getVacunas = async (req, res) => {
  try {
    const vacunas = await vacunaService.listarVacunas();
    res.json(vacunas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postVacuna = async (req, res) => {
  try {
    const nueva = await vacunaService.registrarVacuna(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getVacunas, postVacuna };
