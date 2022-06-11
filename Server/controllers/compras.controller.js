const compra= require('../models/compras');
const compraCtrl = {};


compraCtrl.getcompra = async (req, res) => {
    const compra = await compra.find({});
    res.json(compra);
};

compraCtrl.createcompra = async (req,res) => {
    const newcompra = new compra({
        cliente: req.body.cliente,
        articulos: req.body.articulos,
        monto: req.body.monto
    });
    await newcompra.save();
    res.json({
       'status' : 'compra saved'
    });
    console.log(req.body);
};

compraCtrl.getcompra = async (req,res) => {
    const find = await compra.findById(req.params.id);
    res.json(find);
};

module.exports = compraCtrl;