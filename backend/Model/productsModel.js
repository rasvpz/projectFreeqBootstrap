
import mongoose from 'mongoose'

const reviewsSchema = mongoose.Schema({
        name: { type:String, required: true },
        rating: { type:Number, required: true },
        comment: { type:String, required: true },
})

const productsSchema = new mongoose.Schema( 
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    mainCategory: {
        type: String,
        required: true,
    },

    subCategory: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },

    thumbNailPic: {
        type: String,
        required: true,
    },
    picBig: {
        type: String,
        required: true,
    },
    
    color:[            
         { type:String, required: true },            
      ],

    size: [
        { type:String, required: true },
    ],

    rate: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    countInStock: {
        type: Number,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
        default: 0
    },

    reviews: [reviewsSchema],

    newProducts: {
        type: String,
        default: 'Not'        
    },

    inspiredProducts: {
        type: String,
        default: 'no'        
    },

    latestProducts: {
        type: Number,
        default: 6        
    },

},
    {
        timestamps:true,
    }
)
        const Products = mongoose.model('Products', productsSchema)
        export default  Products