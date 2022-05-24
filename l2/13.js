function objetoParaArray(objeto) {
    const resultado = []

    for (let chave in objeto) 
        resultado.push([chave, objeto[chave]])
    
    return console.log(resultado)
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
    
//forma 2

function objetoParaArray2(objeto) {
    return Object.entries(objeto)
}

console.log (objetoParaArray2({
    codigo: 11111,
    preco: 12000
    })) // irá retornar [["codigo", 11111], ["preco", 12000]]
    
function objetoParaArray3(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}

console.log (objetoParaArray3({
    codigo: 11111,
    preco: 12000
    }))