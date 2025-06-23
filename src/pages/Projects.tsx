import useGlobalStore from "../store/useGlobalStore";
import { useEffect } from "react";
import { motion } from "framer-motion";

const dummyProjects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción detallada del primer proyecto que muestra mis habilidades y experiencia en desarrollo web.",
    image: "https://picsum.photos/seed/1/600/400",
    url: "#",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Segundo proyecto destacado que demuestra mis capacidades en el desarrollo de aplicaciones modernas.",
    image: "https://picsum.photos/seed/2/600/400",
    url: "#",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Tercer proyecto que muestra mi versatilidad y capacidad para aprender nuevas tecnologías rápidamente.",
    image: "https://picsum.photos/seed/3/600/400",
    url: "#",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
  },
];

const ProjectCard = ({ project }: { project: typeof dummyProjects[0] }) => (
  <motion.a
    href={project.url}
    className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/20"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
      <p className="mb-4 text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-900/50 px-3 py-1 text-sm text-indigo-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const Projects: React.FC = () => {
  const { projects, setProjects } = useGlobalStore();

  useEffect(() => {
    setProjects(dummyProjects);
  }, [setProjects]);

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Mis Proyectos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-400">
            Algunos de mis trabajos y proyectos más recientes
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
