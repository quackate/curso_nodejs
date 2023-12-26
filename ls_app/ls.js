const fs = require('node:fs/promises')

fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file) 
        })
    })

.catch(err => {
    if (err) {
        console.log("There's been an error: ", err)
        return; //return para evitar seguir ejecutando nuestro código.
    }
})