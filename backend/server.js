const express = require("express");
const app = express()
const path = require("path")
const products = require('./data/Products')
const cors = require('cors')


app.use(cors())

if (process.env.NODE_ENV === "production") {
    // Set static folder
    console.log(path.resolve(__dirname, "../frondend", "build"));
    app.use(express.static(path.resolve(__dirname, "../frondend", "build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../frondend", "build", "index.html"));
    });
  }

  app.get('/', (req, res)=>{
    res.send('API is Running..')
  })

  app.get('/api/products', (req, res)=>{
    console.log('API is Running')
    res.json(products)
  })

  app.get('/api/indiVidualProduct/:id', (req, res)=>{

    console.log('IndividualProductFetched', req.params.id)
    const indiVidualProduct = products.find((p) => p._id === req.params.id)
    res.json(indiVidualProduct)
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
console.log('started');
});