const aplicacionService = require('../service/aplicacion.service');

const postAplicacion = async (req, res) => {
  try {
    const nueva = await aplicacionService.registrarAplicacion(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postAplicacion };
