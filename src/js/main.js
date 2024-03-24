"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const btnPiedra = document.getElementById("piedra");
    const btnPapel = document.getElementById("papel");
    const btnTijera = document.getElementById("tijera");
    const resultadosDiv = document.getElementById("resultados");
    btnPiedra?.addEventListener("click", function () {
        jugar("✊");
    });
    btnPapel?.addEventListener("click", function () {
        jugar("✋");
    });
    btnTijera?.addEventListener("click", function () {
        jugar("✌");
    });
    function jugar(eleccionUsuario) {
        const opciones = ["✊", "✋", "✌"];
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
        if (resultadosDiv) {
            resultadosDiv.innerHTML = "";
            resultadosDiv.innerHTML += `<div class="resultadoMaquina">${eleccionComputadora}</div>`;
            if (eleccionUsuario === eleccionComputadora) {
                resultadosDiv.innerHTML +=
                    `<div class="resultadoFinal">Empate!</div>`;
            }
            else if ((eleccionUsuario === "✊" && eleccionComputadora === "✌") ||
                (eleccionUsuario === "✋" && eleccionComputadora === "✊") ||
                (eleccionUsuario === "✌" && eleccionComputadora === "✋")) {
                resultadosDiv.innerHTML +=
                    `<div class="resultadoFinal">¡Ganaste!</div>`;
            }
            else {
                resultadosDiv.innerHTML +=
                    `<div class="resultadoFinal">Perdiste...</div>`;
            }
        }
        else {
            console.error("El elemento del reusltado es null.");
        }
    }
});
