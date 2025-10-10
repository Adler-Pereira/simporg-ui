// Seletores principais
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
const tempTask = document.getElementById('temp-task-card')
const wkspcContent = document.getElementById('wkspc-content')

// Abrir formulário de novo projeto
projectCard.forEach(card => {
  card.addEventListener('click', () => {
    formProj.classList.remove('d-none')
    formProj.classList.add('d-flex')
    inputTitleProj.focus()
  })
})

// Fechar formulário de novo projeto
closeFormProj.addEventListener('click', () => {
  formProj.classList.add('d-none')
  formProj.classList.remove('d-flex')
})

// Fechar workspace
closeWorkspace.addEventListener('click', () => {
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

// Maximizar workspace
maxProjWkspc.addEventListener('click', () => {
  projWorkspace.classList.add('container-fluid', 'position-absolute')
  aside.classList.remove('d-md-flex')
  maxProjWkspc.classList.add('d-none')
  minProjWkspc.classList.add('d-flex')
})

// Minimizar workspace
minProjWkspc.addEventListener('click', () => {
  projWorkspace.classList.remove('container-fluid', 'position-absolute')
  aside.classList.add('d-md-flex')
  maxProjWkspc.classList.remove('d-none')
  minProjWkspc.classList.remove('d-flex')
})

// Alterar cor do projeto
optionColor.forEach(option => {
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

// Submeter formulário de projeto
formProj.addEventListener('submit', e => {
  e.preventDefault()
  formProj.classList.add('d-none')
  formProj.classList.remove('d-flex')
  cardsHub.classList.add('d-none')
  cardsHub.classList.remove('d-flex')
  projWorkspace.classList.add('d-flex')
  projWorkspace.classList.remove('d-none')

  const clone = tempTask.content.cloneNode(true)
  wkspcContent.appendChild(clone)
})

// Adicionar card
btnAddCard.addEventListener('click', () => {
  namingCard.classList.add('d-flex')
  namingCard.classList.remove('d-none')
  btnAddCard.classList.add('d-none')
  btnAddCard.classList.remove('d-flex')
})

// Cancelar nome do card
btnCancelName.addEventListener('click', () => {
  namingCard.classList.add('d-none')
  namingCard.classList.remove('d-flex')
  btnAddCard.classList.add('d-flex')
  btnAddCard.classList.remove('d-none')
})

// Confirmar nome do card
const templateCard = document.getElementById('template-card')
let cardCounter = 1

btnConfName.addEventListener('click', () => {
  namingCard.classList.add('d-none')
  namingCard.classList.remove('d-flex')
  btnAddCard.classList.add('d-flex')
  btnAddCard.classList.remove('d-none')

  // Cria o novo card a partir do template
  const clone = templateCard.content.cloneNode(true)
  const h6 = clone.querySelector('h6')
  h6.textContent = inputNameCard.value.trim() || `Sem-nome-${cardCounter}`

  // Adiciona o card ao container
  wkspcContent.insertBefore(clone, btnAddCard.parentElement)

  cardCounter++
  inputNameCard.value = ''
})


