import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

import express from 'express'
import notFound from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import start from './utils/start.js'
import adminRouter from './routes/admin.js'
const app = express()

// USE BODY PARSER
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Portfolio')
})

app.use('/api/v1/admin', adminRouter)

// USE ERROR MIDDLEWARE
app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 9000

start(app, port)
