/*  Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

// x = -b +- raiz de b² - 4.a.c / 2.a

function equacaoDeSegundoGrau(a, b, c) {
    let delta = (b ** 2) - (4 * a * c)
    let square = Math.sqrt(delta)
    if (delta < 0){
       return console.log('Delta negativo')
    } else {
        x1 = - b + Math.sqrt(delta) / 2 * a
        x2 = - b - Math.sqrt(delta) / 2 * a
        return console.log(`x1 = ${x1} e x2 = ${x2}`)
    }
}

equacaoDeSegundoGrau(2, 3, 2)