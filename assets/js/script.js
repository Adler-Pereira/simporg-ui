const togglePasswordIcons = document.querySelectorAll('.togglePassword')
const projectCard = document.querySelectorAll('.project-card')
const closeFormProj = document.getElementById('close-form-project')
const formProj = document.getElementById('form-project')
const previewBgProj = document.getElementById('preview-bg-project')
const optionColor = document.querySelectorAll('.container-color-option')
const inputTitleProj = document.getElementById('title-project')
const cardsHub = document.getElementById('cards-proj-hub')
const projWorkspace = document.getElementById('project-workspace')
const closeWorkspace = document.getElementById('close-proj-wkspc')
const maxProjWkspc = document.getElementById('max-proj-wkspc')
const minProjWkspc = document.getElementById('min-proj-wkspc')
const aside = document.querySelector('aside')
const windowIconsWkspc = document.querySelectorAll('#project-workspace .window-icon')

togglePasswordIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {
    // Encontra o input relacionado ao ícone
    const input = this.previousElementSibling

    const type = input.getAttribute('type') === 'password' ? 'text' : 'password'
    input.setAttribute('type', type)

    // Alternar ícone do olho
    this.classList.toggle('fa-eye')
    this.classList.toggle('fa-eye-slash')
  })
})

projectCard.forEach(function (card) {
  card.addEventListener('click', function () {
    formProj.style.display = 'flex'
    inputTitleProj.focus()
  })  
})

closeFormProj.addEventListener('click', function () {
  formProj.style.display = 'none'
})

closeWorkspace.addEventListener('click', function () {
  projWorkspace.style.display = 'none'
  cardsHub.style.display = 'flex'
  projWorkspace.classList.remove('container-fluid', 'position-absolute')
  aside.classList.add('d-md-flex')
  maxProjWkspc.classList.remove('d-none')
  minProjWkspc.classList.remove('d-flex')
})

maxProjWkspc.addEventListener('click', function () {
  projWorkspace.classList.add('container-fluid', 'position-absolute')
  aside.classList.remove('d-md-flex')
  maxProjWkspc.classList.add('d-none')
  minProjWkspc.classList.add('d-flex')
})

minProjWkspc.addEventListener('click', function () {
  projWorkspace.classList.remove('container-fluid', 'position-absolute')
  aside.classList.add('d-md-flex')
  maxProjWkspc.classList.remove('d-none')
  minProjWkspc.classList.remove('d-flex')
})

optionColor.forEach(function (option) {
  option.addEventListener('click', function () {
    previewBgProj.style.backgroundColor = option.style.backgroundColor
    projWorkspace.style.backgroundColor = option.style.backgroundColor
    if (option.style.backgroundColor == 'rgb(227, 126, 3)' || option.style.backgroundColor == 'white') {
      windowIconsWkspc.forEach(function (icon) {
        icon.style.fill = 'var(--color-bg-main)'
        icon.style.stroke = 'var(--color-bg-main)'
      })
    } else {
      windowIconsWkspc.forEach(function (icon) {
        icon.style.fill = 'var(--color-bg-highlight)'
        icon.style.stroke = 'var(--color-bg-highlight)'
      })
    }
  })
})

formProj.addEventListener('submit', function (e) {
  e.preventDefault()
  formProj.style.display = 'none'
  cardsHub.style.display = 'none'
  projWorkspace.style.display = 'flex'
})