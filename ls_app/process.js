//process proporciona info y control sobre el proceso actual de ejecución
//Tiene propiedades y métodos que permiten interactuar con el entorno de ejcución de node.js

//argumentos de entrada
//console.log(process.argv)

//controlar el proceso y su salida
//process.exit(1)

//podemos controlar eventos del proceso
process.on('exit', () => {
    //limpiar los recursos
})

//current working directory
console.log(process.cwd())

//platform
console.log(process.env.PEPITO)