// recorridos.js - forEach, map y filter reciben un callback
const precios = [45000, 75000, 38000];
precios.forEach((p) => console.log(`₡${p}`)); // cada uno

const conIva = precios.map((p) => Math.round(p * 1.13)); // nuevo
console.log(conIva.join(", "));

const baratos = precios.filter((p) => p < 50000); // solo algunos
console.log(baratos.join(", "));