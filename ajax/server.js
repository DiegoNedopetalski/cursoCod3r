const bodyParser = require('body-parser')
const express = require('express')
//const cors = require('cors')
const app = express()


app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin','*')
//     res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
//     app.use(cors())
//     next()
// })

const multer = require('multer')

const storage = multer.diskStorage({
    detination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.listen(8080, () => console.log('Executando...'))