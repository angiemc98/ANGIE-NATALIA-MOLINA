//Entradas o datos de Usuario
let cantidad = parseInt(prompt("¿Cuántas entradas desea comprar?"));
let dia = prompt("Ingrese el día de la semana:").toLowerCase();
let total = 0;

//Repetir el ciclo según cantidad de entradas
for (let i = 1; i <= cantidad; i++) {
    //Recibir edad del cliente
    let edad = parseInt(prompt(`Ingrese la edad del cliente #${i}`));
    let precio = 0;

    //Categorizar al cliente según edad
    if (edad < 18){
        categoria = "niño";
    }
    else if (edad < 60) {
        categoria = "adulto";
    }
    else {
        categoria = "adulto mayor";
    }

    //Precio de la boleta según categoria
    switch (categoria) {
        case "niño":
            precio = 8000;
            break;
        case "adulto":
            precio = 12000;
            break;
        case "adulto mayor":
            precio = 7000;
            break;
        default:
            console.log("Edad no válida, se tomará como adulto.");
            precio = 12000;
    }
    
    //Verificar si es miercoles y aplicar descuento de 50%
    if (dia === "miércoles" || dia === "miercoles") {
        precio = precio * 0.85;
    }

    //Contador para el Total a pagar
    total += precio;
}

//Imprimir resultado
console.log(`El total a pagar por ${cantidad} entrada(s) es: $${total}`);
