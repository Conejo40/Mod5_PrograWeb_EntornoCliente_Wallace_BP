// closure.js - Una función que recuerda su variable
function crearContador() {
  let fotos = 0;                // local de crearContador

  return () => {                // función de adentro
  fotos++;                      // la recuerda: closure
  return fotos;
  };
}

const contar = crearContador(); // contar es una función
console.log(contar());          // 1
console.log(contar());          // 2
console.log(contar());          // 3