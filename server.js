const express = require('express')
const app = express()
const blogRouter = require('./routes/blogRoutes')
require('dotenv').config()

const port = process.env.PORT || 3500

app.use('/articles', blogRouter) //rotas criadas serão colocadas no final da rota /articles
app.set('view engine', 'ejs')

app.listen(port, () =>{
    console.log(`Servidor está rodando na porta ${port}`)
})

app.get('/', (req,res) => {
    res.render('index')
})