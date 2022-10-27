import { createSpinner } from 'nanospinner'
import { readFile } from 'fs/promises'
import { Switch } from './switch.js'

const spinner = createSpinner()

const search = async (path, column, key) => {
  spinner.start('Searching...')
  const data = await readFile(path)
  const lines = data.toString().replaceAll('\n', '').split(';').slice(0, -1)
  const result = Switch(lines, column, key)
  logResult(result)
}

const logResult = async (result) => {
  if (result) {
    spinner.success('Found!')
    console.log(result)
  } else spinner.error('Not found!')
}

export { search }
