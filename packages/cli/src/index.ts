#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { fileExists } from './utils/fileExists'
import { readFile } from './utils/readFile'
import { render } from './utils/render'
import { writeFile } from './utils/writeFile'

console.info('@scalar/cli')
console.info('')

const build = async (filename: string) => {
  if (!filename) {
    console.error('Please provide a file.')
    process.exitCode = 1
    return
  }

  console.info(`Check if ${filename} exists…`)
  if (!(await fileExists(filename))) {
    console.error('Could not find file. Please provide a valid file.')
    process.exitCode = 1
    return
  }

  console.info(`Loading ${filename}…`)
  const spec = await readFile(filename)

  // TODO: Check if spec is valid OpenAPI/Swagger

  console.info(`Rendering…`)
  const html = await render(spec)

  console.info('Write to file…')
  await writeFile('index.html', html)

  console.info('Done.')
}

const args = yargs(hideBin(process.argv))
  .command(
    '<file>',
    'generate a beautiful API reference from an OpenAPI/Swagger file',
    () => {},
    (argv) => {
      console.info(argv)
    },
  )
  .parse()

build(args._[0])
