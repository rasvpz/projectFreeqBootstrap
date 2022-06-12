const mongoose = require('mongoose')

const productsSchema = mongoose.Schema( 
    {
        wearType: {
            type: String,
            required: true,
        },

        item: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },

        brand: {
            type: String,
            required: true,
        },

        pic: {
            type: String,
            required: true,
        },

        size: {
            type: String,
            required: true,
        },

        color: {
            type: String,
            required: true,
        },

        rate: {
            type: Number,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
        },

        ratings: {
            type: Number,
            default: 0        

        },

        reviews: {
            type: String,
            default: 'No Reviews' 
        },

        trend: {
            type: String,
            default: 'Not'        
        },

        seasonFavorite: {
            type: String,
            default: 'no'        
        },

        mostPurchased: {
            type: Number,
            default: 0        
        },

    },
        {
            timestamps:true,
        }
 )

        const Products = mongoose.model('Products', productsSchema)
        module.exports = Products