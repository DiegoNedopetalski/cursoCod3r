function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(8, 5, 30, 5.3, 8.3))

console.log(1.1, 2.2, 'teste')
console.log(soma('a', 'b', 'c'))