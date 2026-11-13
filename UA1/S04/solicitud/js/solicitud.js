/* solicitud.js - Pedir datos con prompt */
const nombre = prompt("Cual es su nombre?"); /* devuelve un texto */
const fotos = prompt("Cuantas fotos impresas?"); /* devuelve un texto */
console.log("Hola, " + nombre + "."); /* + une cadenas */
console.log("Fotos + 1:", fotos + 1); /* + une cadenas */
console.log("Fotos + 1:", Number(fotos) + 1); /* number: suma */
console.log("Pidio fotos", Number(fotos) > 0); /* comparar */
