import { model, Schema } from 'mongoose';
import { IProject } from './project.interface';

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true },
    technologies: { type: String, required: true },
    skills: [{ type: Schema.Types.ObjectId, ref: 'Skill', require: true }],
    thumbnail: { type: String, required: true },
    fullImage: { type: String, required: true },
    type: {
      type: String,
      enum: ['Website', 'Mobile App', 'Desktop App'],
      required: true,
    },
    clientGithubLink: { type: String, default: '' }, // Not required
    serverGithubLink: { type: String, default: '' }, // Not required
    liveLink: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Project = model<IProject>('Project', ProjectSchema);
export default Project;
