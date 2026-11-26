// selectores.js - Seis formas de buscar nodos (final de index.html)

/* getElementById: Un nodo por su ID (IMPORTANTE: SIN #). HEADER ID = "cabecera" */
const cabecera = document.getElementById("cabecera");
console.log(`Por id "cabecera": <${cabecera.tagName}>`);

/* getElementByClassName: Un nodo por su CLASE, todos los nodos que tiene ese nombre "tarjeta". */
const tarjetas = document.getElementsByClassName("tarjeta");
/* length: cuantas tajertas encontró. */
console.log(`Por clase "tarjeta": ${tarjetas.length} tarjetas`);

/* getElementsByTagName: TODAS las etiquetas de section */
const secciones = document.getElementsByTagName("section");
console.log(`Por etiqueta <section>: ${secciones.length} secciones`);

/* querySelector: El primer nodo que cumple el selector CSS (con punto) */
const titulo = document.querySelector(".tarjeta-titulo");
console.log(`El primer .tarjeta-titulo dice: ${titulo.textContent}`);

/* querySelectorAll: TODOS los que cumplan  */
const todos = document.querySelectorAll(".tarjeta-titulo");
todos.forEach((t) => console.log(`Título de tarjeta: ${t.textContent}`));

/* Selector CSS compuesto porque accede al H1 de portada. */
const h1 = document.querySelector("#portada h1");
console.log(`El <h1> de la portada dice: ${h1.textContent}`);
