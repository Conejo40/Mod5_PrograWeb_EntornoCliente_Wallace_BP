/* horario.js - Ejercicio 2 de la S06 -> ¿Abre ese día? */

try{
  let dia = prompt("Ingrese el día:");

  /* limpia los espacios sobrantes y convierte las mayus en minus */
  dia = dia.trim().toLowerCase();
  
   switch (dia) {
    case "domingo":
      console.log(`El ${dia} esta cerrado.`)
    case "lunes":
      console.log(`El ${dia} esta cerrado.`)
      break;
    default:
      console.log(`El ${dia} abre de 10:00 a. m. a 7:00 p. m.`)
    break;
 }
} catch (error) {
  console.warn("No se indico el dia.")
} finally {
  console.log("Casa Tomillo · Barrio Amón")
}