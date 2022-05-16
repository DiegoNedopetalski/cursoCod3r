function dentroDoIntervalo(vetor = []) {
    let dentroDoIntervalo = 0
    let foraDoIntervalo = 0
    for (i = 0; i < vetor.length; i++) {
        if ((vetor[i] >= 10) && (vetor[i] <= 20)) {
            dentroDoIntervalo++
        } else {
            foraDoIntervalo++
        }
    }
    return `Intervalor entre 10 e 20:
    Números dentro do intervalo: ${dentroDoIntervalo}. Números fora do intervalo ${foraDoIntervalo}.`
}

console.log(dentroDoIntervalo([2, 3, 5, 8, 10, 15, 12, 27, 38]))