import AppError from '../../errors/AppError';
import { IProject } from './project.interface';
import Project from './project.model';

// Create a project in DB
const createProjectInDB = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};

// Get all projects from DB
const getAllProjectsFromDB = async () => {
  const result = await Project.find().sort({ createdAt: -1 });
  return result;
};
// Get all Featured projects from DB
const getAllFeaturedProjectFromDB = async () => {
  let result = await Project.find({ isFeatured: true });

  if (result.length === 0) {
    result = await Project.find().sort({ createdAt: -1 });
  }
  return result;
};

//Update Project status
const updateProjectStatusIntoDB = async (id: string) => {
  // Find the project first
  const project = await Project.findById(id);

  if (!project) {
    throw new AppError(404, 'Project not found');
  }

  // Toggle the `isFeatured` value
  const updatedProject = await Project.findByIdAndUpdate(
    id,
    { $set: { isFeatured: !project.isFeatured } }, // Properly toggles the boolean value
    { new: true, runValidators: true },
  );

  return updatedProject;
};

// Get single project by ID
const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id).populate('skills');
  return result;
};

// Update a project
const updateProjectInDB = async (id: string, payload: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a project
const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectInDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
  getAllFeaturedProjectFromDB,
  updateProjectStatusIntoDB,
};
