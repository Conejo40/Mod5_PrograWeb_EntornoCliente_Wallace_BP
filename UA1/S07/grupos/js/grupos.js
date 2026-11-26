/* grupos.js - Ejercicio 3 · Grupos de inscripción */
let cupos = 8;
const personas = 3
let ronda = 0;

while (cupos > 0) {
  cupos -= Math.min(cupos, personas);
  ronda++;
  console.log(`Ronda ${ronda}: ${personas} personas · quedan ${cupos}`);
}

console.warn(`Taller lleno.`)