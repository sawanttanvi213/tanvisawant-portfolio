const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Thanks! This demo form is ready to connect to a form service later.';
    form.reset();
  });
}
