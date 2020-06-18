var express = require('express')
var porta = 3000;
var app = express();

app.get('/', function (req, res) {
    res.json({ status: 'Servidor rodando!' })
})

app.listen(porta, function () {
    console.log('Servidor está rodando no localhost:' + porta)
})
