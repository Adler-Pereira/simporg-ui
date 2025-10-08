export function setupTogglePassword() {
  const togglePasswordIcons = document.querySelectorAll('.togglePassword')
  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      const input = this.previousElementSibling
      const type = input.type === 'password' ? 'text' : 'password'
      input.type = type
      this.classList.toggle('fa-eye')
      this.classList.toggle('fa-eye-slash')
    })
  })
}
