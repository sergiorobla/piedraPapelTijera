"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const btnPiedra = document.getElementById("piedra");
    const btnPapel = document.getElementById("papel");
    const btnTijera = document.getElementById("tijera");
    const resultadosDiv = document.getElementById("resultados");
    const contadorDiv = document.getElementById("contador");
    let contadorEmpate = 0;
    let contadorVictoria = 0;
    let contadorDerrota = 0;
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
            resultadosDiv.innerHTML += `<div class="resultadoMaquina">${eleccionUsuario} vs ${eleccionComputadora}</div>`;
            if (eleccionUsuario === eleccionComputadora) {
                resultadosDiv.innerHTML += `<div class="resultadoFinal">¡Buen Empate!</div>`;
                contadorEmpate++;
            }
            else if ((eleccionUsuario === "✊" && eleccionComputadora === "✌") ||
                (eleccionUsuario === "✋" && eleccionComputadora === "✊") ||
                (eleccionUsuario === "✌" && eleccionComputadora === "✋")) {
                resultadosDiv.innerHTML += `<div class="resultadoFinal">Enhorabuena, <br> ¡Ganaste!</div>`;
                contadorVictoria++;
            }
            else {
                resultadosDiv.innerHTML += `<div class="resultadoFinal">Que lástima... <br> Perdiste</div>`;
                contadorDerrota++;
            }
        }
        else {
            console.error("El elemento del resultado es null.");
        }
        contadorDiv.innerHTML = `<div class="contadorResul">Victorias: ${contadorVictoria}, Derrotas: ${contadorDerrota}, Empates: ${contadorEmpate}</div>`;
    }
});
