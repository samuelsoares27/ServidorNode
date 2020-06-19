var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var porta = 3000;
var app = express();


app.use(cors())
app.use(bodyParser.json());


app.listen(porta, function () {
    console.log('Servidor está rodando no localhost:' + porta)
})

// Método get chamado por Localhot:3000
app.get('/', function (req, res) {
    res.json({ status: 'Servidor rodando!' })
})


