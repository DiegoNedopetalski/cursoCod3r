function somarNumeros(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++){
        resultado += array[i]
    }
    return console.log(resultado)
}

somarNumeros([10, 10, 10]) // retornarĂ¡ 30
somarNumeros([15, 15, 15, 15]) // retornarĂ¡ 60