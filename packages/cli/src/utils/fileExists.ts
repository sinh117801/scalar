import fs from 'fs'

export const fileExists = (file: string) =>
  new Promise((resolve, reject) => {
    fs.access(file, fs.F_OK, (err) => {
      if (err) {
        console.error(err)
        reject(err)
        return
      }

      resolve(true)
    })
  })
