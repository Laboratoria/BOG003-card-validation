const validator = {
  
  isValid:(creditCardNumber) => {
    let sumNumber = 0;
    let totalSum = 0;

    //alert("isValid" + creditCardNumber);

    //Función para invertir el numero de la Tarjeta de Credito
    creditCardNumber = creditCardNumber.split("").reverse();
    
    //bucle ->
    for (var i =0; i < creditCardNumber.length; i++) {
    
      //aplicar la posición a los numeros pares o impares
      if (i % 2 === 1  ){
        
        //Se multiplica los números impares por 2
        creditCardNumber[i]=(creditCardNumber[i] * 2);

        //Si es mayor con igual 10 se ejecuta lo siguiente
        if (creditCardNumber[i] >= 10){
          //Divide el String
          sumNumber=creditCardNumber[i].toString().split("");
          //console.log("el valor" + sumNumber);
          //Suma los digitos mayores a 10
          creditCardNumber[i] = parseInt(sumNumber[0])+parseInt(sumNumber[1]);
          //console.log("Numeros Sumados" + creditCardNumber[i]);
        }        
        //console.log(" position "+i+" :value "+creditCardNumber[i]);
      }      
      //Acumulador, (Suma el total de todos los números)
      totalSum = totalSum + parseInt(creditCardNumber[i]);
      //console.log("Total suma" + totalSum);

    }
    //Verificar que el resto de la suma entre 10 sea igual a 0
    let validCard=totalSum % 10 === 0 ? true : false;

    return validCard;
    //console.log(validCard);
    //console.log(creditCardNumber);
    },
    maskify:(creditCardNumber) => {

      let num = creditCardNumber.length;
      let maskiNum = "";
      for (let i=0; i < num - 4;i++)
      { maskiNum += "#";
   
      }
      return maskiNum + creditCardNumber.substring(maskiNum-4,maskiNum);
    }
  
  };
  
  export default validator;