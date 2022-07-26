import express from 'express'
const router = express.Router()
import {getProducts, getProductById, deleteProduct, createProduct} from '../Controllers/productController.js'
import {protect, admin} from '../MiddlwWear/authMiddlewear.js'


router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)


export default router