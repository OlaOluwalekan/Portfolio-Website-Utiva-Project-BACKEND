import mongoose from 'mongoose'

const connectDB = (uri) => {
  return mongoose.connect(uri, console.log(`connected to database`))
}

export default connectDB
