/* presupuesto.js - Ejercicio 2 de S04, uso de prompt */

const precio_persona = 105000;
const nombre = prompt("Ingrese su nombre:");
const cantidad_personas = prompt("Ingrese la cantidad de personas:");

console.log("Hola,", nombre);
console.log("Personas:", Number(cantidad_personas));
console.log("Total:", Number(cantidad_personas) * precio_persona);
console.log("¿Es grupo (3 o más)?", Number(cantidad_personas) >= 3);