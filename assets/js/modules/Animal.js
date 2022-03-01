import Propietario from "./Propietario.js";

export default class Animal extends Propietario {
    constructor(tipo, nombre, direccion, telefono){
        super(nombre, direccion, telefono)
        this._tipo = () => tipo;
    }
    get tipo(){
        return this_tipo();
    }


}

