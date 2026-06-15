import { motion } from 'framer-motion';
import { projectsData, Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  // Determine grid configuration based on the number of projects
  const gridMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
  };
  const gridConfig = gridMap[projectsData.length] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  // Resolve translated texts by project key
  const projects: Project[] = projectsData.map((project) => ({
    ...project,
    title: t(`projects.items.${project.key}.title`),
    description: t(`projects.items.${project.key}.description`),
  }));

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl">{t('projects.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl">{t('projects.subtitle')}</p>
        </motion.div>

        <div className={`grid ${gridConfig} gap-8`}>
          {projects.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
