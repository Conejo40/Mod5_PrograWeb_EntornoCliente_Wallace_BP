// callback.js - Una función que recibe otra función
function repetir(veces, accion) { //2 parametros, veces y accion es una función. 
  // veces: cuántas · accion: qué hacer
for (let i = 1; i <= veces; i++) {
  accion(i); // la llama en cada vuelta
}
}
repetir(3, (n) => console.log(`Foto ${n}`)); // callback