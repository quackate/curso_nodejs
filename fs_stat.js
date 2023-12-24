const fs = require('node:fs') //a partir de Node 16, se recomienda poner node:
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //es fichero
    stats.isDirectory(), // es un directorio
    stats.isSymbolicLink(), //es un enlace simbólico
    stats.size //tamaño en bytes
)