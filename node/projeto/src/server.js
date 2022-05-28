const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 
const bancoDeDados = require('./bancoDeDados')

app.use(express.json()); 
app.use(express.urlencoded({
  extended: true 
})); 


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})

/*


// Express v4.16.0 e superior
// -------------------------- 
const express = require('express'); 
app.use(express.json()); 
app.use(express.urlencoded({
  extended: true 
})); 


// For Express 4.16.0 ou abaixo 
// ------------------------------------ 
const bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: true 
}));




// E na hora de usar, seria algo como:

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

*/