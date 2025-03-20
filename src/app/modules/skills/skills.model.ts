import mongoose, { Schema } from 'mongoose';
import { ISkill } from './skills.interface';

const SkillSchema = new Schema<ISkill>(
  {
    label: { type: String, required: true },
    icon: { type: String, required: true },
    progress: { type: Number, required: true },
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'Languages', 'Tools'],
      required: true,
    },
  },
  { timestamps: true },
);

const Skill = mongoose.model<ISkill>('Skill', SkillSchema);
export default Skill;
