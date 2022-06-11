const express = require('express');
const router = express.Router();

const libroCtrl = require('../controllers/libros.controller');

router.get('/', libroCtrl.getLibros);

router.post('/',libroCtrl.createlibro);

router.get('/:id',libroCtrl.getlibro);

router.put('/:id',libroCtrl.editlibro);

router.delete('/:id',libroCtrl.deletelibro);

module.exports = router;