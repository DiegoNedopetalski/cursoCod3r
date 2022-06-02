function contarCaractere(letra, frase) {
    const quantidade = frase.split(letra)
    return console.log(quantidade.length - 1)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

function contarCaractere2(caractereBuscado, frase){
    let contador = 0

    for(let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado) 
            contador++
    
    return console.log(contador)
}

contarCaractere2("r", "A sorte favorece os audazes") // retornará 2
contarCaractere2("c", "Conhece-te a ti mesmo") // retornará 1

function contarCaractere3(caractereBuscado, frase) {
    const repetidos = [...frase].filter(caractere => caractere === caractereBuscado).length
    return console.log(repetidos)
}

contarCaractere3("r", "A sorte favorece os audazes") // retornará 2
contarCaractere3("c", "Conhece-te a ti mesmo") // retornará 1