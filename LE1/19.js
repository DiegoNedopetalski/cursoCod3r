function comprarLanche(codigo, quantidade) {
    let valorAPagar 
    switch (codigo) {
        case 100: valorAPagar = quantidade * 3
        return `Você pediu ${quantidade} cachorro(s) quente(s), fica um total de R$${valorAPagar.toFixed(2).replace('.', ',')}.`
        case 200: valorAPagar = quantidade * 4
        return `Você pediu ${quantidade} hambúrguer(es) simples, fica um total de R$${valorAPagar.toFixed(2).replace('.', ',')}.`
        case 300: valorAPagar = quantidade * 5.5
        return `Você pediu ${quantidade} cheeseburguer(es), fica um total de R$${valorAPagar.toFixed(2).replace('.', ',')}.`
        case 400: valorAPagar = quantidade * 7.5
        return `Você pediu ${quantidade} bauru(s), fica um total de R$${valorAPagar.toFixed(2).replace('.', ',')}.`
        case 500: valorAPagar = quantidade * 3.5
        return `Você pediu ${quantidade} refrigerante(s), fica um total de R$${valorAPagar.toFixed(2).replace('.', ',')}.`
        case 600: valorAPagar = quantidade * 2.8
        return `Você pediu ${quantidade} suco(s), fica um total de R$${valorAPagar.toFixed(2).replace('.', ',')}.`
        default: return 'Produto inexistente!'
    }
}

console.log(comprarLanche(100, 2))
console.log(comprarLanche(200, 3))
console.log(comprarLanche(300, 4))
console.log(comprarLanche(500, 1))
console.log(comprarLanche(400, 2))
console.log(comprarLanche(600, 4))
console.log(comprarLanche(700, 2))
