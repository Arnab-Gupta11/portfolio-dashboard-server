import Skill from './skills.model';
import { ISkill } from './skills.interface';
import AppError from '../../errors/AppError';

const createSkillInDB = async (payload: ISkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};
const getSkillsOptionFromDB = async () => {
  const result = await Skill.find({ category: { $ne: 'Tools' } });
  return result;
};

const getSingleSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  if (!result) throw new AppError(404, 'Skill not found');
  return result;
};

const updateSkillInDB = async (id: string, payload: Partial<ISkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) throw new AppError(404, 'Skill not found');
  return result;
};

const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  if (!result) throw new AppError(404, 'Skill not found');
  return result;
};

export const SkillServices = {
  createSkillInDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
  updateSkillInDB,
  deleteSkillFromDB,
  getSkillsOptionFromDB,
};
