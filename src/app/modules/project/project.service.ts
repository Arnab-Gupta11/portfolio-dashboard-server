import { Project } from './project.model';

import QueryBuilder from '../../builder/QueryBuilder';
import { IProject } from './project.interface';

// Create a project in DB
const createProjectInDB = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};

// Get all projects from DB
const getAllProjectsFromDB = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(['name', 'description', 'technologies']) // Searchable fields
    .filter()
    .sort()
    .sortOrder();
  const result = await projectQuery.modelQuery;
  return result;
};

// Get single project by ID
const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);
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
};
