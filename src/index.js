import validator from './validator.js';

document.getElementById("validar").addEventListener("click", function () {
    validator.mostrarTarjeta();

});


let creditCardNumber = document.getElementById('card_number').value;

document.getElementById('card_number').addEventListener("input", function(event){
    const inserteNumero = event.target.value;

     if (creditCardNumber.length < inserteNumero.length) {
        creditCardNumber = creditCardNumber + inserteNumero.slice(-1);
    }else{
        creditCardNumber = creditCardNumber.slice(0,-1)
}

let salidaNumber = validator.maskify(creditCardNumber);
document.getElementById('card_number').value=salidaNumber;

});

document.getElementById('validar1').addEventListener("click", function() {
    let validatedTarjeta = validator.isValid(creditCardNumber);

    if (validatedTarjeta == true) {
        alert("su tarjeta del Banco Agrario es válida");

    }  else if( document.getElementById("card_number").value === "") {
        alert ( "Campo vacio" ); 
    } else {
        alert ( "Su tarjeta es invalida, no pertenece al Banco Agrario" );
    }       
    

});

document.getElementById("validar2").addEventListener('click', function(){ 
    validator.limpiar()
   
});
   
 
