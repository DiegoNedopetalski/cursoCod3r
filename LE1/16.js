function calculadora(n1, operador, n2){
    switch (operador) {
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '/': return n1 / n2
        case '*': return n1 * n2
        default: 'operação invalida'
    } 
}

console.log(calculadora(1, '-', 2))
console.log(calculadora(7, '*', 4))