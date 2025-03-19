import { z } from 'zod';

export const projectValidationSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().url('Invalid image URL'),
  type: z.string().min(1, 'Project type is required'),
  technologies: z.string().min(1, 'Technologies are required'),
  clientGithubLink: z.string().url('Invalid GitHub URL'),
  serverGithubLink: z.string().url('Invalid GitHub URL'),
  liveLink: z.string().url('Invalid live link URL'),
});
