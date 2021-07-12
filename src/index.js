import validator from './validator.js';

    //Interacción de la primera pantalla     
    //let pantalla2 = document.getElementById("pantalla2");
    document.getElementById('product-container').style.display = "block";
    document.getElementById('content').style.display = "none";
    document.getElementById('compra').style.display = "none";    
    document.getElementById('realizarcompra').style.display = "none";
    document.getElementById('pantalla3').style.display = "none";

    let iconCart=document.getElementById("iconCart");
    iconCart.addEventListener("click",mostrarpantalla);

    function mostrarpantalla  () { 
        //let pantalla1 = document.getElementById("pantalla1");
        document.getElementById('product-container').style.display = "none";
        document.getElementById('content').style.display = "block";        
        document.getElementById('compra').style.display = "block";        
        document.getElementById('realizarcompra').style.display = "none";
        document.getElementById('pantalla3').style.display = "none";
    }
    let btnComprar=document.getElementById("btnComprar");
    btnComprar.addEventListener("click",mostrarpantalla3);
    function mostrarpantalla3  () { 

 document.getElementById('product-container').style.display = "none";
 document.getElementById('content').style.display = "none";
 document.getElementById('compra').style.display = "none";    
 document.getElementById('realizarcompra').style.display = "block";
 document.getElementById('pantalla3').style.display = "block";
 }

 let btnRegresar=document.getElementById("btnRegresar");
    btnRegresar.addEventListener("click",mostrarpantalla1);
    function mostrarpantalla1  () { 

 document.getElementById('product-container').style.display = "block";
 document.getElementById('content').style.display = "none";
 document.getElementById('compra').style.display = "none";    
 document.getElementById('realizarcompra').style.display = "none";
 document.getElementById('pantalla3').style.display = "none";
 }


document.getElementById("btnValidar").addEventListener("click", () => {
    
    let resultado = validator.isValid(document.getElementById("tarjetaDeCredito").value);

    if (resultado === true) {
        alert("TARJETA VALIDA " + validator.maskify(document.getElementById("tarjetaDeCredito").value));
       } else if (resultado === false) {
         alert("TARJETA INVALIDA " + validator.maskify(document.getElementById("tarjetaDeCredito").value),"maskify")
        
    }

       
 });








    /*let btnCompra=document.getElementById("btnCompra");
    btnCompra.addEventListener("click", mostrarpantalla3);

    function mostrarpantalla3 () {
       let compraex = document.getElementById("compraex");
       document.getElementById('content').style.display = "none";
       document.getElementById('compra').style.display = "none";
       document.getElementById('realizarcompra').style.display = "block";
       document.getElementById('product-container').style.display = "none";
    }*/
/*
//console.log(validator.maskify());
//validator.isValid("123");
    document.getElementById("btnValidar").addEventListener("click", () => {
    
    let resultado = validator.isValid(document.getElementById("tarjetaDeCredito").value);
    //alert(resultado);
    

    if (resultado === true) {
        alert("TARJETA VALIDA " + validator.maskify(document.getElementById("tarjetaDeCredito").value));
        //console.log(validator.maskify(creditCardNumber),"maskify")
        } else if (resultado === false) {
         alert("TARJETA INVALIDA " + validator.maskify(document.getElementById("tarjetaDeCredito").value),"maskify")
        
    }
       //function mostrarResultado(maskify){
         //  document.getElementById("validar3").innerHTML = maskify()
        
       
      
       //function maskifyTarjeta(creditCardNumber) {
        //document.getElementById('numCard').innerHTML = validator.maskify(creditCardNumber)
//let creditCardNumber = document.getElementById("tarjetaDeCredito").value;
 });
*/