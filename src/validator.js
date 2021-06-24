function mostrarTarjeta() {
  var contenedor= document.getElementById("contenedor");

  if(contenedor.style.display == "none"){
      mostrar();
      document.getElementById("boton").value = "Validar"
  }
  else{
      ocultar();
      document.getElementById("boton").value = "Validar"

  }
  
}



const validator = {
  // ...
};

export default validator;
