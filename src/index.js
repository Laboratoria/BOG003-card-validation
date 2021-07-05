import validator from './validator.js';

//function mostrarpantalla(){
//    let pantalla1 = document.getElementById("pantalla1");
//    document.getElementById('product-container').style.display = "none";
//    document.getElementById('content').style.display = "block";
//}

// eslint-disable-next-line no-console
//console.log(validator.maskify());
//validator.isValid("123");
document.getElementById("btnValidar").addEventListener("click", () => {
    //alert("hola");
    validator.isValid(document.getElementById("tarjetaDeCredito").value);
    }

);