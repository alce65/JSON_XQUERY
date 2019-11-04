const fs = require('fs')
/* const data = fs.readFileSync('./persona.json')
const obj = JSON.parse(data) */

const obj = require('./persona.json')
console.log(typeof obj)
console.log(obj)