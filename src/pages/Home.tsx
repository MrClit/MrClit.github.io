import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-purple-600 gap-8">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full flex justify-center md:w-auto"
      >
        <img
          src="/avatar.jpeg"
          alt="Foto de perfil"
          className="w-auto h-64 md:w-auto md:h-80 rounded-xl object-contain shadow-xl border-4 border-indigo-400"
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
          className="text-lg md:text-xl text-gray-100"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to my portfolio! Here you'll find my projects and professional
          experience.
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
            className="text-white hover:text-indigo-200 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/vsales" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a 
            href="mailto:victor.sales83@gmail.com" 
            className="text-white hover:text-indigo-200 transition-colors duration-200"
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
