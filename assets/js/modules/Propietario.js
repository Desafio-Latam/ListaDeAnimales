

export default class Propietario{
 constructor(nombre, direccion, telefono){
    this._nombre= () => nombre,
    this._direccion= () => direccion,
    this._telefono= () => telefono
    
 }


 //invoco a la propiedad  que es una funcion, y yo la debo invovar a traves
 //de los parentesis. en esta nueva instancia de propietario 1 les pasamos los paramertros
 //que recibe elk consrtuctor de esta clase
 /* datosPropietario() {
     return `${this._nombre()} ${this._direccion()} ${this._telefono()}`
 } */
datosPropietario() {
    return `
    <ul>
    <li>El nombre del dueño es: ${this._nombre()}</li>
    <li>El domicilio es: ${this._direccion()}</li>
    <li>y el numero telefonico de contacto:" ${this._telefono()}</li>
      </ul>`;
  }






}