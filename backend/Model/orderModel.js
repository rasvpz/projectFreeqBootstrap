import mongoose from 'mongoose'

const orderSchema = mongoose.Schema( 
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        orderItems:[{
            name: {type: String, required: true},
            qty: {type: String, required: true},
            image: {type: String, required: true},
            price: {type: String, required: true},
            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                     required: true,
                     ref: 'Product'
                }
            ],
        }],

        shippingAddress: {
            address:{ type: String, required: true},
            city:{ type: String, required: true},
            postal:{ type: String, required: true},
            country:{ type: String, required: true},

        },

        paymentMethod: {
            type: String,
            required: true,
        },  

        paymentResult: {
            id:{typr:String},
            status:{typr:String},
            update_time: {type:String},
            email_adress:{type:String}
        },
        
        taxPrices: {
            type: Number,
            required: true,
            default: 0.0,
        },

        shippingPrices: {
            type: Number,
            required: true,
            default: 0.0,
        },

        totalPrices: {
            type: Number,
            required: true,
            default: 0.0,
        },

        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },

        paidAt: {
            type: Date,
        },

        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },

        deliveredAt: {
            type: Date,
        },       

    },
        {
            timestamps:true,
        }
 )

        const Order = mongoose.model('Order', orderSchema)
        export default  Order