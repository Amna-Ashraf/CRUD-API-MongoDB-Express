const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productmodel')
const app = express()

app.use(express.json)
app.use(express.urlencoded({extended: false}))

//routes

//to fetch all the products from the database

app.get('/product', async(req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// to fetch a single product from the database

app.get('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// to add new products to th database

app.post('/product',async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// to update or edit products in database

app.put('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        //we cannot find an product in database

        if(!product){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// to delete a product from the database

app.delete('/product/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} )
mongoose.
connect('mongodb+srv://sp22bse110:m.ashraf@cluster0.dybute1.mongodb.net/node-apiretryWrites=true&w=majority')
.then(()=>{
    console.log("connect to Mongodb")
    app.listen(3000, ()=>{
        console.log('node API app is running on port 3000')
    })
}).catch(()=>{
    console.log(error)
})