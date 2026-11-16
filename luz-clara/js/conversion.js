/* conversion.js - Convertir entre texto y numero */

console.log(Number("45000.5"));           // texto a número
console.log(parseInt("45000.5"));         // solo la parte entera
console.log(parseFloat("45000.5"));       // con decimales
console.log(parseInt("3 fotos"));         // lee hasta donde puede
console.log(Number("3 fotos"));           // NaN: no es un número
const monto = 75000 * 1.13;              // 84749.99999999999
console.log(precio);                      // decimales de más
console.log(monto.toFixed(2));           // 2 decimales (texto)
console.log(typeof monto.toFixed(2));    // string
console.log(monto.toPrecision(3));       // 3 cifras
console.log(monto.toExponential(1));     // notación científica
console.log((45000).toString() + 1);      // número a texto: une