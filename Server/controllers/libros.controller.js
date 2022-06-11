const libro= require('../models/libros');
const libroCtrl = {};


libroCtrl.getLibros = async (req, res) => {
    const Libros = await libro.find({});
    res.json(Libros);
};

libroCtrl.createlibro = async (req,res) => {
    const newlibro = new libro({
        autor:   req.body.autor,
        paginas: req.body.paginas,
        libro: req.body.libro,
        sinopsis:req.body.sinopsis,
        genero:req.body.genero,
        stok:req.body.stok,
        precio:req.body.precio,
        imagen:req.body.imagen
    });
    await newlibro.save();
    res.json({
       'status' : 'libro saved'
    });
    console.log(req.body);
};

libroCtrl.getlibro = async (req,res) => {
    const find = await libro.findById(req.params.id);
    res.json(find);
};

libroCtrl.editlibro = async (req,res) => {
    const { id } = req.params;
    const newlibro = {
        autor:   req.body.autor,
        paginas: req.body.paginas,
        libro: req.body.libro,
        sinopsi:req.body.sinopsi,
        genero:req.body.genero,
        precio:req.body.precio,
        imagen:req.body.imagen
    }
    //(id, objeto nuevo, si no existe, crealo)
    await libro.findByIdAndUpdate(id, {$set: newlibro}, {new:true});
    res.json({
        status: 'Libro update'
    });
};

libroCtrl.deletelibro = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Libro deleted'
    });
};

module.exports = libroCtrl;