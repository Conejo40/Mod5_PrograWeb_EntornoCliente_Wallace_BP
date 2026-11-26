// nombre.js - Controles con el mismo name (final de contacto.html)

/* getElementByName: los 3 botones de opción con name = "lugar" */
const lugares = document.getElementsByName("lugar");

/* length cuenta la cantidad de lugares */
console.log(`Opciones de "lugar": ${lugares.length}`);

/* value: lo que el formulario envía por cada opción */
lugares.forEach((r) => console.log(`value de una opción: ${r.value}`));

/* los textos que si se ven estan en las etiquetas */
const etiquetas = document.querySelectorAll(".opcion-etiqueta");

/* etiquetas[0]: esta llamando a la primera etiqueta */
console.log(`Texto de la 1.ª opción: ${etiquetas[0].textContent}`);
