/* vista.js - Vista: Muestra los datos (por ahora en consola) */
class VisitaReservas {
  mostrar(lista) {
    lista.array.forEach((r, i) => {
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`)
    });
  }
  mostrarIngresos(monto) {
    console.log(`Ingresos: ₡${monto.toLocaleString("es-CR")}`)
  }
  error(texto) {
    console.error(texto);
  }
  
}