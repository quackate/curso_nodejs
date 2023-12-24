//Esto solo en los módulos nativoa que no tienen promsesas
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('Primer texto:', text)
    })

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto:', text) 
    })

 //.mjs sí que permite usar await
 //ejemplo => const text = await readFile('./archivo.text', 'utf-8')
 //console.log('Primer texto:', text)
 //IMPORTANTE: al pasar el archivo a .mjs, recordar cambiar el require a modules

 //IIFE - Inmediately Invoked Function Expression, research.