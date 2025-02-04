document.querySelector('form').addEventListener('submit', function(event) {
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
  
    if (!nombre || !email) {
      event.preventDefault();
      alert('Por favor, complete todos los campos.');
    }
  });
  