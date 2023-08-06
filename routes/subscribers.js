import express from 'express'
import {
  createSubscriber,
  verifyEmail,
} from '../controllers/subscribersController.js'
import { verifyCode } from '../middleware/authorization.js'
const router = express.Router()

router.route('/create').post(createSubscriber)
router.route('/create/verify').put(verifyCode, verifyEmail)

export default router
