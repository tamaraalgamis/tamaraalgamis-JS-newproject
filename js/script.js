// Definición de productos y selección de usuario
const productos = [
    { nombre: "jeans", precio: 100 },
    { nombre: "tops", precio: 50 },
    { nombre: "telares", precio: 150 }
];
let seleccion = prompt("Bienvenido/a! \nEsta es nuestra seleccion de productos (incluye impuestos): \nJeans S/.100 \nTops S/.50 \nTelares S/.150\n\n Por compras mayores a S/.200 obtienes un 10% de dcto! \n¿Desea comprar algún producto? si o no");

while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor ingrese si o no");
    seleccion = prompt("¿Desea comprar algún producto? si o no");
}

// Cálculo del precio final del producto
function calcularPrecioFinal(precio, cantidad) {
    const precioFinal = precio * cantidad;
    return precioFinal;
}

// Cálculo del total de la compra
let totalCompra = 0;
let resumenCompra = [];

function calcularTotalCompra(cantidad, precio) {
    totalCompra += calcularPrecioFinal(precio, cantidad);
}

// Selección de producto, talla y cantidad
function comprar() {
    let continuarComprando = true;
    while (continuarComprando) {
        const producto = prompt("¿Qué producto deseas comprar? jeans, tops o telares").toLowerCase();
        let talla = "";
        let precio = 0;
        let cantidad = 0;

        const productoSeleccionado = productos.find(item => item.nombre === producto);

        if (!productoSeleccionado) {
            alert("Producto no válido, por favor elige jeans, tops o telares");
            continue;
        }

        talla = prompt("¿Qué talla deseas? S, M, L").toUpperCase();
        precio = productoSeleccionado.precio;

        if (talla !== "S" && talla !== "M" && talla !== "L") {
            alert("Talla no válida, por favor elige S, M o L");
            continue;
        }

        cantidad = parseInt(prompt(`¿Cuántos ${producto} talla ${talla} deseas comprar?`));

        calcularTotalCompra(cantidad, precio);

        const precioFinal = calcularPrecioFinal(precio, cantidad);
        resumenCompra.push(`${cantidad} ${producto} talla ${talla} - S/. ${precioFinal.toFixed(2)}`);

        const confirmacion = confirm(`¿Quieres seguir comprando? El total hasta ahora es de S/. ${totalCompra.toFixed(2)}.`);

        if (!confirmacion) {
            continuarComprando = false;
        }
    }
}

if (seleccion === "si") {
    alert("Esta es nuestra seleccion de productos (incluye impuestos): \nJeans S/.100 \nTops S/.50 \nTelares S/.150 \n");
    comprar();
    
    // descuento si el total de la compra supera los S/.200
    if (totalCompra >= 200) {
        const descuento = totalCompra * 0.1;
        totalCompra -= descuento;
        resumenCompra.push(`Descuento 10% - S/. ${descuento.toFixed(2)}`);
    }

// resumen de la compra y método de pago
alert(`Resumen de tu compra: \n${resumenCompra.join('\n')} \nEl total de tu compra es de S/. ${totalCompra.toFixed(2)}.`);
let metodoPago = "";
while (!["visa", "mastercard", "transferencia bancaria", "paypal"].includes(metodoPago)) {
    metodoPago = prompt("¿Qué método de pago desea utilizar? tarjeta de crédito: visa, tarjeta de crédito: mastercard, transferencia bancaria, paypal").toLowerCase();
}

//mensaje de confirmación de compra
console.log(`Resumen de tu compra: \n${resumenCompra.join('\n')} \nEl total de tu compra es de S/. ${totalCompra.toFixed(2)}.`);
console.log(`Método de pago: ${metodoPago}`);

} else if(seleccion == "no") {
    alert ("Muchas gracias por ingresar, hasta pronto")
}
