const express = require('express');
const router = express.Router();

const compraCtrl = require('../controllers/compras.controller');

router.get('/', compraCtrl.getcompra);

router.post('/',compraCtrl.createcompra);

router.get('/:id',compraCtrl.getcompra);

module.exports = router;