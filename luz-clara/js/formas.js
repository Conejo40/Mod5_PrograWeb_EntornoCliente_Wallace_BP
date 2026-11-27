// formas.js - Tres formas de escribir la misma función
function enMinutos(horas) {                 // 1. declaración
  return horas * 60;
}
const enMinutos2 = function (horas) {       // 2. expresión
  return horas * 60;
};

const enMinutos3 = (horas) => horas * 60;   // 3. flecha
console.log(enMinutos(2), enMinutos2(2), enMinutos3(2));