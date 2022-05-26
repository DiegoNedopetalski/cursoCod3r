function calcularMedia(array) {
    let soma = 0
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i]
        resultado = soma / array.length
    }

    return console.log(resultado)
}

calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3

function calcularMedia2(array) {
    const tamanho = array.length
    let somaTotal = 0
    for (numero of array) {
        somaTotal += numero
    }
    return console.log(somaTotal/tamanho)
}

calcularMedia2([0, 10]) // retornará 5
calcularMedia2([1, 2, 3, 4, 5]) // retornará 3

function calcularMedia3(array){
    const tamanho = array.length
    let somaTotal = array.reduce((a, b) => a + b)
    return console.log(somaTotal/tamanho)
}

calcularMedia3([0, 10]) // retornará 5
calcularMedia3([1, 2, 3, 4, 5]) // retornará 3