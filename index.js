const express = require('express');
const cors = require('cors');
const app = express();
const pacienteRouter = require('./src/router/paciente.router');
const aplicacionRouter = require('./src/router/aplicacion.router');
const alertaRouter = require('./src/router/alerta.router');
const vacunaRouter = require('./src/router/vacuna.router');

app.use(cors());
app.use(express.json());

app.use('/api/pacientes', pacienteRouter);
app.use('/api/aplicaciones', aplicacionRouter);
app.use('/api/alertas', alertaRouter);
app.use('/api/vacunas', vacunaRouter);

app.get('/', (req, res) => {
  res.send('API Control de Vacunas está activa');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
