const productosResidentEvil = ["Resident Evil 1", "Resident Evil 2", "Resident Evil 3", "Resident Evil 4", "Resident Evil 5"];

productosResidentEvil.push("Resident Evil 6");
productosResidentEvil.unshift("Resident Evil Zero")

const busqueda = prompt("Que producto deseas buscar?");

if (productosResidentEvil.includes(busqueda)) {
    const posicion = productosResidentEvil.indexOf(busqueda);
    console.log (`"${busqueda}" está en stock, en la posición ${posicion}`);
} else {
    console.log(`"${busqueda}" no se encuentra en stock`);
}

productosResidentEvil.splice(2, 1, "Resident Evil: Code Veronica");

const agotado = productosResidentEvil.pop();
    console.log(`Se ha eliminado el elemento: ${agotado}`);

function listarStock(lista) {
    console.log("Stock actual");
    for (const producto of lista) {
        console.log(`Producto: ${producto}`);
    }
    console.log(`Total: ${lista.length} productos`);
}

listarStock(productosResidentEvil);

const calcularIVA = precio => precio * 0.21;

function calcularTotal(precioBase, nombreJuego) {
    let impuesto = calcularIVA(precioBase);
    let precioFinal = precioBase + impuesto;

    alert("Has agregado: " + nombreJuego + "\n" +
        "Precio base: $" + precioBase + "\n" +
        "Monto IVA (21%): $" + impuesto + "\n" +
        "Subtotal con impuesto: $" + precioFinal);

        return precioFinal;
}

let totalCarrito = 0;
let continuar = true;

let textoMenu = "Bienvenido/a a la tienda oficial de Capcom (Sector Raccoon City):\n" + 
                "1. Resident Evil Zero ($12)\n" + 
                "2. Resident Evil 1 ($1)\n" + 
                "3. Resident Evil: Code Veronica ($7)\n" + 
                "4. Resident Evil 3 ($5)\n" + 
                "5. Resident Evil 4 ($10)\n" + 
                "6. Resident Evil 5 ($25)\n" + 
                "7. Resident Evil 6 ($29)\n" + 
                "8. Finalizar compra y salir\n";

while (continuar) {
    let opcionElegida = parseInt(prompt(textoMenu));

    switch (opcionElegida) {
        case 1:
            totalCarrito = totalCarrito + calcularTotal(12, "Resident Evil Zero");
            break;
        case 2:
            totalCarrito = totalCarrito + calcularTotal(1, "Resident Evil 1");
            break;
        case 3:
            totalCarrito = totalCarrito + calcularTotal(7, "Resident Evil: Code Veronica");
            break;
        case 4:
            totalCarrito = totalCarrito + calcularTotal(5, "Resident Evil 3");
            break;
        case 5:
            totalCarrito = totalCarrito + calcularTotal(10, "Resident Evil 4");
            break;
        case 6:
            totalCarrito = totalCarrito + calcularTotal(25, "Resident Evil 5");
            break;
        case 7:
            totalCarrito = totalCarrito + calcularTotal(29, "Resident Evil 6");
            break;
        case 8:
            continuar = false;
            break;
        default:
            alert("Opción no válida. Por favor ingrese un número del 1 al 8.");
            break;
    }
}

if (totalCarrito > 0) {
    alert("Compra finalizada con éxito!\nEl monto total a pagar por tu pedido en Capcom, sector Raccoon City es: $" + totalCarrito.toFixed(2) + "\nGracias por tu compra!");
} else {
    alert("Gracias por visitar la tienda de Capcom!.");
}