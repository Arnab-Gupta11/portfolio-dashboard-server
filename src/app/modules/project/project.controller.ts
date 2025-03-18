import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ProjectServices } from './project.service';
import sendResponse from '../../utils/sendResponse';


// Create a new project
const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProjectInDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

// Get all projects
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProjectsFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects fetched successfully',
    data: result,
  });
});

// Get a single project
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProjectFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project fetched successfully',
    data: result,
  });
});

// Update a project
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProjectInDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

// Delete a project
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProjectServices.deleteProjectFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: {},
  });
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
