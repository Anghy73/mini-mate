const inicio = document.querySelector('#btn-inicio')
const body = document.querySelector('body')

inicio.addEventListener('click', () => {
  body.classList.toggle('inicio')
})