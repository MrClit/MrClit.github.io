import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {

const gridMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
};
const gridConfig = gridMap[projectsData.length] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl">
            Some of my recent works and projects
          </p>
        </motion.div>

        <div className={`grid ${gridConfig} gap-8`}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
