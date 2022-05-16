function jurosSimples(capInicial, taxaDeJuros, tempoDeAplicacao) {
    taxaDeJuros = taxaDeJuros / 100
    let jurosPorAno = capInicial * taxaDeJuros
    capitalTotal = capInicial + jurosPorAno * tempoDeAplicacao
    return console.log(capitalTotal)
}

jurosSimples(1500, 10, 4)

function jurosComposto(capInicial, taxaDeJuros, tempoDeAplicacao) {
    taxaDeJuros = taxaDeJuros / 100
    capitalTotal =  capInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    return console.log(capitalTotal.toFixed(2))
}

jurosComposto(1500, 5, 10)