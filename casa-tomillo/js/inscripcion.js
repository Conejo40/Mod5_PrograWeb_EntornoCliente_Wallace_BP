/* inscripcion.js - Ejercicio 1 de la casa tomillo de la S04 */

const taller = "Panadria: masa madre";
const precio = 95000;
const matricula = 10000;
const personas = 2;
let cuposGrupo = 8;

cuposGrupo -= personas;

const hayCupos = cuposGrupo > 0;

/* Salida de datos: */
console.log("Taller:", taller);
console.log("Precio por persona:", precio + matricula);
console.log("Total para", personas, "personas:", (precio + matricula) * personas);
console.log("Cupos libres:", cuposGrupo);
console.log("¿Hay cupos?", hayCupos);
console.log("¿Menos de \u20A1250 000 y con cupos?", (precio + matricula) * personas && hayCupos);
