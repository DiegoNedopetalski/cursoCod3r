function receberSomenteOsParesDeIndicesPares(array) {
    const resultado = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 && array[i] % 2 === 0) {
            resultado.push(array[i])
        }
    }
    return console.log(resultado)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornarĂ¡ []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornarĂ¡ [10, 22]

/*

function receberSomenteOsParesDeIndicesPares2(numeros) {
    return numeros.filter((numero, indice) =>
    {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 3, 4])) // retornarĂ¡ []
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43])) // retornarĂ¡ [10, 22]
*/