
document.getElementById("btnCalcular").addEventListener("click", procesarDesafio);

function procesarDesafio() {
    let cantidadInput = document.getElementById("cantidad").value;
    let cantidad = parseInt(cantidadInput);
    
    let contenedorResultado = document.getElementById("resultado");
    
    // Validación básica de entrada
    if (isNaN(cantidad) || cantidad <= 0) {
        contenedorResultado.innerHTML = "<p style='color: red;'>Por favor, ingrese un número válido mayor a 0.</p>";
        return;
    }

    contenedorResultado.innerHTML = "";

    let a = 0;
    let b = 1;
    let c;

    for (let i = 1; i <= cantidad; i++) {
        let numeroActual;

        if (i === 1) {
            numeroActual = a;
        } else if (i === 2) {
            numeroActual = b;
        } else {
            c = a + b;
            a = b;
            b = c;
            numeroActual = c;
        }

        let esPrimo = verificarSiEsPrimo(numeroActual);

        let clasePrimo = esPrimo ? "item-numero es-primo" : "item-numero";
        let etiquetaPrimo = esPrimo ? "<span class='badge-primo'>¡Es Primo!</span>" : "<span>No es primo</span>";

        contenedorResultado.innerHTML += `
            <div class="${clasePrimo}">
                <span><strong>Término ${i}:</strong> Valor Fibo = ${numeroActual}</span>
                ${etiquetaPrimo}
            </div>
        `;
    }
}

// Función auxiliar para verificar números primos
function verificarSiEsPrimo(numero) {
    // Casos especiales menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    let contadorDivisores = 0;
    
    // Ciclo para verificar divisibilidad
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contadorDivisores++;
        }
    }

    // Si tiene exactamente 2 divisores (1 y sí mismo) es primo
    return contadorDivisores === 2;
}