function buscarPalavrasSemelhantes(parametro, array) {
    const resultado = []

    for (let palavra of array)
        if (palavra.includes(parametro))
            resultado.push(palavra)

    return console.log(resultado)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []

function buscarPalavrasSemelhantes2(parametro, array) {
    return console.log(array.filter(palavra => palavra.includes(parametro)))
}

buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes2("python", ["javascript", "java", "c++"]) // retornará []
