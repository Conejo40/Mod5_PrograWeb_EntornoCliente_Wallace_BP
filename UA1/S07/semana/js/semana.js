/* semana.js - Ejercicio 2 · Semana de talleres  */

/* Creo la matriz */
const talleres = [
  ["Martes", "Cocina inicial", "Tartas"],
  ["Miércoles", "Masa madre"],
  ["Jueves", "Cocina intermedia"],
  ["Viernes", "Pan de campo"],
  ["Sábado","Bollería", "Decoración"],
];

/* i seria cada vector de la matriz
slice espefica desde donde empieza a leer. */
for (const i of talleres) {
  const cantidad = i.length - 1;
  const nombres = i.slice(1).join(", ");
  console.log(`${i[0]} (${cantidad}): ${nombres}`);
}
