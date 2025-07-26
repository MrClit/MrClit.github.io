import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const aboutSections = t('about.sections', { returnObjects: true }) as Array<{
    title: string;
    content: string[];
  }>;

  return (
    <div className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-gradient-to-br from-indigo-200 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Fondo decorativo animado */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-300/30 dark:bg-indigo-900/30 blur-3xl z-0 animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      {/* Hero con avatar y nombre */}
      <div className="relative z-10 flex flex-col items-center mb-16">
        <motion.img
          src="/avatar-face.jpeg"
          alt="Avatar"
          className="w-32 h-32 rounded-full shadow-xl border-4 border-indigo-400 dark:border-indigo-600 mb-4 bg-white object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.h1
          className="text-4xl font-extrabold text-indigo-800 dark:text-indigo-300 text-center mb-2 drop-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('about.title')}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 text-center mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {t('about.subtitle')}
        </motion.p>
      </div>
      {/* Separador SVG decorativo */}
      <svg
        className="w-full h-12 mb-8"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient)"
          fillOpacity="0.3"
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a5b4fc" />
          </linearGradient>
        </defs>
      </svg>
      {/* Secciones en cards glassmorphism */}
      <div className="mx-auto max-w-4xl space-y-10 relative z-10">
        {aboutSections.map((section, index: number) => (
          <motion.div
            key={section.title}
            className="bg-white/60 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-indigo-200/40 dark:border-indigo-700/40 hover:scale-[1.025] transition-all duration-500 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.7, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-3">
              <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-300 animate-pulse"></span>
              {section.title}
            </h2>
            <ul className="space-y-3 pl-5">
              {section.content.map((item: string, i: number) => (
                <motion.li
                  key={i}
                  className="text-gray-800 dark:text-gray-200 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-indigo-500 dark:before:text-indigo-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 100 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      {/* Call to action final */}
      <motion.div
        className="mt-16 flex justify-center z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 100 }}
      >
        <a
          href="mailto:victor.sales83@gmail.com"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-colors text-lg"
        >
          {t('about.contactCta', 'Contáctame')}
        </a>
      </motion.div>
    </div>
  );
};

export default About;
