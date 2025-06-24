import { create } from "zustand";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

type ActivePage = 'home' | 'projects' | 'about';

interface GlobalState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}));

export default useGlobalStore;
