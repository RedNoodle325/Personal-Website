export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves. Replace this with your own project.',
    tech: ['TypeScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://project-one.example.com',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'Another project description here. What was the challenge? What did you build? What did you learn?',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-two',
    featured: false,
  },
  {
    title: 'Project Three',
    description:
      'A third project. Highlight the most interesting technical or product decisions you made.',
    tech: ['Go', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/yourusername/project-three',
    featured: false,
  },
];
