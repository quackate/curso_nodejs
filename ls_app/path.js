const path = require('node:path')

//Barra separadora de carpetas según SO
console.log(path.sep) //<-- te dice cómo son las rutas en tu sistema operativo.

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/secret-file/password.txt')
console.log(base)

const filename = path.basename('/tmp/secret-file/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
