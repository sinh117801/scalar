import fs from 'fs'

/** Writes the given content to the given filename. */
export const writeFile = (filename: string, content: string) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err)
        reject(err)
      }

      resolve(true)
    })
  })
