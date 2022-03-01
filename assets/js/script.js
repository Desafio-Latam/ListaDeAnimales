import Propietario from "./modules/Propietario.js";
import Mascota from "./modules/Mascota.js";
import Animal from "./modules/Animal.js";
const sendformbtn = document.getElementById("sendformbtn");

/* sendformbtn.addEventListener("click", (e) =>{
  e.preventDefault();
  console.log("click");
}); */

const form = document.getElementById("form");
//aca se trae todo el nodo al js
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");

//funcion que captura  submit
//se escucha con addEventListener es el mas recomendable
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //importamos  propietario

  console.table({
    propietario: propietario.value,
    telefono: telefono.value,
    direccion: direccion.value,
    nombreMascota: nombreMascota.value,
    tipo: tipo.value,
    enfermedad: enfermedad.value,
  });

  const propietario1 = new Propietario(
    propietario.value,
    direccion.value,
    telefono.value
  );
  const mascota2 = new Mascota(
    
    tipo.value,
    nombreMascota.value,
    enfermedad.value
  );
  //Metodo InnerHTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p>${propietario1.datosPropietario()}</p>
    
    <p>${mascota2.datosFicha2()}</p>
    `;

  //testeamos para ver los datos  desde la clase Propietario.

  //console.log(propietario1);

  //testeo animal
  /*  const animal1 = new Animal(tipo,value);
    console.log(animal1.tipo) 
 */

  const mascota1 = new Mascota();

  //form reset
  form.reset();
});
//deja los campos en blanco, los limpia
const resetForm = () => {
  propietario.value = "";
  telefono.value = "";
  direccion.value = "";
  nombreMascota.value = "";
  tipo.value = "";
  enfermedad.value = "";
};

//aca se va hacer el inner
//pero como?
//pensemos...
//como colocar la estructura.

/*
 imprimirDatos(id, index) {
    const data = document.getElementById(id);
    data.innerHTML += `
        <tr>
        <td>${index}</td>
        <td>${this.nombre}</td>
        <td>${this.edad}</td>
        <td>${this.rut}</td>
        <td>${this.diagnos}</td>
        </tr>
        `;
  }
}
 */
