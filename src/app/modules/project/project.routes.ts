import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/', ProjectControllers.createProject);
router.get('/', ProjectControllers.getAllProjects);
router.get('/featured', ProjectControllers.getAllProjects);
router.get('/:id', ProjectControllers.getSingleProject);
router.patch('/:id', ProjectControllers.updateProject);
router.patch('/status/:id', ProjectControllers.updateProjectStatus);
router.delete('/:id', ProjectControllers.deleteProject);

export const ProjectRouters = router;
