import { convertKeyToDirection } from './api.js'

const northButton = document.querySelector('#n') as HTMLElement
const southButton = document.querySelector('#s') as HTMLElement
const eastButton = document.querySelector('#e') as HTMLElement
const westButton = document.querySelector('#w') as HTMLElement

let currentLeft = getComputedStyle(document.documentElement).getPropertyValue(
  '--left-start'
)

let currentTop = getComputedStyle(document.documentElement).getPropertyValue(
  '--top-start'
)

let rotateStart = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue('--rotate-start')
)

let direction = ''

let glowTime: NodeJS.Timeout = null!
let gameLoop: NodeJS.Timer = null!

gameLoop = setInterval(() => {
  switch (direction) {
    case 'n':
      if (parseInt(currentTop) <= 1) return
      document.documentElement.style.setProperty(
        '--top-start',
        `${parseFloat(currentTop) - 2}em`
      )
      currentTop = parseFloat(currentTop) - 2 + 'em'
      break
    case 's':
      if (parseInt(currentTop) >= 17) return
      document.documentElement.style.setProperty(
        '--top-start',
        `${parseFloat(currentTop) + 2}em`
      )
      currentTop = parseFloat(currentTop) + 2 + 'em'
      break
    case 'e':
      if (parseInt(currentLeft) >= 17) return
      document.documentElement.style.setProperty(
        '--left-start',
        `${parseFloat(currentLeft) + 2}em`
      )
      currentLeft = parseFloat(currentLeft) + 2 + 'em'
      break
    case 'w':
      if (parseInt(currentLeft) <= 1) return
      document.documentElement.style.setProperty(
        '--left-start',
        `${parseFloat(currentLeft) - 2}em`
      )
      currentLeft = parseFloat(currentLeft) - 2 + 'em'
      break
    default:
      return
  }
}, 1000)

function changeDirection(e: Event) {
  e.stopPropagation()

  const target = e.target as HTMLElement

  const id = target.parentElement.id.length
    ? target.parentElement.id
    : convertKeyToDirection((e as KeyboardEvent).key)

  direction = id

  if (direction === 'n') {
    rotateStart = 0
    document.documentElement.style.setProperty('--rotate-start', '0deg')
  } else if (id === 's') {
    rotateStart = 180
    document.documentElement.style.setProperty('--rotate-start', '180deg')
  } else if (id === 'e') {
    rotateStart = 90
    document.documentElement.style.setProperty('--rotate-start', '90deg')
  } else if (id === 'w') {
    rotateStart = 270
    document.documentElement.style.setProperty('--rotate-start', '270deg')
  }
}

northButton.addEventListener('click', changeDirection)
southButton.addEventListener('click', changeDirection)
eastButton.addEventListener('click', changeDirection)
westButton.addEventListener('click', changeDirection)

document.addEventListener('keydown', changeDirection)
