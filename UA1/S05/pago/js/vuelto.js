/* vuelto.js - ejercio 2 de la S05 -> uso de parseFloat y parseInt*/
const total = 105000;

/* Entrada de datos: */
const personas = parseInt(prompt("Ingrese la cantidad de personas:"));
const pago = parseFloat(prompt("Ingresse el pago:"));

/* Calculos: */
let pagar = total * personas;

/* Salida de datos: */
console.log(`Personas: ${personas}`);
console.log(`A pagar: ${pagar.toLocaleString("es-CR")}`);
console.log(`Pagó: ${pago}`);
console.log(`Vuelto: ${(pago - pagar).toFixed(2)}`)