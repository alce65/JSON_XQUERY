console.log('Hola Mundo')
let dato // undefined
console.log(typeof dato)
dato = undefined
console.log(typeof dato)
dato = null // null
console.log(typeof dato)
dato = 23 // number
console.log(typeof dato)
dato = 'Pepe' // string
console.log(typeof dato)
dato = true // boolean
console.log(typeof dato)
dato = {}
console.log(typeof dato)
dato = []
console.log(typeof dato)
dato = new Date()
console.log(typeof dato)

let person = {
    nombre : 'Pepe',
    edad: 23,
    isAlumno: true,
    direccion: {
        calle: 'c/ Pez',
        numero: 3,
        ciudad: 'Cádiz'
    },
    aficiones: ['leer', 'pasear'],
    otros: [12, true, 'algo', {valores: [1,2,3]}]
}
console.log('Nombre: ', person.nombre)
console.log('Calle: ', person.direccion.calle)
console.log('Aficion 1: ', person.aficiones[0])
