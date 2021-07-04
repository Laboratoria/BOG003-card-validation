import validator from './validator.js';

// eslint-disable-next-line no-console
//console.log(validator.maskify());
//validator.isValid("123");
document.getElementById("btnValidar").addEventListener("click", () => {
    //alert("hola");
    validator.isValid(document.getElementById("tarjetaDeCredito").value);
    }

);