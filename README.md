# Validación número de tarjeta de crédito.

## 1. Descripción

Página web para validar si el numero de una tarjeta de crédito es valido o no, se utilizo el algoritmo de Luhn para la validacion de los numeros de tarjeta.
Es una página de audiolibros con el nombre “Escúchame” 100% en español donde los usuarios tendrán una prueba gratis de 7 días y podrán disfrutar de todos los beneficios que se encuentran en la página web, para ello deberá realizar una suscrición donde se les pide el numero de la tarjeta de crédito.

## 2. Interfaz de usuario (UI)

La interfaz permitir al usuario:

* Insertar el número que quieremos validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos
4 caracteres.
* No debe poder ingresar un campo vacío.

## 3 Archivos 

##### (HTML y CSS)
En el archivo de HTML y CSS se encuentra maquetado de forma exacta el prototipo final realizado en  la herramienta
de diseño Figma, tiene un estilo juvenil, se utiliza colores llamativos para darle dinamismo a la pagina.

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Se encuentran 3 etiquetas princupales.
de cero:

* `<header>`: encabezado de tu proyecto.
* `<section>`: contenido principal de tu proyecto.
* `<form>`: formulario para agregar la información de la tarjeta de crédito.

##### `src/style.css`

Este archivo contiene las reglas de estilo sin ninguna libreria.

#### Funcionalmente (JavaScript )

* La lógica del proyecto esta implementada completamente en Vanilla JavaScript.
* Se encuentran  2 archivos JavaScript separando responsabilidades:

##### `src/validator.js`

En este archivo esta las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función es pura e independiente del DOM.

Para esto se implemento el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función retorna un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función retorna un `string` donde todos menos
los últimos cuatro caracteres son reemplazados por un numeral (`#`).
Esta función siempre mantiene los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

##### `src/index.js`

En este archivo se encuentra todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).


## 4. Prototipo de alta fidelidad.
![Prototpo-alta-fidelidad-1era-pagina](https://github.com/Lusaenz/BOG003-card-validation/blob/luisa/src/IMAGENES/DISE%C3%91-FINAL-PAG1.png)
![Prototpo-alta-fidelidad-2da-pagina](https://github.com/Lusaenz/BOG003-card-validation/blob/luisa/src/IMAGENES/DISE%C3%91-FINAL-PAG2.png)
![Prototpo-alta-fidelidad-3era-pagina](https://github.com/Lusaenz/BOG003-card-validation/blob/luisa/src/IMAGENES/DISE%C3%91-FINAL-PAG3.png)

## 5. Visualización de la página web.
En este [Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w) podras interactuar con la página web.

***
