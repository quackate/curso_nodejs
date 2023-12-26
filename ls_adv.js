const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(pc.red(`❌​ This file couldn't be read: ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filePath) //status -> info del archivo 
        } catch {
            console.error(pc.red(`❌​ This file couldn't be read: ${filePath}`))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType.padEnd(2)} | ${pc.blue(file.padEnd(20))} | ${pc.green(fileSize.padStart(10))} | ${pc.yellow(fileModified)}`
    })

    console.log(`${pc.magenta('Type')} | ${pc.magenta('Name'.padEnd(18))} | ${pc.magenta('Size'.padStart(10))} | ${pc.magenta('Last Modified')}`)
    console.log('--------------------------------------------------------------')
    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
