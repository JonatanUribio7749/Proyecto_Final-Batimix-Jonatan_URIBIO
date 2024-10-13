Aplicación de Pedidos de Batidos:

Esta aplicación permite a los usuarios realizar pedidos de batidos personalizados eligiendo entre
diferentes sabores, tamaños y cantidades. Al completar el formulario, el sistema calcula el costo total
del pedido, aplica un descuento si el costo supera un monto específico, y genera un ticket con un
número único y un mensaje de confirmación para el cliente.


Detalles del Código

1. Captura de Eventos del Usuario
Utilizamos el evento DOMContentLoaded para ejecutar el código JavaScript una vez que el DOM ha sido cargado completamente.

2. Formulario de Pedido
Se captura el evento submit del formulario para agregar un nuevo batido al pedido. Los datos del formulario (nombre, tipo de batido, tamaño, cantidad) se recogen y se almacenan en un array pedidoActual, que es guardado en localStorage.

3. Resumen del Pedido
Cada vez que el usuario agrega un batido, el resumen del pedido se actualiza automáticamente en el DOM. Utilizamos map() para recorrer los pedidos actuales y generar una lista con el nombre, el producto, el tamaño y la cantidad de cada batido.

4. Descuento
La aplicación calcula el total del pedido sumando los precios de los batidos seleccionados. Si el total supera los $50, se aplica automáticamente un descuento del 10%, que se refleja tanto en el DOM como en el total mostrado.

5. Generación del Ticket
Cuando el usuario hace clic en el botón "Terminar Pedido", se muestra el total final a pagar y un número de ticket generado aleatoriamente para su identificación. El ticket también se actualiza en el DOM.

6. Resetear Pedido
El botón de "Resetear Pedido" borra todo el pedido y limpia el localStorage, permitiendo al usuario empezar de nuevo. También borra el ticket y el resumen del pedido en el DOM.
