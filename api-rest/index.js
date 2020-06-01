'use strict'
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config')
const hbs = require('express-handlebars')
const Product = require('./models/product') //cargar modulo del modelo
const app = express()
const method0verride = require('method-override') //apirest

const Handlebars = require('handlebars') //variable para cargar Handlebars
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access') //variable agregada para solucionar problema



app.put('/',(req,res,next)=>{
    res.send('PUT solicitud hecha por Jose Guzman') //apirest
})

app.engine('.hbs', hbs({
    defaultLayout: 'index',
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars) //esto tambien lo agregue. 
}))
app.set('view engine', '.hbs')

app.use('/static',express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(method0verride('_method')) //apirest


app.get('/insertar', (req, res)=>{
    res.render('product')
})
app.post('/api/product',(req,res)=>{ //post para guardar valores. 
    console.log('POST /api/product')
    console.log(req.body)
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = (req.body.category).toLowerCase();
    product.description = req.body.description
    console.log(req.body)
    
    product.save((err,productStored) =>{
        if(err) res.status(500).send ({message:`Error al guardar en BD ${err}`})
        //res.status(200).send({product: productStored})
        res.redirect('/api/product')
    })
})



app.get('/api/product',(req, res) =>{ //get para mostrar los productos
    
    Product.find( { } ,( err, products ) => {
        if(err) return res.status(500).send({message: `Error al realizar la peticion${err}` })
        if(!products) return res.status(404).send({message:`No existen productos`})
        //res.status(200).send( {products:[products]})
        res.render('products',{products}) 
    });
});



app.post('/api/product/productId',(req,res)=>{ //post para buscar un producto por nombre o ID en el buscador
    var nombre = req.body.productId
    var nombreOId = req.body.buscarX

    if(nombreOId=="nombre"){
        Product.find({name:nombre},(err, products) => {
            
            if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
            if(!products) return res.status(404).send({message:`El producto no existe`})
            //res.status(200).send({product:[products]})
            res.render('products',{products})
        })
    }
    else if(nombreOId=="ID"){
        Product.findById(nombre,(err, products) => {
        
            if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
            if(!products) return res.status(404).send({message:`El producto no existe`})
            //res.status(200).send({product:[products]})
            res.render('products',{products})     
        })
    }
})
//editar y eliminar.
app.get('/api/product/:productId',(req,res)=>{ //get para buscar por id solamente
    let productId = req.params.productId
    Product.findById(productId,(err,products) =>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
        if(!products) return res.status(404).send({message:`El producto no existe`})
       // res.status(200).send({product:todook})
        res.render('editar',{products})
        })
})
 app.put('/api/product/:productId',(req,res)=>{ //Metodo put que permite editar un producto
     let productId=req.params.productId
     console.log(`El product es: ${productId}`)

     let update = req.body
     console.log(update)
        Product.findOneAndUpdate({_id:productId}, update,(err,products)=>{
            if(err) res.status(500).send({message:`Error al actualizar el producto: ${err}`})
            res.redirect('/api/product')
        })
 })
 app.delete('/api/product/:productId',(req,res)=>{
     let productId = req.params.productId
     Product.findById(productId,(err,product)=>{
         product.remove(err =>{
             if(err) res.status(500).send({message:`Error al borrar el producto ${err}`})
             res.redirect('/api/product')
         })
     })
 })
 


app.get('/',(req,res)=>{
    res.render('home')
})


mongoose.connect(config.db,config.urlParser,(err,res)=>{
    if(err){
        return console.log(`Error al conectar la BD ${err}`)
    }

    console.log('Conexion a la BD exitosa')
    
    app.listen(config.port,()=>{
        console.log(`API-REST ejecutando en http://localhost:${config.port}`)
    })
})

/*
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser:true, useUnifiedTopology:true},(err,res) =>{
    if(err){
        return console.log(`Error al conectar la BD ${err}`)
    }

    console.log('Conexion a la BD exitosa')
    app.listen(port,()=>{
        console.log(`API-REST ejecutando en http://localhost:${port}`)
    })
})*/ 
