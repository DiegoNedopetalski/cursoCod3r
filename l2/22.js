function contarPalavras(frase) {
    const palavras = frase.split(' ')
    return console.log(palavras.length)
}

contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
