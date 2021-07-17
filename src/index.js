import validator from "./validator.js"; //conexion con validator.js

/*permite esconder el menu de seccion de productos y esconde las demas pantallas*/
const sectionProducts = () =>
document.getElementById("section-menu-products").addEventListener("click", () => {
  document.getElementById("photo-screen").style.display = "none";
  document.getElementById("products-section-clothes").style.display = "none";
  document.getElementById("products-section-accessories").style.display ="none";
  document.getElementById("products-section-makeup").style.display = "none";
  document.getElementById("card-validator").style.display = "none";
  document.getElementById("section-products").style.display = "block";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

/* permite mostrar con un click la seccion de solo ropa y esconder las demas pantallas*/
document.getElementById("section-clothes").addEventListener("click", () => {
  document.getElementById("section-makeup").style.display = "none";
  document.getElementById("section-accessories").style.display = "none";
  document.getElementById("section-clothes").style.display = "block";
  document.getElementById("card-validator").style.display = "none";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

/* permite mostrar la seccion de maquillaje y esconder las demas pantallas*/
document.getElementById("section-makeup").addEventListener("click", () => {
  document.getElementById("section-clothes").style.display = "none";
  document.getElementById("section-accessories").style.display = "none";
  document.getElementById("section-makeup").style.display = "block";
  document.getElementById("card-validator").style.display = "none";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

/* permite mostrar los productos de ropa y esconder las demas pantallas*/
document.getElementById("section-clothes").addEventListener("click", () => {
  document.getElementById("section-clothes").style.display = "none";
  document.getElementById("products-section-clothes").style.display = "block";
  document.getElementById("card-validator").style.display = "none";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

// /* permite mostrar los productos de accesorios y esconder las demas pantallas*/
document.getElementById("section-accessories").addEventListener("click", () => {
  document.getElementById("section-accessories").style.display = "none";
  document.getElementById("products-section-accessories").style.display ="block";
  document.getElementById("section-makeup").style.display = "none";
  document.getElementById("section-clothes").style.display = "none";
  document.getElementById("card-validator").style.display = "none";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

// /* permite mostrar los productos de maquillaje y esconder las demas pantallas*/
document.getElementById("section-makeup").addEventListener("click", () => {
  document.getElementById("section-makeup").style.display = "none";
  document.getElementById("products-section-makeup").style.display = "block";
  document.getElementById("section-accessories").style.display = "none";
  document.getElementById("section-clothes").style.display = "none";
  document.getElementById("card-validator").style.display = "none";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

// /* permite mostrar la seccion del formulario y esconde las demas*/
   const formulary = () =>
document.getElementById("cart-store").addEventListener("click", () => {
  document.getElementById("section-makeup").style.display = "none";
  document.getElementById("section-accessories").style.display = "none";
  document.getElementById("section-clothes").style.display = "none";
  document.getElementById("products-section-makeup").style.display = "none";
  document.getElementById("products-section-accessories").style.display ="none";
  document.getElementById("products-section-clothes").style.display = "none";
  document.getElementById("photo-screen").style.display = "none";
  document.getElementById("card-validator").style.display = "block";
  document.getElementById("screen-valid").style.display = "none";
  document.getElementById("screen-no-valid").style.display = "none";
});

/***************************ZONA DE VALIDACION DE LA TARJETA CON MASKIFY**************************/


/* crea variable que me lleva al elemento ID "password-validator" y extrae el string
  y lo asigna a la variable creditCardNumber*/
const extractNumber = () => {

  let creditCard = document.getElementById("number-tarjet");

  creditCardNumber = creditCard.value;
};

/* la variable newpassword trae el string cubierto con numerales
y este es remplazado por el ID cuyo nombre es password-validator */
const coverNumber = () => {

  let newNumberTarjet = validator.maskify(creditCardNumber);
  let passNumberTarjet = document.getElementById("number-tarjet");

  passNumberTarjet.type = "text";
  return(document.getElementById("number-tarjet").value = newNumberTarjet);
};

/*Esta funcion nos trae el boolean que retorna isValid, se verifica que el campo este lleno y que solo
  tenga caracteres numericos la cual si es valida nos lleva a la pagina screenValid y si no es valida nos lleva
  a la pagina screenNoValid */

function alertValid() {
  if (creditCardNumber === "" || creditCardNumber === null) {
    alert("Debes llenar este campo");
  } else if (validator.isValid(creditCardNumber) === false) {
    document.getElementById("screen-no-valid").style.display = "block";
  } else if (validator.isValid(creditCardNumber) === true)
  {
    document.getElementById("screen-valid").style.display = "block";
  }
}

//asignamos creditCardNumber como variable global
let creditCardNumber = "";
let box = document.getElementById("number-tarjet");
    box.addEventListener("change", extractNumber);
    box.addEventListener("change", () => validator.maskify(creditCardNumber));
    box.addEventListener("change", coverNumber);

/*la variable trae el elemento id "button-confirm" para
que al dar click ,con el evento, se ejecute la siguiente función */
let buttonConfirm = document.getElementById("button-confirm");
    buttonConfirm.addEventListener("click", () => {
  if (creditCardNumber === "") {
    document.getElementById("warning").innerHTML = "*Este campo es obligatorio";

    /*Si no esta vacío se ejecuta la funcion isValid*/
  } else {
    validator.isValid(creditCardNumber);
  }
  alertValid();
});

 buttonConfirm.addEventListener("click", alertValid);//al dar click se ejecuta la función alertValid
//la variable me trae el elemento del id "button-follow" y con un click me lleva a la pag inicio
let buttonFollow = document.getElementById("button-follow");
buttonFollow.addEventListener("click",sectionProducts);
//la variable me trae el elemento del id "button-return" y con un click me lleva a la pag comprobación
let buttonReturn = document.getElementById("button-return");
buttonReturn.addEventListener("click", formulary);
