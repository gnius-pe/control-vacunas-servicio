const db = require('../db');

const getAlertas = async () => {
  const res = await db.query(`
    SELECT p.nombre AS paciente, v.nombre AS vacuna, a.proxima_dosis
    FROM aplicaciones_vacunas a
    JOIN pacientes p ON a.paciente_id = p.id
    JOIN vacunas v ON a.vacuna_id = v.id
    WHERE a.proxima_dosis IS NOT NULL AND a.proxima_dosis <= CURRENT_DATE
    ORDER BY a.proxima_dosis
  `);
  return res.rows;
};

module.exports = { getAlertas };
