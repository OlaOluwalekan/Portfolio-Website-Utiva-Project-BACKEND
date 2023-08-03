import Admin from '../models/Admin.js'
import { StatusCodes } from 'http-status-codes'
import BadRequestError from '../errors/bad-request.js'
import UnauthenticatedError from '../errors/unauthenticated.js'

export const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body)
  const token = admin.createJWT()
  res.status(StatusCodes.CREATED).json({ admin, token })
}

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('email and password is required')
  }

  const admin = await Admin.findOne({ email: req.body.email })
  if (!admin) {
    throw new UnauthenticatedError('invalid email or password')
  }

  const correctPassword = await admin.comparePassword(password)
  if (!correctPassword) {
    throw new UnauthenticatedError('invalid email or password')
  }
  const token = admin.createJWT()
  res.status(StatusCodes.OK).json({ admin, token })
}
