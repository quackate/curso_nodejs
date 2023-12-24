// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import {sum, sub, mult} from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(3, 1))
console.log(mult(3, 5))