/* app.js - error de sintaxis: falta de comillas */

console.log("Inicio del programa");
console.log("Hola, mundo"); /* -> faltaban las comillas */
console.log("Fin del programa");

/* Error de semantica: calculo erroneo */
console.log("Promedio de 8 y 9");
console.log(8 + 9 / 2); /* primero divide y luego suma */

console.log(
  (8 + 9) / 2,
); /* solucion: la suma entre () para que se haga primero. */
