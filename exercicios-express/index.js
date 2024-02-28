const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(saudacao('Diego'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next()
})


app.get('/opa', (req, res, next) => {
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 8, name: 'Maria', position: 2},
            {id: 9, name: 'João', position: 3},
            {id: 10, name: 'Pedro', position: 4},
            {id: 11, name: 'Ana', position: 5},
            {id: 12, name: 'Maria', position: 6},
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
        
    // res.json({
        //     name: 'iPad 32GB',
        //     price: 1899.00,
        //     discount: 0.12
        // })
        
        // res.send('Estou <b>bem!<b/>')
    })
    app.use('/opa', (req, res) => {
        console.log('Depois')
    })
    app.listen(3000, () => {
    console.log('Server running on port 3000')
})