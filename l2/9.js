function simboloMais(vezes) {
    let simbolo = ''
    for(let i = 0; i < vezes; i++) {
        simbolo = simbolo + '+'
    }
    return console.log(simbolo)
}

function simboloMais2(quantidade) {
    return Array(quantidade).fill('+').join('')
    }    

console.log(simboloMais2(2))
simboloMais(6)