function menorNumero(array) {
    let menor = array[0]
    for (let item of array) {
        if(menor > item){
            menor = item
        }
    }
    return console.log(menor)
}

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15

function menorNumero2(array) {
    return console.log(array.reduce((a, b) => a < b ? a : b))
}

menorNumero2([10, 5, 35, 65]) // retornará 5
menorNumero2([5, -15, 50, 3]) // retornará -15

function menorNumero3(array) {
    return console.log(Math.min(...array))
}

menorNumero3([10, 5, 35, 65]) // retornará 5
menorNumero3([5, -15, 50, 3]) // retornará -15

