document.getElementById('registro').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tipoEntrada = document.getElementById('entrada').value;
    const errorMessage = document.getElementById('error-message');
  
    if (!nombre || !email || !telefono || !tipoEntrada) {
      event.preventDefault();
      errorMessage.textContent = 'Por favor, complete todos los campos.';
      return;
    }
  
    if (!isValidEmail(email)) {
      event.preventDefault();
      errorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
      return;
    }
   
  
    errorMessage.textContent = '';
  });
  
  function isValidEmail(email) {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const registro= document.querySelector("#registro");
registro.addEventListener( "submit" , validarRegistro)
function validarRegistro(e){
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value
  const email = document.querySelector("#email").value
  const telefono = document.querySelector("#telefono").value
  const entrada = document.querySelector("#entrada").value
  const respuesta = document.getElementById("respuesta");
  respuesta.textContent = `Nombre: ${nombre}`
  respuesta2.textContent = `Correo: ${email}`
  respuesta3.textContent = `Telefono: ${telefono}`
  respuesta4.textContent = `Tipo de entrada: ${entrada}`
}