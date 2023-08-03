import express from 'express'
import { createAdmin, loginAdmin } from '../controllers/adminController.js'
const router = express.Router()

router.route('/auth/create').post(createAdmin)
router.route('/auth/login').post(loginAdmin)

export default router
