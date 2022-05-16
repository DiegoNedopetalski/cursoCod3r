function mediaAritimetica(vetor) {
    let somaVetor = 0
    let dividendoVetor = 0
    for (let i = 0; i < vetor.length; i++) {
        somaVetor = somaVetor + vetor[i]
        dividendoVetor++
    }
    console.log(somaVetor)
    let resultado = somaVetor / dividendoVetor
    return resultado
}

console.log(mediaAritimetica([10, 8.9, 7, 8, 3]))