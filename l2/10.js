function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
    }
    

console.log(receberPrimeiroEUltimoElemento([1, 2, 3, 5, 10]))