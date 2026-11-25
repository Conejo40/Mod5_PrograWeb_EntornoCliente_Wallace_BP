/* catalogo.js - Ejercicio 1 · Catálogo de talleres */

/* Creo objeto con nombre y precio: */
const talleres = [
  {Nombre:`Cocina de la casa · Inicial`, Precio: 68000},
  {Nombre:`Cocina de la casa · Intermedio`, Precio: 72000},
  {Nombre:`Panadería · Masa madre`, Precio: 95000},
  {Nombre:`Panadería · Pan de campo`, Precio: 70000},
  {Nombre:`Panadería · Bollería`, Precio: 88000},
  {Nombre:`Repostería · Tartas`, Precio: 82000},
  {Nombre:`Repostería · Decoración`, Precio: 58000},
];

/* Acumuladores y contadores */
let suma = 0;
let caros = 0;
let masCaro = talleres[0];

/* Formato de colones */
const colones = new Intl.NumberFormat("es-CR", {style: "currency", currency: "CRC",minimumFractionDigits: 0, maximumFractionDigits: 0});

for (const t of talleres) {
  console.log(`${t.Nombre} ${colones.format(t.Precio)}`);
  suma += t.Precio;

  if (t.Precio > 80000) {
    caros++;
  }

  if (t.Precio > masCaro.Precio) {
    masCaro = t;
  }
}
console.log(`talleres: ${talleres.length}`);
console.log(`Promedio: ${colones.format(suma / talleres.length)}`);
console.log(`Más de \u20A180000: ${caros}`);
console.log(`El más caro: ${masCaro.Nombre}`);