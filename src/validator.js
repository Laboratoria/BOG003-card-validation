const validator = {
  isValid: (creditCardNumber) => {
    let numeroPar = 0;
    let sumNumPos = 0;
    let totalsum = 0;
    let posicion = 0;

    let numeroTarjeta = (creditCardNumber.split("").reverse());
    //for es bucle que repite las instrucciones un determunado numero de veces.
    for (let i = 0; i < numeroTarjeta.length; i++) {

      //la sentencia= nuestra posicion va a mostrar los pares
      if (i % 2 === 1) {
        //nuestra posicion par se multiplica por 2
        posicion = (numeroTarjeta[i] * 2);
        if (posicion >= 10) {
          sumNumPos = posicion.toString().split('');
          posicion = parseInt(sumNumPos[0]) + parseInt(sumNumPos[1]);
        }
        //acumulador de los numeros que quedaban con los nuevos
        totalsum = totalsum + parseInt(posicion);
      } else {
        numeroPar = parseInt(numeroTarjeta[i]);
        totalsum += numeroPar;
      }
    }
    let validcard = totalsum % 10 == 0;
    return validcard;
  },
  maskify: (numeroTarjeta) => {
    let maskifyNum = numeroTarjeta.length;
    let contenedorNumero = "";
    for (let i = 0; i < maskifyNum - 4; i++) {
      contenedorNumero += "#";

    }
    return contenedorNumero + numeroTarjeta.substring(maskifyNum - 4, maskifyNum);
  }

};
export default validator;
