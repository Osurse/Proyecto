export class carrito {
    constructor(_id='',libro='',autor='',paginas='',sinopsis='',genero='',stok='',imagen=''){
        this._id=_id
        this.libro=libro;
        this.autor=autor;
        this.paginas=paginas;
        this.sinopsis=sinopsis;
        this.genero=genero;
        this.stok=stok;
        this.imagen=imagen
    }
    _id:string;
    libro:string;
    autor:string;
    paginas:string;
    sinopsis:string;
    genero:string;
    stok:string;
    imagen:string;
}
