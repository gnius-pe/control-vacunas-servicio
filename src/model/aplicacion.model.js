const db = require('../db');

const createAplicacion = async ({ paciente_id, vacuna_id, fecha_aplicacion, proxima_dosis, observaciones }) => {
  const res = await db.query(
    `INSERT INTO aplicaciones_vacunas 
    (paciente_id, vacuna_id, fecha_aplicacion, proxima_dosis, observaciones) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [paciente_id, vacuna_id, fecha_aplicacion, proxima_dosis, observaciones]
  );
  return res.rows[0];
};

module.exports = { createAplicacion };
