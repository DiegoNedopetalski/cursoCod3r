//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exp(a, b){
    const c = a
    for (let i = 1; i < b; i++) {
        a = a * c
    }
    return a
}
console.log(exp(3, 4)) 

function expoente(a, b) {
    let resultado = Math.pow(a, b)
    return resultado
}

console.log(expoente(2, 3))

function expo(a, b){
    let resultado = a ** b
    return resultado
}

console.log(expo(3, 4))