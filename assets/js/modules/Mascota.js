import Animal from "./Animal.js";

export default class Mascota extends Animal {
  constructor(nombreM, enfermedad, nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono, tipo)
    this._nombreM = () => nombreM;
    this._enfermedad = () => enfermedad;

    
  }
  get nombreM() {
    return this._nombreM();
  }
  set nombreM(nombreM) {
    this._nombreM = () => nombreM;
  }
  get enfermedad() {
    return this._enfermedad();
  }
  set enfermedad(enfermedad) {
    this._enfermedad = () => enfermedad;
  }

  
  datosFicha2(){
    return `
    <ul>
    <li>El tipo de animal es: <strong>${this._tipo()}</strong></li>
    <li>Mientras el nombre de la mascota es: ${this._nombreM()}</li>
    <li>Y la enfermedad es: " ${this._enfermedad()}</li>
     </ul>
     `;
  }


}

// en esta clase  va  a ser el padre y es necesario aplicar extends   con super