const estaEntre = function(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero >= minimo && numero <= maximo
}

let a = estaEntre(1, 3, 3, false)
console.log(a)

