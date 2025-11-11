const express = require('express');
const router = express.Router();
const ouvidoriaController = require('../controllers/ouvidoriaController');

const { checkAdmin } = require('../middleware/authMiddleware.js');

router.post('/', ouvidoriaController.submitOuvidoria);

router.get('/', checkAdmin, ouvidoriaController.getMensagens);

module.exports = router;
