const productos = [
  { id: 1, nombre: "Manzanas", precio: 2.5, categoria: "Frutas" },
  { id: 2, nombre: "Leche", precio: 3.2, categoria: "Lácteos" },
  { id: 3, nombre: "Pan", precio: 1.8, categoria: "Panadería" },
  { id: 4, nombre: "Queso", precio: 5.0, categoria: "Lácteos" },
  { id: 5, nombre: "Tomates", precio: 2.0, categoria: "Verduras" },
  { id: 6, nombre: "Huevos", precio: 4.5, categoria: "Lácteos" },
  { id: 7, nombre: "Arroz", precio: 3.0, categoria: "Granos" },
  { id: 8, nombre: "Aceite", precio: 6.0, categoria: "Aceites" },
  { id: 9, nombre: "Cafe", precio: 4.2, categoria: "Despensa" },
  { id: 10, nombre: "Platanos", precio: 1.2, categoria: "Frutas" },
  { id: 11, nombre: "Pollo", precio: 7.5, categoria: "Carnes" },
  { id: 12, nombre: "Lentejas", precio: 1.6, categoria: "Granos" }
];

let carrito = [];

function mostrarProductos() {
  const listaProductosDiv = document.getElementById("productoLista");
  if (!listaProductosDiv) return;

  const template = document.getElementById("producto-template");
  if (!template) return;

  listaProductosDiv.innerHTML = "";

  productos.forEach((producto) => {
    const fragment = template.content.cloneNode(true);

    const nombreEl = fragment.querySelector("[data-nombre]");
    const precioEl = fragment.querySelector("[data-precio]");
    const categoriaEl = fragment.querySelector("[data-categoria]");
    const agregarBtn = fragment.querySelector("[data-agregar-boton]");

    if (nombreEl) nombreEl.textContent = producto.nombre;
    if (precioEl) precioEl.textContent = producto.precio.toFixed(2);
    if (categoriaEl) categoriaEl.textContent = producto.categoria;

    if (agregarBtn) {
      agregarBtn.setAttribute("onclick", `agregarAlCarrito(${producto.id})`);
    }

    listaProductosDiv.appendChild(fragment);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});
