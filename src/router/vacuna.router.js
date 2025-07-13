const express = require('express');
const router = express.Router();
const controller = require('../controller/vacuna.controller');

router.get('/', controller.getVacunas);
router.post('/', controller.postVacuna);

module.exports = router;
