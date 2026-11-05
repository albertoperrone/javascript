const productosCapcom = ["Resident Evil 1", "Resident Evil 2", "Resident Evil 3", "Resident Evil 4", "Resident Evil 5"];

productosCapcom.push("Resident Evil 6");
productosCapcom.unshift("Resident Evil Zero")

const precioIVA = 1.21;

class Capcom {
    static id = 0
    constructor (nombreJuego, categoria, clasificacion, precio) {
        this.id = ++Capcom.id;
        this.nombreJuego = nombreJuego;
        this.categoria = categoria;
        this.clasificacion = clasificacion;
        this.precio = precio;
    }
        
        calcularIVA = () => {
            this.precio = this.precio*precioIVA;
            console.log("Precio en pesos con IVA incluido:" + this.precio)
        }
    
}

const juego1 = new Capcom("Resident Evil zero", "Horror", "Mature 17+", 12)
const juego2 = new Capcom("Resident Evil 1", "Horror", "Mature 17+", 1,)
const juego3 = new Capcom("Resident Evil: code veronica", "Horror", "Mature 17+", 7)
const juego4 = new Capcom("Resident Evil 3", "Horror", "Mature 17+", 5)
const juego5 = new Capcom("Resident Evil 4", "Horror", "Mature 17+", 10)
const juego6 = new Capcom("Resident Evil 5", "Horror", "Mature 17+", 25)
const juego7 = new Capcom("Resident Evil 6", "Horror", "Mature 17+", 29)

const busqueda = prompt("Que producto deseas buscar?");

if (productosCapcom.includes(busqueda)) {
    const posicion = productosCapcom.indexOf(busqueda);
    console.log (`"${busqueda}" está en stock, en la posición ${posicion}`);
} else {
    console.log(`"${busqueda}" no se encuentra en stock`);
}

productosCapcom.splice(2, 1, "Resident Evil: Code Veronica");

const agotado = productosCapcom.pop();
    console.log(`Se ha eliminado el elemento: ${agotado}`);

function listarStock(lista) {
    console.log("Stock actual");
    for (const producto of lista) {
        console.log(`Producto: ${producto}`);
    }
    console.log(`Total: ${lista.length} productos`);
}

listarStock(productosCapcom);

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