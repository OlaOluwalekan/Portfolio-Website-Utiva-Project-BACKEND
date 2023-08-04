import { Schema, model } from 'mongoose'

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    image: {
      type: String,
      required: [true, 'image is required'],
    },
    liveUrl: {
      type: String,
    },
    repoUrl: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

export default model('Project', ProjectSchema)
