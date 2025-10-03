const togglePasswordIcons = document.querySelectorAll('.togglePassword');
const projectCard = document.querySelectorAll('.project-card');
const closeFormProj = document.getElementById('close-form-project');
const formProj = document.getElementById('form-project');
const previewBgProj = document.getElementById('preview-bg-project');
const optionColor = document.querySelectorAll('.container-color-option');
const inputTitleProj = document.getElementById('title-project');

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

projectCard.forEach(function (card) {
  card.addEventListener('click', function () {
    formProj.style.display = 'flex';
    inputTitleProj.focus();
  });  
});

closeFormProj.addEventListener('click', function () {
  formProj.style.display = 'none';
});

optionColor.forEach(function (option) {
  option.addEventListener('click', function () {
    previewBgProj.style.backgroundColor = option.style.backgroundColor;
  });
});