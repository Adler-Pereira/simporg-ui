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
const btnAddCard = document.getElementById('add-card-text')
const namingCard = document.getElementById('naming-card')
const inputNameCard = document.getElementById('input-name-card')
const btnCancelName = document.getElementById('btn-cancel-name')
const btnConfName = document.getElementById('btn-conf-name')
const createdCard = document.getElementById('created-card')
const nameCard = document.getElementById('name-card')

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
    formProj.classList.remove('d-none')
    formProj.classList.add('d-flex')
    inputTitleProj.focus()
  })  
})

closeFormProj.addEventListener('click', function () {
    formProj.classList.add('d-none')
    formProj.classList.remove('d-flex')
})

closeWorkspace.addEventListener('click', function () {
  projWorkspace.classList.add('d-none')
  projWorkspace.classList.remove('container-fluid', 'position-absolute', 'd-flex')
  cardsHub.classList.add('d-flex')
  cardsHub.classList.remove('d-none')
  aside.classList.add('d-md-flex')
  maxProjWkspc.classList.remove('d-none')
  minProjWkspc.classList.remove('d-flex')
  
  namingCard.classList.add('d-none')
  namingCard.classList.remove('d-flex')
  btnAddCard.classList.add('d-flex')
  btnAddCard.classList.remove('d-none')

  createdCard.classList.add('d-none')
  createdCard.classList.remove('d-flex')
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
  formProj.classList.add('d-none')
  formProj.classList.remove('d-flex')
  cardsHub.classList.add('d-none')
  cardsHub.classList.remove('d-flex')
  projWorkspace.classList.add('d-flex')
  projWorkspace.classList.remove('d-none')
})

btnAddCard.addEventListener('click', function () {
  namingCard.classList.add('d-flex')
  namingCard.classList.remove('d-none')
  btnAddCard.classList.add('d-none')
  btnAddCard.classList.remove('d-flex')
})

btnCancelName.addEventListener('click', function () {
  namingCard.classList.add('d-none')
  namingCard.classList.remove('d-flex')
  btnAddCard.classList.add('d-flex')
  btnAddCard.classList.remove('d-none')
})

btnConfName.addEventListener('click', function () {
  let i = 0
  
  namingCard.classList.add('d-none')
  namingCard.classList.remove('d-flex')
  createdCard.classList.add('d-flex')
  createdCard.classList.remove('d-none')

  if (inputNameCard.value) {
    nameCard.textContent = inputNameCard.value
  } else {
    nameCard.textContent = 'Sem-nome-' + i
    i++
  }
})