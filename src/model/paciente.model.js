const db = require('../db');

const getAll = async () => {
  const res = await db.query('SELECT * FROM pacientes ORDER BY id');
  return res.rows;
};

const create = async ({ nombre, dni, fecha_nacimiento, genero }) => {
  const res = await db.query(
    'INSERT INTO pacientes (nombre, dni, fecha_nacimiento, genero) VALUES ($1, $2, $3, $4) RETURNING *',
    [nombre, dni, fecha_nacimiento, genero]
  );
  return res.rows[0];
};

module.exports = { getAll, create };
