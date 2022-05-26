function despesasTotais(array) {
    var total = 0
    for (let objeto of array)
        total += objeto.preco
    
    return console.log(total)
}

despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]) // retornará 239.99
despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]) // retornará 34599.89

function despesasTotais2(array) {
    return array
    .map(objeto => objeto.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log(despesasTotais2([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])) // retornará 239.99

function despesasTotais3(array) {
    return array
    .reduce((acumulador, valorAtual) =>
        acumulador + valorAtual.preco, 0
    )    
}
console.log(despesasTotais3([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])) // retornará 239.99