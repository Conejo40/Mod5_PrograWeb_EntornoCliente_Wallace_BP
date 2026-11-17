/* pago.js - Ejercicio 1 de la S05 -> Plan de pago */

/* Declaracion de constantes: */
let taller ="  pandería: masa madre  ";
taller = taller.trim();
const fecha = new Date(2026, 10, 21);
const total = 105000;
const cuotas = 4;
let cuota = total / cuotas;
couota = Math.ceil(cuota);

/* formato de colones */
const colones = new Intl.NumberFormat("es-CR", {style: "currency", currency: "CRC"});

/* Salida de datos: */
console.log(`Taller: ${taller.toUpperCase()}`);
console.log(`${fecha.toLocaleDateString("es-CR", {dateStyle: "full"})}`);
console.log(`Total: ${colones.format(total)}`);
console.log(`${cuotas} cuotas de ${colones.format(cuota)}`);
console.log(`¿Cuota exacta? ${Number.isInteger(cuota)}`);
console.log(`Con ${cuotas -1} cuotas: ${colones.format(total / 3 )} cada una`);
