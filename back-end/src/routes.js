const { Router } = require('express');

const router = Router();
const CepController = require('./app/controllers/CepController');

router.post('/cep', CepController.index)

module.exports = router;