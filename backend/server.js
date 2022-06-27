import express from "express";
import path, { dirname } from "path"
import connectDb from "./Config/db.js"
import Products from './Model/productsModel.js'

import cors from 'cors'
import dotenv from 'dotenv'
const __dirname = path.resolve();
const app = express()
dotenv.config()
connectDb()
app.use(cors())

if (process.env.NODE_ENV === "productifon") {
    app.use(express.static(path.join(__dirname, "./frondend/build")));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frondend", "build", "index.html"));
    });
  }

  app.get('/', (req, res)=>{
    res.send('API is Running..')
  })

  app.get('/api/products', async (req, res)=>{
    try{
      const products = await Products.find({})
      res.json(products)
    }catch (error){
      console.log(error.message)
    }    
  })

  app.get('/api/indiVidualProduct/:id', async(req, res)=>{    
    const indiVidualProduct = await Products.findById(req.params.id)
    res.json(indiVidualProduct)
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
console.log('started');
});