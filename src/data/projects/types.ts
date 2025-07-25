export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: { icon: string; lib: string; label: string }[];
  repo?: string;
}
