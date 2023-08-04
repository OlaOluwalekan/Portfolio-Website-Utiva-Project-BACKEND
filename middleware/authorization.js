import jwt from 'jsonwebtoken'
import UnauthenticatedError from '../errors/unauthenticated.js'

export const verifyAdmin = (req, res, next) => {
  // CHECK HEADER
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith(`Bearer`)) {
    throw new UnauthenticatedError('You are not authorized')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    if (!payload.isAdmin) {
      throw new UnauthenticatedError('You are not an admin')
    }

    req.admin = { adminId: payload.id, email: payload.email }
    next()
  } catch (error) {
    throw new UnauthenticatedError(error.message)
  }
}
