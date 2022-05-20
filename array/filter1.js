const produtos = [
    { nome: 'Notebook' , preco: 2400, fragil: true },
    { nome: 'iPad Pro', preco: 4359, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = e => e.preco >= 500
const fragil = e => e.fragil

console.log(produtos.filter(caro).filter(fragil))