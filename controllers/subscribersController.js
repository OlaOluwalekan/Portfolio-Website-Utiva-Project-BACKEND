import SubScriber from '../models/SubScriber.js'
import { StatusCodes } from 'http-status-codes'

export const createSubscriber = async (req, res) => {
  const subscriber = await SubScriber.create(req.body)
  const code = subscriber.generateCode()
  res.status(StatusCodes.CREATED).json({ subscriber, code })
}

export const verifyEmail = async (req, res) => {
  const subscriber = await SubScriber.findByIdAndUpdate(
    req.id,
    { isVerified: true },
    { new: true, runValidators: true }
  )
  res.status(StatusCodes.OK).json({ subscriber })
}
