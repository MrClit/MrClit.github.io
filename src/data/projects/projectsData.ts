import type { ProjectData } from './types';

export const projectsData: ProjectData[] = [
  {
    key: 'friends',
    image: '/friends.png',
    url: 'https://mrclit.github.io/friends-web/',
    repo: 'https://github.com/MrClit/friends-web',
    tags: [
      { icon: 'SiReact', lib: 'si', label: 'React' },
      { icon: 'SiTypescript', lib: 'si', label: 'TypeScript' },
      { icon: 'SiTailwindcss', lib: 'si', label: 'Tailwind CSS' },
    ],
  },
  {
    key: 'finapp',
    image: '/FinApp.png',
    url: 'https://fin-app-tawny.vercel.app',
    repo: 'https://github.com/MrClit/fin-app',
    tags: [
      { icon: 'SiNextdotjs', lib: 'si', label: 'Next.js' },
      { icon: 'SiSupabase', lib: 'si', label: 'Supabase' },
      { icon: 'SiTailwindcss', lib: 'si', label: 'Tailwind CSS' },
    ],
  },
];
