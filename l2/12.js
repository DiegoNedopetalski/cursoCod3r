function filtrarNumeros(array) {
    const resultado = []
    for (let item of array) {
        if(typeof item === 'number') {
            resultado.push(item)
        }
    }
    return console.log(resultado)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])

// resolução 2
/*
function filtrarNumeros2(array) {
    return array.filter(a => tipeof a === 'number')
}

filtrarNumeros2(["Javascript", 1, "3", "Web", 20])
*/