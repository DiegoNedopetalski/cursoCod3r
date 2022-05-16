function menorMaior(vetor = []) {
    vetor.sort((a, b) => (a < b) ? 1 : -1)
    let contador = -1
    for (i = 0; i < vetor.length; i++) {
        contador++
    }
    return `Maior valor do vetor: ${vetor[0]}. Menor valor do vetor: ${vetor[contador]}`
}

console.log(menorMaior([1, 3, 2, 0, 7, 9]))