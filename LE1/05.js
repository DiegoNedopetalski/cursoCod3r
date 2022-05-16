function converterEmReais(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

converterEmReais(0.1 + 0.2)