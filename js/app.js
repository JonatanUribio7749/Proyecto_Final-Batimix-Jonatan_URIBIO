document.addEventListener('DOMContentLoaded', function() {
  const pedidoForm = document.getElementById('pedidoForm');
  const resumenPedido = document.getElementById('resumenPedido');
  const ticketMensaje = document.getElementById('ticketMensaje');
  const descuentoInfo = document.getElementById('descuentoInfo');
  const preciosBatidos = {
    "Fresa": { "pequeño": 3, "mediano": 5, "grande": 7 },
    "Banana": { "pequeño": 3.5, "mediano": 5.5, "grande": 7.5 },
    "Mango": { "pequeño": 4, "mediano": 6, "grande": 8 },
    "Piña": { "pequeño": 3, "mediano": 5, "grande": 7 },
    "Frutas Mixtas": { "pequeño": 4, "mediano": 6.5, "grande": 8.5 }
  };

  let pedidoActual = JSON.parse(localStorage.getItem('pedidoActual')) || [];
  let numeroTicket = Math.floor(Math.random() * 10000) + 1; 

  // Actualizar el DOM con el resumen del pedido
  function actualizarResumenPedido() {
    resumenPedido.innerHTML = pedidoActual.map(pedido => 
      `${pedido.nombre}: ${pedido.producto} (${pedido.tamano}) - Cantidad: ${pedido.cantidad}`).join('<br>');

    // Verificar si se aplica el descuento
    let total = pedidoActual.reduce((acc, pedido) => 
      acc + (preciosBatidos[pedido.producto][pedido.tamano] * pedido.cantidad), 0);
    
    if (total > 50) {
      descuentoInfo.innerHTML = "¡Felicidades! Tu pedido califica para un descuento del 10%.";
    } else {
      descuentoInfo.innerHTML = "El descuento se aplica a pedidos superiores a $50.";
    }
  }
  actualizarResumenPedido();

  // Manejar el evento de submit del formulario para agregar un nuevo pedido
  pedidoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let producto = document.getElementById('producto').value;
    let tamano = document.getElementById('tamano').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);

    const nuevoPedido = { nombre, producto, tamano, cantidad };
    pedidoActual.push(nuevoPedido);

    // Guardar el pedido en localStorage
    localStorage.setItem('pedidoActual', JSON.stringify(pedidoActual));

    actualizarResumenPedido();  // Actualizar el DOM
  });

  // Botón para terminar el pedido y generar ticket
  document.getElementById('terminarPedido').addEventListener('click', function() {
    let total = pedidoActual.reduce((acc, pedido) => 
      acc + (preciosBatidos[pedido.producto][pedido.tamano] * pedido.cantidad), 0);

    // Aplicar un descuento del 10% si el total supera los $50
    if (total > 50) {
      total *= 0.9; // Aplicar 10% de descuento
      ticketMensaje.innerHTML = `<div class="ticket-final">Total con descuento aplicado (10%): <strong>$${total.toFixed(2)}</strong><br> Número de ticket: <strong>${numeroTicket}</strong></div>`;
    } else {
      ticketMensaje.innerHTML = `<div class="ticket-final">Total a pagar: <strong>$${total.toFixed(2)}</strong><br> Número de ticket: <strong>${numeroTicket}</strong></div>`;
    }
  });

  // Botón para resetear el pedido
  document.getElementById('resetPedido').addEventListener('click', function() {
    localStorage.removeItem('pedidoActual');
    pedidoActual = [];
    actualizarResumenPedido();
    ticketMensaje.innerHTML = '';
  });
});

$('.carousel').carousel({
  interval: 3000 
});
