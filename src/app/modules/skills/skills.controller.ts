import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { SkillServices } from './skills.service';
import sendResponse from '../../utils/sendResponse';

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.createSkillInDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getAllSkillsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});
const getAllSkillsOptions = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getSkillsOptionFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.getSingleSkillFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill fetched successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.updateSkillInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await SkillServices.deleteSkillFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill deleted successfully',
    data: {},
  });
});

export const SkillControllers = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
  getAllSkillsOptions,
};
