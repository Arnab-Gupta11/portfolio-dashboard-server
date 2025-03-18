import { model, Schema } from 'mongoose';
import { IProject } from './project.interface';

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    technologies: { type: String, required: true },
    clientGithubLink: { type: String, default: '' },
    serverGithubLink: { type: String, default: '' },
    liveLink: { type: String, required: true },
  },
  { timestamps: true },
);

export const Project = model<IProject>('Project', ProjectSchema);
