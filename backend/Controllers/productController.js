import asyncHandler from 'express-async-handler'
import Products from '../Model/productsModel.js'



// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
    const getProducts = asyncHandler(async (req, res) => {  
    const products = await Products.find({  })  
    res.json({ products })
  })


    const getProductById = asyncHandler(async (req, res) => {  
    try{
        const indiVidualProduct = await Products.findById(req.params.id)
        res.json(indiVidualProduct)
      }catch (error){
        console.log(error.message)
      } 
  })

  export {
    getProducts,
    getProductById,
  }