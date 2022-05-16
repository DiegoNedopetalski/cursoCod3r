function parOuImpar(vetor = []) {
    let numerosPares = 0
    let numerosImpares = 0 
    for (i = 0; i < vetor.length; i++){
        if ((vetor[i] % 2) == 0) {
            numerosPares++
        } else if ((vetor[i] % 2) == 1) {
            numerosImpares++
        }
    }
    return `O vetor analisado possui ${numerosPares} números pares e ${numerosImpares} números ímpares`
}

console.log(parOuImpar([2, 3, 5, 8, 10, 15, 12, 27, 38]))