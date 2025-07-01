import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 
      bg-gradient-to-br from-indigo-300 to-purple-100 gap-8 
      dark:from-indigo-950 dark:to-purple-800">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full flex justify-center md:w-auto"
      >
        <img
          src="/avatar.jpeg"
          alt="Foto de perfil"
          className="w-auto h-64 md:w-auto md:h-80 rounded-xl object-contain shadow-xl 
          border-4 border-indigo-400 dark:border-purple-500
          transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl
          hover:border-indigo-500 dark:hover:border-purple-400"
        />
      </motion.div>
      <div className="text-center md:text-left max-w-2xl">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Víctor Sales Barberà
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t('home.intro')}
        </motion.p>
        <motion.div 
          className="flex gap-6 mt-6 justify-center md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="https://github.com/MrClit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-200 dark:hover:text-purple-300 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/vsales"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-200 dark:hover:text-purple-300 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a 
            href="mailto:victor.sales83@gmail.com" 
            className="hover:text-indigo-200 dark:hover:text-purple-300 transition-colors duration-200"
            aria-label="Send email"
          >
            <FaEnvelope size={28} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
