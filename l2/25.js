function removerVogais(string) {
    let resultado = ''
    for (letra of string) {
        if (letra !== 'a' && letra !== 'b' && letra !== 'c' && letra !== 'o' && letra !== 'e') {
            resultado += letra
        }
    }
    return console.log(resultado)
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"

function removerVogais2(frase) {
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return console.log(frase)
}

removerVogais2("Cod3r") // retornará "Cd3r"
removerVogais2("Fundamentos") // retornará "Fndmnts"

function removerVogais3(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

removerVogais3("Cod3r") // retornará "Cd3r"
removerVogais3("Fundamentos") // retornará "Fndmnts"