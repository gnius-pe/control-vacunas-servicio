const alertaService = require('../service/alerta.service');

const getAlertas = async (req, res) => {
  try {
    const alertas = await alertaService.obtenerAlertas();
    res.json(alertas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAlertas };
