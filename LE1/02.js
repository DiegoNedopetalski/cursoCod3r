/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function tipoDeTriangulo(a, b, c){
    if ((a == b) && (a == c) && (b == c)){
        console.log('Triangulo equilatero')
    } else if((a == b) || (a == c) || (b == c)){
        console.log('Triangulo isóceres')
    } else {
        console.log('Triangulo escaleno')
    }
}

tipoDeTriangulo(2, 2, 2)
tipoDeTriangulo(2, 0, 2)
tipoDeTriangulo(1, 2, 3)
tipoDeTriangulo(2, 2, 3)
