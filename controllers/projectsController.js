import NotFoundError from '../errors/not-found.js'
import Project from '../models/Project.js'
import { StatusCodes } from 'http-status-codes'

export const createProject = async (req, res) => {
  const project = await Project.create(req.body)
  res.status(StatusCodes.CREATED).json({ project })
}

export const getAllProjects = async (req, res) => {
  const projects = await Project.find({})
  res.status(StatusCodes.OK).json({ projects })
}

export const getSingleProject = async (req, res) => {
  const project = await Project.findById(req.params.id)
  if (!project) {
    throw new NotFoundError('project does not exist')
  }
  res.status(StatusCodes.OK).json({ project })
}

export const deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id)
  if (!project) {
    throw new NotFoundError('project does not exist')
  }
  res.status(StatusCodes.OK).send('project deleted')
}

export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!project) {
    throw new NotFoundError('project does not exist')
  }
  res.status(StatusCodes.OK).json({ project })
}
