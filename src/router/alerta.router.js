const express = require('express');
const router = express.Router();
const controller = require('../controller/alerta.controller');

router.get('/', controller.getAlertas);

module.exports = router;
