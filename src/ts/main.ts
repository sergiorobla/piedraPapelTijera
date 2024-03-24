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

  function jugar(eleccionUsuario: string) {
    const opciones: string[] = ["✊", "✋", "✌"];
    const eleccionComputadora =
      opciones[Math.floor(Math.random() * opciones.length)];
    if (resultadosDiv) {
      resultadosDiv.innerHTML = "";
      resultadosDiv.innerHTML += `<div class="resultadoMaquina">${eleccionComputadora}</div>`;
      if (eleccionUsuario === eleccionComputadora) {
        resultadosDiv.innerHTML +=
          `<div class="resultadoFinal">¡Buen Empate!</div>`;
      } else if (
        (eleccionUsuario === "✊" && eleccionComputadora === "✌") ||
        (eleccionUsuario === "✋" && eleccionComputadora === "✊") ||
        (eleccionUsuario === "✌" && eleccionComputadora === "✋")
      ) {
        resultadosDiv.innerHTML +=
          `<div class="resultadoFinal">Enhorabuena, <br> ¡Ganaste!</div>`;
      } else {
        resultadosDiv.innerHTML +=
          `<div class="resultadoFinal">Que lástima... <br> Perdiste</div>`;
      }
    } else {
      console.error("El elemento del reusltado es null.");
    }
  }
});
