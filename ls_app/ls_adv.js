const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.log(`This file couldn't be read: ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats

        try {
           stats = await fs.stat(filePath) //status -> info del archivo 
        } catch {
            console.log(`This file couldn't be read: ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType.padEnd(2)} | ${file.padEnd(20)} | ${fileSize.padStart(10)} | ${fileModified}`
    })

    console.log(`Type | ${'Name'.padEnd(18)} | ${'Size'.padStart(10)} | Last Modified`)
    console.log('--------------------------------------------------------------')
    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
