import validator from './validator.js';
//console.log(validator);
//llamar del html
const pruebaGratis = document.getElementById('prueba');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const inputNombre = document.querySelector('#inputNombre');
const inputNumero = document.querySelector('#inputNumero');
const ubicacionNumer = document.querySelector('.descripcion');
//llamdos de los id paginas para ocultarlas
const section = document.querySelector('#presentacion');
const formulario = document.querySelector('#formulario');
const paginaTres = document.querySelector('#finalizacion');

//funcion de los botonesS
pruebaGratis.addEventListener('click', function() {
  section.classList.add('esconder')
  formulario.classList.remove('esconder')
});
//funcion del boton de validacion
const btnValidacion = document.querySelector('#btn-validacion');
btnValidacion.addEventListener('click', () => {
  const valorValiCar = document.getElementById('inputNumero').value;
  let validcard = validator.isValid(valorValiCar);
  let contenedorNumero = validator.maskify(valorValiCar);
  if (validcard) {
    formulario.classList.add('esconder')
    ubicacionNumer.innerText += contenedorNumero
    paginaTres.classList.remove('esconder')
  }else {
     alert('Ingrese un número de tarjeta valido por favor')
   
  }
});
//input numero de tarjeta
inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;
  inputNumero.value = valorInput
    .replace(/\D/g, '');
  //numero y nombre en la Tarjeta
  numeroTarjeta.textContent = valorInput
});
//input nombre de tarjeta
inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;
  inputNombre.value = valorInput
    .replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput
});
