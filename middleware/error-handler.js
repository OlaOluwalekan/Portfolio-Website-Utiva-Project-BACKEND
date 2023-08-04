import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    message: err.message || 'something went wrong',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  res.status(customError.statusCode).json({ message: customError.message })
}

export default errorHandlerMiddleware
