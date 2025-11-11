const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');


const { checkAdmin } = require('../middleware/authMiddleware.js');

router.get('/', eventoController.getEventos);


router.post('/', checkAdmin, eventoController.createEvento);


router.delete('/:id', checkAdmin, eventoController.deleteEvento);

module.exports = router;
