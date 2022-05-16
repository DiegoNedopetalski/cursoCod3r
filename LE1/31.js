function identificaNegativos(vetor) {
    let quantidadeDeNumerosNegativos = 0
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            quantidadeDeNumerosNegativos++
        }
    }

      return quantidadeDeNumerosNegativos
}

console.log(identificaNegativos([0, 1, -5, 7, -8, 5, -3]))
console.log(identificaNegativos([0, 1, -5, -7, -8, -5, -3]))