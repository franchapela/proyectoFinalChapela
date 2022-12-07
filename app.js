// Archivo JavaScript

// Variable global que representa el stock de todos los productos
let stock = {};

// Función para añadir stock
function añadirStock(nombre, cantidad) {
  if (stock[nombre] === undefined) {
    stock[nombre] = 0;
  }
  stock[nombre] += cantidad;
}

// Función para retirar stock
function retirarStock(nombre, cantidad) {
  if (stock[nombre] === undefined) {
    stock[nombre] = 0;
  }
  stock[nombre] -= cantidad;
}

// Función para actualizar el stock de un producto
function actualizarStock(nombre, cantidad) {
  stock[nombre] = cantidad;
}

// Evento que se ejecuta cuando el usuario envía el formulario
document.getElementById("formulario").addEventListener("submit", (event) => {
  // Prevenimos que se envíe el formulario
  event.preventDefault();

  // Obtenemos los datos del formulario
  const nombre = document.getElementById("nombre").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const accion = document.getElementById("accion").value;

  // Realizamos la acción correspondiente
  if (accion === "añadir") {
    añadirStock(nombre, cantidad);
  } else if (accion === "retirar") {
    retirarStock(nombre, cantidad);
  } else if (accion === "actualizar") {
    actualizarStock(nombre, cantidad);
  }

  // Limpiamos el formulario
  document.getElementById("formulario").reset();
});
