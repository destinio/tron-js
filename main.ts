let bike = document.querySelector('main > div') as HTMLElement

const degElement = document.querySelector('#deg') as HTMLElement

const l = document.querySelector('#l')
const r = document.querySelector('#r')
const u = document.querySelector('#u')
const d = document.querySelector('#d')

const bounding = document.querySelector('main')?.getBoundingClientRect()

let currentLeft = getComputedStyle(document.documentElement).getPropertyValue(
  '--left-start'
)

let currentTop = getComputedStyle(document.documentElement).getPropertyValue(
  '--top-start'
)

let rotateStart = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue('--rotate-start')
)

degElement.innerText = rotateStart.toString()

function convertKeyToDirection(key: string) {
  switch (key) {
    case 'w':
    case 'ArrowUp':
      return 'u'
    case 'a':
    case 'ArrowLeft':
      return 'l'
    case 'd':
    case 'ArrowRight':
      return 'r'
    case 's':
    case 'ArrowDown':
      return 'd'
    default:
      return ''
  }
}

function moveBike(e: Event) {
  const target = e.target as HTMLElement

  bike = document.querySelector('main > div') as HTMLElement

  let direction = target.id.length
    ? target.id
    : convertKeyToDirection((e as KeyboardEvent).key)

  currentLeft = getComputedStyle(document.documentElement).getPropertyValue(
    '--left-start'
  )

  currentTop = getComputedStyle(document.documentElement).getPropertyValue(
    '--top-start'
  )

  rotateStart = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--rotate-start'
    )
  )

  console.log({ currentLeft, currentTop, rotateStart })

  if (direction === '') return

  if (direction === 'd') {
    if (rotateStart === 0) {
      document.documentElement.style.setProperty('--rotate-start', `180deg`)
    } else if (rotateStart === 90) {
      document.documentElement.style.setProperty('--rotate-start', `270deg`)
    } else if (rotateStart === 180) {
      document.documentElement.style.setProperty('--rotate-start', `0deg`)
    } else if (rotateStart === 270) {
      document.documentElement.style.setProperty('--rotate-start', `90deg`)
    } else {
      document.documentElement.style.setProperty('--rotate-start', `0deg`)
    }
  }

  if (direction === 'u') {
    if (rotateStart === 0) {
      if (parseInt(currentTop) <= 1) return

      document.documentElement.style.setProperty(
        '--top-start',
        `${parseFloat(currentTop) - 2}em`
      )
    }

    if (rotateStart === 90) {
      if (parseInt(currentLeft) >= 17) return
      document.documentElement.style.setProperty(
        '--left-start',
        `${parseFloat(currentLeft) + 2}em`
      )
    }

    if (rotateStart === 180) {
      if (parseInt(currentTop) >= 17) return
      document.documentElement.style.setProperty(
        '--top-start',
        `${parseFloat(currentTop) + 2}em`
      )
    }

    if (rotateStart === 270) {
      if (parseInt(currentLeft) <= 1) return
      document.documentElement.style.setProperty(
        '--left-start',
        `${parseFloat(currentLeft) - 2}em`
      )
    }
  }

  if (direction === 'r') {
    if (rotateStart === 0) {
      document.documentElement.style.setProperty(
        '--rotate-start',
        `${rotateStart + 90}deg`
      )
      degElement.textContent = String(rotateStart + 90)
      rotateStart = rotateStart + 90
    } else if (rotateStart === 90) {
      document.documentElement.style.setProperty(
        '--rotate-start',
        `${rotateStart + 90}deg`
      )
      degElement.textContent = String(rotateStart + 90)
      rotateStart = rotateStart + 90
    } else if (rotateStart === 180) {
      document.documentElement.style.setProperty(
        '--rotate-start',
        `${rotateStart + 90}deg`
      )
      degElement.textContent = String(rotateStart + 90)
      rotateStart = rotateStart + 90
    } else if (rotateStart === 270) {
      document.documentElement.style.setProperty('--rotate-start', `${0}deg`)
      degElement.textContent = String(0)
      rotateStart = 0
    }
  }

  if (direction === 'l') {
    if (rotateStart === 0) {
      document.documentElement.style.setProperty('--rotate-start', `${270}deg`)
      degElement.textContent = String(270)
      rotateStart = 270
    } else if (rotateStart === 90) {
      document.documentElement.style.setProperty('--rotate-start', `${0}deg`)
      degElement.textContent = String(0)
      rotateStart = 0
    } else if (rotateStart === 180) {
      document.documentElement.style.setProperty('--rotate-start', `${90}deg`)
      degElement.textContent = String(90)
      rotateStart = 90
    } else if (rotateStart === 270) {
      document.documentElement.style.setProperty('--rotate-start', `${180}deg`)
      degElement.textContent = String(180)
      rotateStart = 180
    }
  }
}

r.addEventListener('click', moveBike)
l.addEventListener('click', moveBike)
u.addEventListener('click', moveBike)

document.addEventListener('keydown', moveBike)
