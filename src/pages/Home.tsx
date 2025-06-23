import { motion } from "framer-motion";

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
          ¡Bienvenido a mi portfolio! Aquí encontrarás mis proyectos y experiencia
          profesional.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
