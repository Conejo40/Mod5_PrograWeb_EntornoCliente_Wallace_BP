/* cupos.js - Ejercicio 1 de la S06 -> condicionales */
const nivel = "inicial";
const cupos = 6;

if (cupos === 0) {
  console.error("Taller lleno")
} else if (cupos <= 2) {
  console.warn("¡Últimos cupos!")
} else {
  console.log("Hay cupos disponibles")
}

console.log(cupos === 1 ? "«Queda 1 cupo»" : `«Quedan ${cupos} cupos»`)

switch (nivel) {
  case "inicial":
    console.log("«No necesita experiencia»");
    break;
  case "intermedio":
    console.log("«Requiere el nivel inicial»");
    break;
  default:
    console.log("«Consulte con la escuela»")
    break;
}   