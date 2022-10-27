import { CASES } from '../data/cases.js'

const Switch = (lines, column, key) => {
  let result
  switch (column) {
    case CASES.ALL:
      return lines
    case CASES.FIRST:
      return lines[1]
    case CASES.LAST:
      return lines[lines.length - 1]
    case CASES.HEAD:
      return lines.slice(0, 6)
    case CASES.TAIL:
      result = lines.slice(lines.length - 5, lines.length)
      result.unshift(lines[0])
      return result
    case CASES.RANDOM:
      return lines[Math.floor(Math.random() * lines.length)]
    default:
      try {
        result = lines.find((line) => line.split(',')[column].toLowerCase() === key.toLowerCase())
      } catch {
        result = lines.find((line) => line.split(',')[column] === key)
      }
      return result
  }
}

export { Switch }
