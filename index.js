const express = require('express')
const bodyparser = require('body-parser')
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.listen(3000 ,() =>{
    console.log('Servidor arrancado')
})