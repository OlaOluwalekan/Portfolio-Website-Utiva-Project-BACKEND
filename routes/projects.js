import express from 'express'
import {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateProject,
} from '../controllers/projectsController.js'
import { verifyAdmin } from '../middleware/authorization.js'
const router = express.Router()

router.route('/create').post(verifyAdmin, createProject)
router.route('/').get(getAllProjects)
router
  .route('/:id')
  .get(verifyAdmin, getSingleProject)
  .put(verifyAdmin, updateProject)
  .delete(verifyAdmin, deleteProject)

export default router
