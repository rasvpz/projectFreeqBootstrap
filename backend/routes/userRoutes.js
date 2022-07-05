import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, registerUser, updateUserProfile} from '../Controllers/userController.js'
import {protect} from '../MiddlwWear/authMiddlewear.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.
route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

export default router