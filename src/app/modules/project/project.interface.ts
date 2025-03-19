export interface IProject {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  thumbnail: string;
  fullImage: string;
  type: 'Website' | 'Mobile App' | 'Desktop App';
  clientGithubLink: string;
  serverGithubLink: string;
  liveLink: string;
  isFeatured: boolean;
}
