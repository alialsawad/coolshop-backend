#!/user/bin/env node

import chalk from 'chalk'
import figlet from 'figlet'
import { search } from './utils/search.js'

const main = async () => {
  const [, , path, column, key] = process.argv
  await search(path, column, key)
}

console.log(
  chalk.yellow(
    figlet.textSync('Search', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  )
)

main()
