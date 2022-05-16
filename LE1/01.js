// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.


// em função sem retorno 
function operacoes(a, b){
    console.log('soma = ' + (a + b))
    console.log('subtração = ' + (a - b))
    console.log('multiplicação = ' + (a * b))
    console.log('divisão = ' + (a / b))
}

operacoes(5, 2)

// em função com retorno
function operacoes2(a, b){
    const soma = a + b
    const subtracao = a - b
    const multiplicacao = a * b
    const divisao = a / b
    return {soma, subtracao, multiplicacao, divisao}
}

console.log(operacoes2(5, 2))
console.log(operacoes2(7, 8))

// em função array

operacoes3 = (a, b) => {
    const soma = a + b
    const subtracao = a - b
    const multiplicacao = a * b
    const divisao = a / b
    return {soma, subtracao, multiplicacao, divisao}
}

console.log(operacoes3(5, 6))