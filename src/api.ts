export function convertKeyToDirection(key: string) {
  switch (key) {
    case 'w':
    case 'ArrowUp':
      return 'n'
    case 'a':
    case 'ArrowLeft':
      return 'w'
    case 'd':
    case 'ArrowRight':
      return 'e'
    case 's':
    case 'ArrowDown':
      return 's'
    default:
      return ''
  }
}
