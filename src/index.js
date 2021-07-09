import validator from './validator.js';

    //Interacción de la segunda pantalla     
    //let pantalla2 = document.getElementById("pantalla2");
    document.getElementById('product-container').style.display = "block";
    document.getElementById('content').style.display = "none";
    document.getElementById('compra').style.display = "none";
    
    let iconCart=document.getElementById("iconCart");
    iconCart.addEventListener("click",mostrarpantalla);

    function mostrarpantalla() { 
        //let pantalla1 = document.getElementById("pantalla1");
        document.getElementById('product-container').style.display = "none";
        document.getElementById('content').style.display = "block";        
        document.getElementById('compra').style.display = "block";
    }

    let enviar=document.getElementById("enviar");
    enviar.addEventListener("click",mostrarpantalla1);

    const mostrarpantalla1 = () =>{
       //let pantalla2 = document.getElementById("pantalla2");
       document.getElementById('product-container').style.display = "block";
       document.getElementById('content').style.display = "none";
    }

// eslint-disable-next-line no-console
//console.log(validator.maskify());
//validator.isValid("123");
    document.getElementById("btnValidar").addEventListener("click", () => {
    
    let resultado = validator.isValid(document.getElementById("tarjetaDeCredito").value);
    alert(resultado);
    }

);
