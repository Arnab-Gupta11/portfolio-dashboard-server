import express from 'express';
import { SkillControllers } from './skills.controller';

const router = express.Router();

router.post('/', SkillControllers.createSkill);
router.get('/', SkillControllers.getAllSkills);
router.get('/options', SkillControllers.getAllSkillsOptions);
router.get('/:id', SkillControllers.getSingleSkill);
router.patch('/:id', SkillControllers.updateSkill);
router.delete('/:id', SkillControllers.deleteSkill);

export const SkillRouters = router;
