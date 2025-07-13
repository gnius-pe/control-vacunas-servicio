const express = require('express');
const router = express.Router();
const controller = require('../controller/paciente.controller');

router.get('/', controller.getPacientes);
router.post('/', controller.postPaciente);

module.exports = router;
