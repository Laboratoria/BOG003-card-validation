import validator from './validator.js';

// eslint-disable-next-line no-console
//console.log(validator.maskify());
//validator.isValid("123");
document.getElementById("btnValidar").addEventListener("click", () => {
    //alert("hola");
    validator.isValid(document.getElementById("tarjetaDeCredito").value);
    }

);

//function mostrarpantalla(){
//    let pantalla = document.getElementById("pantalla");
//    document.getElementById('container').style.display = "";
//    document.getElementById('product-container').style.display = "none";
//    document.getElementById('content').style.display = "block";
//    document.getElementById('social-media').style.display = "";
//}

//function footer(){
    //let pantalla = document.getElementById("pantalla");
    //document.getElementById('container').style.display = "";
    //document.getElementById('product-container').style.display = "none";
    //document.getElementById('content').style.display = "block";
    //document.getElementById('social-media').style.display = "";
//}

//function enviar(){
//    let enviarpantalla = document.getElementById("enviarpantalla");
//    document.getElementById('container').style.display = "";
//    document.getElementById('product-container').style.display = "block";
//    document.getElementById('content').style.display = "none";
//    document.getElementById('social-media').style.display = "";
//}