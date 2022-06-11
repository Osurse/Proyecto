const user = require('../models/users');
const userCtrl = {};


userCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) => {
    const newUsr = new user({
        name: req.body.name,
        role: req.body.role,
        password : req.body.password,
        email: req.body.email,
        direccion:req.body.direccion
    });
    await newUsr.save();
    res.json({
       'status' : 'User saved'
    });
    console.log(req.body);
};

userCtrl.getUser = async (req,res) => {
    const find = await user.findById(req.params.id);
    res.json(find);
};

userCtrl.editEmployee = async (req,res) => {
    const { id } = req.params;
    const newUsr = {
        name : req.body.name,
        role : req.body.role,
        password : req.body.password,
        email: req.body.email,
        direccion:req.body.direccion,
        compras: req.body.compras
    }
    //(id, objeto nuevo, si no existe, crealo)
    await user.findByIdAndUpdate(id, {$set: newUsr}, {new:true});
    res.json({
        status: 'Employee update'
    });
};

userCtrl.deleteEmployee = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee deleted'
    });
};

module.exports = userCtrl;