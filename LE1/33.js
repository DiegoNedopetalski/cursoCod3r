
function unir(vetorInteiro, vetorString, vetorDouble) {
    resultado1 = []
    resultado2 = []
    for (i = 0; i < vetorInteiro.length; i++) {
        resultado1[i] = vetorInteiro[i] + vetorString[i] + vetorDouble[i]
    }
    return resultado1
}

let vetorInteiro2 = [8, 7, 5, 3]
let vetorString2 =  ['Olá Mundo!', 'Nois que voa', 'HAHAHAHAH', 'João do pé preto']
let vetorDouble2 = [8.3, 9.2, 7.1, 3.3]

    function concatenar(...args){
        resultado = []
        for(let i = 0; i<arguments.length; i++){
            resultado = resultado.concat(arguments[i])
        }
        return resultado;
    }

console.log(unir([8, 7, 5, 3], ['Olá Mundo!', 'Nois que voa', 'HAHAHAHAH', 'João do pé preto'], [8.3, 9.2, 7.1, 3.3]))


console.log(concatenar(vetorInteiro2, vetorString2, vetorDouble2))