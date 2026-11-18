/* metodos.js -Metodos de las cadenas y plantillas */

const escrito = "  retrato familiar  ";               /* Con espacios de mas */
const servicio = escrito.trim();                      /* Metodo para eliminar espacios */
console.log(escrito.length, servicio.length);         /* Muestra la cantidad de letras */
console.log(servicio.toUpperCase());                  /* Muestra todo en mayus */
console.log(servicio.includes("familiar"));           /* Contiene X palabra */
console.log(servicio.slice(0, 7));                    /* Muestra de la letra 0 hasta la 6 */
console.log(`Servicio: ${servicio}`);                 /* Plantillas con $ */
