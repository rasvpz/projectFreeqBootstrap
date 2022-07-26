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

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id)
  console.log(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Products({

      user: req.user._id,
      _id:'62deb87d2b60539cd15ras2d',
      mainCategory: 'Aluminium',
      subCategory: 'Normal Container',
      productName:'LoremIpsum',
      thumbNailPic:'i2.jpg',
      picBig:'2.png',
      color:['Gold', 'Silver'],
      size:['M','L'],
      rate: 900,
      description:'Aluminium Container with lorem ipsun dolar sota sinta coral motomiyem wrtel poliv mintas',
      countInStock: 25,
      ratings: 3,
      reviews: [{
        name: "name",
        rating: 10,
        comment: 'Description'
      },
      {
        name: "name",
        rating: 10,
        comment: ''
      },
      {
        name: "name",
        rating: 10,
        comment: 'Description'
      }],
      newProducts:'no',
      inspiredProducts:'yes',
      latestProducts:6
   
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})



  export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
  }