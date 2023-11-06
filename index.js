// COnfig inicial 
const express = require('express')
const mongoose = require('mongoose')

const app = express()



// Ler JSON // middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas da api
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial 
app.get('/', (req, res) => {
    // mostrar res
    res.json({ message: 'Oi Express'})
})


// mongodb+srv://Renan:<35575918>@apicluster.ppfkimf.mongodb.net/bancodaapi?retryWrites=true&w=majority


// entregar uma porta
const DB_USER = 'Renan'
const DB_PASSWORD = '12345'

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.fawiq60.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() =>{
    console.log('conectou com sucesso')
    app.listen(3000);
})
.catch((err)  => {
    console.log(err)
})