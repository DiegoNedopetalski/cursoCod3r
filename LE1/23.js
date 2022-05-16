function mediaAluno(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let calculoDaMedia = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    return `Código do aluno: ${codAluno}. Média: ${calculoDaMedia}. Resultado: ${calculoDaMedia > 5 ? 'Aprovado' : 'Reprovado'}`
}

console.log(mediaAluno(150, 10, 10, 10))
console.log(mediaAluno(110, 4, 7, 4))
console.log(mediaAluno(2, 2, 10, 0))