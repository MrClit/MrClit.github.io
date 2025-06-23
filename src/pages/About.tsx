
import { motion } from "framer-motion";

const About: React.FC = () => {
  const sections = [
    {
      title: "Experiencia Profesional",
      content: [
        "He trabajado como desarrollador frontend durante X años, especializándome en la creación de interfaces de usuario modernas y responsivas.",
        "He participado en proyectos que van desde aplicaciones web a pequeña escala hasta soluciones empresariales complejas.",
        "Mi experiencia incluye trabajo con equipos multidisciplinarios siguiendo metodologías ágiles."
      ]
    },
    {
      title: "Formación Académica",
      content: [
        "Graduado en [Tu Carrera] por la [Universidad]",
        "Cursos especializados en desarrollo web y tecnologías frontend",
        "Certificaciones en tecnologías relevantes"
      ]
    },
    {
      title: "Habilidades Técnicas",
      content: [
        "Desarrollo Frontend: React, TypeScript, JavaScript (ES6+)",
        "Estilización: Tailwind CSS, CSS3, SASS",
        "Herramientas: Git, npm/yarn, Webpack, Vite",
        "Metodologías: Agile, Scrum, TDD"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Sobre Mí
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-400">
            Conoce más sobre mi trayectoria profesional y habilidades
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="rounded-2xl bg-gray-800 p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="mb-4 text-2xl font-bold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-white">
            ¿Por qué me apasiona lo que hago?
          </h3>
          <p className="text-gray-300">
            Me encanta crear experiencias digitales que no solo se vean bien, sino que también sean intuitivas y accesibles para todos. Creo en el poder de la tecnología para resolver problemas y mejorar la vida de las personas, y me esfuerzo por escribir código limpio, mantenible y bien documentado.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
