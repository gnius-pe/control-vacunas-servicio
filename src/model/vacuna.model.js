const db = require('../db');

const getAllVacunas = async () => {
  const res = await db.query('SELECT * FROM vacunas ORDER BY id');
  return res.rows;
};

const createVacuna = async ({ nombre, descripcion }) => {
  const res = await db.query(
    'INSERT INTO vacunas (nombre, descripcion) VALUES ($1, $2) RETURNING *',
    [nombre, descripcion]
  );
  return res.rows[0];
};

module.exports = { getAllVacunas, createVacuna };
