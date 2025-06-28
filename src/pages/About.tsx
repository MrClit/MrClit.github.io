
import { motion } from "framer-motion";
import { aboutSections } from "../data/about";

const About: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-700 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        
        <div className="space-y-8">
          {aboutSections.map((section, index: number) => (
            <motion.div
              key={section.title}
              className="
                bg-gray-300 dark:bg-gray-800 
                backdrop-blur-sm rounded-xl p-6 shadow-lg 
                border border-gray-300/50 hover:border-indigo-300/50 
                dark:border-gray-700/50 dark:hover:border-indigo-500/50
                transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-indigo-800 dark:text-indigo-400 flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-800 dark:bg-indigo-400 mr-3"></span>
                {section.title}
              </h2>
              <ul className="space-y-3 pl-5">
                {section.content.map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    className="text-gray-800 dark:text-gray-300 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-indigo-800 dark:before:text-indigo-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.3 + (i * 0.1),
                      type: 'spring',
                      stiffness: 100
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.5,
            type: 'spring',
            stiffness: 100
          }}
        >
          <p className="mt-8 text-center text-lg leading-relaxed">
            I'm passionate about creating digital experiences that not only look great but are also intuitive and accessible to everyone. I believe in technology's power to solve problems and improve people's lives, and I strive to write clean, maintainable, and well-documented code. My approach combines technical excellence with user-centered design to deliver meaningful digital solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
