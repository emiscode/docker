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
            name: "Javascript: The Definitive Guide", 
            price: "$39,90", 
            description: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.", 
            cover: "javascript-definitive.jpg"
        }),
        new Book(
        {
            name: "Eloquent Javascript: A Modern Introduction to Programming", 
            price: "$39,90", 
            description: "JavaScript lies at the heart of almost every modern web application.",  
            cover: "javascript-eloquent.jpg"
        }),
         new Book({
            name: "Clean Code: A Handbook of Agile Software Craftsmanship", 
            price: "$39,90", 
            description: "If code isn’t clean, it can bring a development organization to its knees." ,
            cover: "clean-code.jpg"
        }),
        new Book({
            name: "Design Patterns: Elements of Reusable Object-Oriented Software", 
            price: "$39,90", 
            description: "Capturing a wealth of experience about the design of object-oriented software",  
            cover: "design-patterns.jpg"
        }),
        new Book({
            name: "Test Driven Development: By Example", 
            price: "$39,90", 
            description: "Quite simply, test-driven development is meant to eliminate fear in application development.",  
            cover: "tdd.jpg"
        }),
        new Book(
        {
            name: "The Pragmatic Programmer: Your journey to mastery", 
            price: "$39,90", 
            description: "Illustrates the best approaches and major pitfalls of many different aspects of software development",  
            cover: "pragmatic-programmer.jpg"
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