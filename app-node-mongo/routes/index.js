var express = require('express')
const mongoose = require('mongoose')
var router = express.Router()
require('marko/node-require').install()
require('marko/express')
let Book = require('../models/Book')
var indexTemplate = require('../views/index.marko')

router.get('/', (req, res) => {
    if(mongoose.connection.readyState){
        Book.find({}).then((books) => {
            res.marko(indexTemplate, {books: books})
        })
    }else{
        res.marko(indexTemplate)
    }
})

router.get('/seed', (req,res) => {
    let livros = [
        new Book({
            name: "Arduino prático", 
            price: "$39,90", 
            description: "10 projetos para executar, aprender, modificar e dominar o mundo", 
            cover: "arduino.jpg"
        }),
        new Book(
        {
            name: "MongoDB", 
            price: "$39,90", 
            description: "Construa novas aplicações com novas tecnologias",  
            cover: "mongo.png"
        }),
         new Book({
            name: "Mean", 
            price: "$39,90", 
            description: "Full stack JavaScript com MongoDB, Express, Angular e Node" ,
            cover: "mean.png"
        }),
        new Book({
            name: "Node.js", 
            price: "$39,90", 
            description: "Os primeiros passos com Node.js",  
            cover: "livro-node.jpg"
        }),
        new Book({
            name: "TDD", 
            price: "$39,90", 
            description: "Teste e Design no Mundo Real",  
            cover: "tdd.png"
        }),
        new Book(
        {
            name: "Métricas Ágeis", 
            price: "$39,90", 
            description: "Obtenha melhores resultados em sua equipe",  
            cover: "metricas-ageis.jpg"
        })
    ]
                      
    Book.insertMany(livros).then(moogoseDocuments => {
        console.log(moogoseDocuments, "Inserted with success")
    }).catch(err => {
        console.log(err)
    })

    res.send(
        `Books saved 
        <br>
        <a href='../'>back</a>
    `)
})

module.exports = router