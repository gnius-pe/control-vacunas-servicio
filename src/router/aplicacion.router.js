const express = require('express');
const router = express.Router();
const controller = require('../controller/aplicacion.controller');

router.post('/', controller.postAplicacion);

module.exports = router;
