const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1245.53,
    desconto: 0.12
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})