/* fechas.js - Fechas con Date */

const hoy = new Date();                           /* la fecha y la hora de ahora */
console.log(hoy.getFullYear());                   /* El año */
console.log(hoy.getMonth() + 1);                  /* Mes: comienza en 0 */
console.log(hoy.getDate());                       /* Dia del mes */
console.log(hoy.toLocaleDateString("es-CR"));     /* Formato de Costa Rica */
const sesion = new Date(2026, 11, 5);             /* Muestra 5 de Diciembre de 2026 */
console.log(sesion.toLocaleDateString("es-CR", {dateStyle: "full"}));