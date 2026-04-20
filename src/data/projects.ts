export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshotUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Worky McStreamline',
    description:
      'A field service and commissioning management app for tracking HVAC/cooling system installations, service tickets, technician scheduling, and customer contact logging.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'JWT'],
    githubUrl: 'https://github.com/RedNoodle325/worky_mcstreamline',
    liveUrl: 'https://worky.hackazak.com',
    screenshotUrl: '/projects/worky-mcstreamline.png',
    featured: true,
  },
];
