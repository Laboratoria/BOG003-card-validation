const validator = {
  maskify : (creditCardNumber) => {

   //la variable cardLength es la longitud del string de creditCardNumber
   let cardLength = creditCardNumber.length;

   /*hides toma en cuenta solo del digito en la posición 0 (primer numero digitado),
   al -4 del string (teniendo en cuenta que no todas las tarjetas tienen 16 digitos)*/
   let hide = creditCardNumber.substring(0, cardLength - 4);

   /*/para  reemplazar los strings con numeral(#).*/
   hide = hide.replace(/./g, '#');
   let text = creditCardNumber.substring(cardLength - 4);
   let newNumberTarjet = hide + text;
    return newNumberTarjet
  },


 /*la variable cardNumber se inicia con 0, al momento de completar cada ciclo el número cambia y
 la variable condition empieza con false, ya que la primera posición es impar (1)*/
  isValid : (creditCardNumber) => {
    let cardNumber = 0;
    let condition = false;

    /*el for invertido deacuerdo al algoritmo lunh.
    n-- significa que cada vez va disminuyendo una posición*/
    for (let n = creditCardNumber.length - 1; n >= 0; n--) {
      let cDigit = creditCardNumber.charAt(n);
      let nDigit = parseInt(cDigit, 10);//se convierte a número entero base 10

     /*si condition y el digito seleccionado multiplicado por 2 es mayor a 9, se le resta 9
     ej. 12-9=3 que es igual a 1+2=3 */
     if (condition && (nDigit *= 2) > 9) {
      nDigit -= 9;
     }
      /*esto se realiza cada que comienza un ciclo, a cardNumber(0)cada que se completa un
      ciclo se modifica por el digito sin modificar (false) o el digito que se obtuvo en la
      posicion par*/
      cardNumber += nDigit;//se le va a sumar el digito a cardNumber
      condition = !condition;//cada que se termine el ciclo, el condition va a cambiar ej.1ciclo-false 2ciclo-true ...
     }

      /*funcion debe retornar un boolean (false o true), que en este caso si retorna true es
      porque la division entre 10 de cardNumber tiene un residuo 0, lo que seria una tarjeta válida
      pero si el residuo es diferente a 0, la tarjeta es no válida*/
      return (cardNumber % 10) == 0;
    }
};
export default validator;
