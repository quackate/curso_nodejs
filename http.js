const http = require('node:http') //protocolo HTTP
const { findPort } = require('./free_port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('request recieved')
    res.end("Hello World!")
})

findPort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    }) 
})

//recomendable para desarrollo, pero no para producción (lo de buscar el primer puerto libre).
//server.listen(0, () => {
    //console.log(`server listening on port http://localhost:${server.address().port}`)
//}) 