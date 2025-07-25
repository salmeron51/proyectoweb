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
