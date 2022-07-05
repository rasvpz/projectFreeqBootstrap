import express from "express";
import path, { dirname } from "path"
import connectDb from "./Config/db.js"
import Products from './Model/productsModel.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


import cors from 'cors'
import dotenv from 'dotenv'
const __dirname = path.resolve();
const app = express()
app.use(express.json())
dotenv.config()
connectDb()
app.use(cors())



  app.get('/', (req, res)=>{
    res.json('API is Running..')
  })

  app.use('/api/products', productRoutes)
  app.use('/api/indiVidualProduct', productRoutes)
  app.use('/api/users', userRoutes)

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./frondend/build")));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frondend", "build", "index.html"));
    });
  }
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
console.log('started');
});