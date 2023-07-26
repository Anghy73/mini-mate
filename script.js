const inicio = document.querySelector('#btn-inicio')
const body = document.querySelector('body')

inicio.addEventListener('click', () => {
  inicio.style.pointerEvents = 'none'
  body.classList.toggle('inicio')
  setTimeout(() => {
    start()
  }, 1200);
})

const bar = document.querySelector('.bar')
let index = 100
let addTime = 60

const exercises = [
  {
    "ejercicio": "1 + 1",
    "resultados": ["1", "2", "3"],
    "respuesta": "2"
  },
  {
    "ejercicio": "5 + 5",
    "resultados": ["11", "10", "223"],
    "respuesta": "10"
  },
  {
    "ejercicio": "5 - 5",
    "resultados": ["0", "10", "223"],
    "respuesta": "0"
  },
  {
    "ejercicio": "100 + 5",
    "resultados": ["110", "210", "105"],
    "respuesta": "105"
  },
  {
    "ejercicio": "9 x 9",
    "resultados": ["82", "22", "81"],
    "respuesta": "81"
  }
]

let points = document.querySelector('.puntos')
let title = document.querySelector('.title')
let contentGame = document.getElementById('content')
let position = 0
let point = 0


function showData() {

  contentGame.innerHTML = ''

  points.textContent = `Points: ${point}`
  title.textContent = exercises[position].ejercicio

  exercises[position].resultados.forEach(elemnt => {
    contentGame.innerHTML += `
      <div class="btn__result">${elemnt}</div>
    `
  })

  const buttons = document.querySelectorAll('.btn__result')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (position == exercises.length - 1) {
        contentGame.style.display = 'none'
        contentBar.style.display = 'none'
        title.textContent = ''
      }
      if (exercises[position].respuesta == btn.textContent) {
        console.log('si');
        point++
        index += 15
      }
      position++
      showData()
    })
  })
}

showData()

const contentBar = document.querySelector('.content__bar')

function start() {
  let timer = setInterval(() => {
    index--
    bar.style.width = `${index}%`
  
    if (index == 70) {
      bar.style.backgroundColor = `orange`
    }
  
    if (index == 40) {
      bar.style.backgroundColor = `red`
    }
    
    if (index == 0) {
      contentGame.style.display = 'none'
      contentBar.style.display = 'none'
      title.textContent = ''
      clearInterval(timer)
    }
  }, addTime);
}