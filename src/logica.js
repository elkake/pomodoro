let tiempom = 25
let tiempos = 0

let contador = 0
let timerInterval
//todo ahacer 4 tiempos que inicien con un solo boton
const contenedor = document.getElementById('numero')
const iniciar = document.getElementById('iniciar')
const titulo = document.getElementById('titulo')
const reset = document.getElementById('reset')

const audio1 = new Audio('./sound1.mp3')
const audio2 = new Audio('./sound3.mp3')

const updateTimer = () => {
  tiempos--
  if (tiempos < 0) {
    if (tiempom == 0) {
      contador++
      if (contador % 2 != 0 && contador < 7) {
        titulo.innerHTML = 'DESCANSO'
        audio2.play()
        tiempom = 5
        tiempos = 0
      }
      if (contador % 2 == 0 && contador < 7) {
        titulo.innerHTML = 'ESTUDIO'
        audio1.play()
        tiempom = 25
        tiempos = 0
      }
      if (contador == 7) {
        audio2.play()
        contador = 0
        titulo.innerHTML = 'DESCANSO'

        tiempom = 25
        tiempos = 0
        contador = 0
      }
    } else {
      tiempom--
      tiempos = 59
    }
  }

  const formattedMinutes = String(tiempom).padStart(2, '0')
  const formattedSeconds = String(tiempos).padStart(2, '0')

  contenedor.innerHTML = `${formattedMinutes} : ${formattedSeconds}`
}

const startTimer = () => {
  timerInterval = setInterval(updateTimer, 1000)
}

const resetTimer = () => {
  tiempom = 25
  tiempos = 0
  descansom = 5 * 60
  descansos = 0
  contador = 1
  clearInterval(timerInterval)
}

iniciar.addEventListener('click', () => {
  startTimer()
  iniciar.disabled = true

  audio1.play()
})

reset.addEventListener('click', () => {
  resetTimer()
  contenedor.innerHTML = `25 : 00`
  iniciar.disabled = false
})
