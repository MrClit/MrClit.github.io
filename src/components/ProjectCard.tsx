import { motion } from "framer-motion";
import { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
  }

const ProjectCard = ({ project }: ProjectCardProps) => (
<motion.a
    href={project.url}
    className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/20"
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
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
            <span
                key={tag}
                className="rounded-full bg-indigo-300/50 dark:bg-indigo-900/50 px-3 py-1 text-sm text-indigo-900 dark:text-indigo-200"
            >
                {tag}
            </span>
            ))}
        </div>
    </div>
</motion.a>
);

export default ProjectCard;
