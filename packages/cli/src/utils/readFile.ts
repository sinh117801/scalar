import fs from 'fs'

/**
 * Reads the content from a given file
 */
export const readFile = (file: string) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        reject(err)
        return
      }

      resolve(data)
    })
  })
