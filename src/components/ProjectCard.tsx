import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { IconRenderer } from './IconRenderer';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  project: Project;
}

const baseClassName = `group relative overflow-hidden rounded-xl
    bg-gray-200 dark:bg-gray-700 shadow-lg
    transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/20
    w-full max-w-md mx-auto`;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  // Una demo es válida solo si hay URL y no es el placeholder "#"
  const hasDemo = Boolean(project.url) && project.url !== '#';

  const content = (
    <>
      {/* GitHub repo icon top-right */}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
          onClick={(e) => e.stopPropagation()}
          aria-label="GitHub Repository"
        >
          <FaGithub size={22} className="text-gray-800 dark:text-gray-200" />
        </a>
      )}
      {/* Badge "Próximamente" cuando no hay demo navegable */}
      {!hasDemo && (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white shadow">
          {t('projects.comingSoon')}
        </span>
      )}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="flex flex-col items-center gap-1 px-3 py-1 text-sm text-indigo-900 dark:text-indigo-200 text-center"
            >
              <IconRenderer lib={tag.lib} icon={tag.icon} size={30} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const motionProps = {
    whileHover: { y: -5 },
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  } as const;

  if (hasDemo) {
    return (
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className={baseClassName} {...motionProps}>
      {content}
    </motion.div>
  );
};

export default ProjectCard;
