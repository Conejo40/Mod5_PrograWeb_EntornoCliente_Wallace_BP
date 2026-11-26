// dom.js - Recorre el árbol de nodos de index.html (al final del body)

/* texto que está llamando dentro de la etiqueta title */
console.log(`Título de la página: ${document.title}`);

/* Es el nodo html: La raíz de todos los elementos. */
const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

/* Accede al nodo de body */
const cuerpo = document.body;

/* Recorre los hijos directos de body o saltando los nodos script */
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    /* Muestra la etiqueta de hijo y su id (ejem: MAIN ID CONTENIDO) */
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}

/* CHILDREN[1] = Segundo del body, posicion 1 en main */
const principal = cuerpo.children[1];

/* parentElement sube un nivel, el padre del main es body */
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);

/* firstElementChild : Baja un nivel, al primer hijo de main */
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);

/* chidren.length cuenta cuantos hijos directos (secciones) hay en main */
console.log(`Secciones dentro de <main>: ${principal.children.length}`);
