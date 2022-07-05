const express = require('express');
const router = express.Router()
const home = require('./src/controllers/home');
const contato = require('./src/controllers/contato')


// Routes da inicio
router.get('/', home.homepage);
router.post('/', home.trataResposta);

// Routes do contato
router.get(' /contato', contato.homepage);

module.exports = router;