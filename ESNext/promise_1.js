const primeiroElemento = array => array[0]
const letraMinuscula = str => str.toLowerCase()

// let a = 1
// console.log(a)

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})  
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)

// Uma promise gera somente um valor!!!