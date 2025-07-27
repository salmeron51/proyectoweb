// Validar formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      const email = form.querySelector("input[type='email']").value;
      if (!email.includes("@")) {
        alert("Por favor, introduce un correo válido.");
        e.preventDefault();
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const calendario = document.getElementById("calendario");

  // Días del mes simulado (ejemplo: julio 2025, 31 días)
  const diasDelMes = 31;

  // Días con eventos (puedes cambiar estos valores)
  const diasConEventos = [3, 10, 15, 22, 28];

  for (let dia = 1; dia <= diasDelMes; dia++) {
    const celda = document.createElement("div");
    celda.classList.add("dia");
    celda.textContent = dia;

    if (diasConEventos.includes(dia)) {
      celda.classList.add("evento");
      celda.title = `Evento programado el día ${dia}`;
    }

    calendario.appendChild(celda);
  }
});

