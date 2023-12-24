//import sum function, Common JS
const {sum} = require('./sum.js')

console.log('Hello World!')

const say_hi = (name) => console.log(`Hi, ${name}! Welcome back!`);
say_hi('Kate')

console.log(sum(1, 2))
