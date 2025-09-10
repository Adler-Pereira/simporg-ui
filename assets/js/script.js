const togglePasswordIcons = document.querySelectorAll('.togglePassword');

togglePasswordIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {
    // Encontra o input relacionado ao ícone
    const input = this.previousElementSibling;

    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);

    // Alternar ícone do olho
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });
});
