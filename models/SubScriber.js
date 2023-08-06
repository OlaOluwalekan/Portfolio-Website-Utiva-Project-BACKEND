import { Schema, model } from 'mongoose'
import generateCode from 'generate-six-digit-readable-code'
import jwt from 'jsonwebtoken'
import sendVerificationEmail from '../email/sendVerificationEmail.js'

const SubscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

SubscriberSchema.methods.generateCode = function () {
  const code = generateCode()
  sendVerificationEmail(this.email, code)
  return jwt.sign(
    { id: this._id, verificationCode: code },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )
}

export default model('Subscriber', SubscriberSchema)
