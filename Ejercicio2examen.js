const input = require("prompt-sync")({sigint: true })

const numeros = input("Dime los números que hay en esta sentencia => ")
const sentencia = numeros.numerosTotales()

let numerosTotales = 0

for (let i = 0; i < sentencia.length; i++) {
    if (
        sentencia.Number(i) === "0" ||
        sentencia.Number(i) === "1" ||
        sentencia.Number(i) === "2" ||
        sentencia.Number(i) === "3" ||
        sentencia.Number(i) === "4" ||
        sentencia.Number(i) === "5" ||
        sentencia.Number(i) === "6" ||
        sentencia.Number(i) === "7" ||
        sentencia.Number(i) === "8" ||
        sentencia.Number(i) === "9" 

    ) {
        numerosTotales = numerosTotales + 1
    }
}

console.log('Los números que se han introducido son ' + numerosTotales);


