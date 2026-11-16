/* formato.js - Numeros con formato CR */

const precio = 45000; /* Numero */
console.log(precio.toLocaleString("es-CR")); /* Separa los miles */
const opciones = {style: "currency", currency: "CRC"}; /* Colones */
const colones = new Intl.NumberFormat("es-CR", opciones);
console.log(colones.format(precio));  /* ₡ y decimales */
console.log(colones.format(75000 * 1.13));  /* Redondea solo */