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
const tempTask = document.getElementById('template-card')
const wkspcContent = document.getElementById('wkspc-content')
const html = document.querySelector('html')
const main = document.querySelector('main')
const btnConfDel = document.getElementById('btn-confirm-del')
const btnCancelDel = document.getElementById('btn-cancel-del')
const closeDelMessage = document.getElementById('close-del-message')
const deleteMessage = document.getElementById('delete-message')
const cardNameMessage = document.getElementById('card-name-message')

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
  html.style.backgroundColor = 'var(--color-bg-main)'
  main.style.backgroundColor = 'var(--color-bg-main)'

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
  if (projWorkspace.style.backgroundColor) {
    main.style.backgroundColor = projWorkspace.style.backgroundColor
  } else {
    main.style.backgroundColor = 'rgb(227, 126, 3)'
  }

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

    if (option.style.backgroundColor == 'rgb(227, 126, 3)' || option.style.backgroundColor == 'white' || option.style.backgroundColor == 'rgb(97, 99, 180)') {
      windowIconsWkspc.forEach(function (icon) {
        icon.style.fill = 'var(--color-bg-main)'
        icon.style.stroke = 'var(--color-bg-main)'
      })
      projWorkspace.style.scrollbarColor = 'var(--color-bg-surface) var(--color-bg-overlay)'
    } else {
      windowIconsWkspc.forEach(function (icon) {
        icon.style.fill = 'var(--color-bg-highlight)'
        icon.style.stroke = 'var(--color-bg-highlight)'
      })
      projWorkspace.style.scrollbarColor = 'var(--color-bg-highlight) var(--color-bg-overlay)'
    }
  })
})

// Submeter formulário de projeto
formProj.addEventListener('submit', e => {
  e.preventDefault()
  if (projWorkspace.style.backgroundColor) {
    html.style.backgroundColor = projWorkspace.style.backgroundColor
  } else {
    html.style.backgroundColor = 'rgb(227, 126, 3)'
  }
  formProj.classList.add('d-none')
  formProj.classList.remove('d-flex')
  cardsHub.classList.add('d-none')
  cardsHub.classList.remove('d-flex')
  projWorkspace.classList.add('d-flex')
  projWorkspace.classList.remove('d-none')
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

  if (inputNameCard.value.trim()) {
    h6.textContent = inputNameCard.value.trim()
  } else {
    h6.textContent = `Sem-nome-${cardCounter}`
    cardCounter++
  }

  // Adiciona o card ao container
  wkspcContent.insertBefore(clone, btnAddCard.parentElement)
  inputNameCard.value = ''

  const lastCard = wkspcContent.querySelector('.task-card:nth-last-child(2)')
  const btnCardOpts = lastCard.querySelector('.btn-card-options')
  const cardOptions = lastCard.querySelector('.card-options')

  btnCardOpts.addEventListener('click', e => {
    e.stopPropagation()

    // Fecha todos os outros menus antes de abrir o atual
    document.querySelectorAll('.card-options').forEach(opt => {
      opt.classList.add('d-none')
      opt.classList.remove('d-flex')
    })

    cardOptions.classList.remove('d-none')
    cardOptions.classList.add('d-flex')
  })

  cardOptions.addEventListener('click', e => e.stopPropagation())

  document.addEventListener('click', () => {
    cardOptions.classList.add('d-none')
    cardOptions.classList.remove('d-flex')
  })

  const btnOptionDel = cardOptions.querySelector('.btn-option-del')

  btnOptionDel.addEventListener('click', () => {
    cardNameMessage.textContent = h6.textContent;
    deleteMessage.classList.add('d-flex')
    deleteMessage.classList.remove('d-none')
  })


})

closeDelMessage.addEventListener('click', () => {
  deleteMessage.classList.add('d-none')
  deleteMessage.classList.remove('d-flex')
})

btnCancelDel.addEventListener('click', () => {
  deleteMessage.classList.add('d-none')
  deleteMessage.classList.remove('d-flex')
})

btnConfDel.addEventListener('click', () => {
  deleteMessage.classList.add('d-none')
  deleteMessage.classList.remove('d-flex')
})
