export interface ProjectTag {
  icon: string;
  lib: string;
  label: string;
}

// Dato estático del proyecto (única fuente de la identidad vía `key`)
export interface ProjectData {
  key: string;
  image: string;
  url?: string;
  repo?: string;
  tags: ProjectTag[];
}

// Modelo de vista que consume ProjectCard (incluye textos traducidos)
export interface Project extends ProjectData {
  title: string;
  description: string;
}
