import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Bot, Shield, Heart } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Virtual Linux System Assistant AI Agent',
      description:
        'AI Agent for Linux system operations using LangChain agents and Azure OpenAI. Includes intelligent change management with automated risk analysis across 7,000+ historical failures and async ServiceNow API integration.',
      icon: Bot,
      techStack: ['Python', 'LangChain', 'Azure OpenAI', 'FastAPI', 'Streamlit'],
      liveDemo: '#', // Add your Hugging Face / Streamlit link
      github: '#', // Add your GitHub link
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Change Management AI Agent',
      description:
        'Intelligent change management system with async ServiceNow API integration. Automated risk analysis pipeline predicts high-risk changes before deployment.',
      icon: Shield,
      techStack: ['LangChain', 'Azure OpenAI', 'ServiceNow API', 'Python'],
      liveDemo: '#',
      github: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'HealthMate AI',
      description:
        'RAG-based Generative AI app delivering personalized health reports and wellness plans. Showcases AI-driven healthcare automation using retrieval-augmented generation pipelines.',
      icon: Heart,
      techStack: ['RAG', 'LangChain', 'OpenAI', 'Python'],
      liveDemo: '#',
      github: '#',
      gradient: 'from-rose-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-400">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            AI-powered solutions I&apos;ve built to solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card h-full flex flex-col overflow-hidden">
                {/* Card Header with Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-dark dark:text-cream group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted dark:text-muted-light leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-cream-300 dark:border-dark-300">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-sm justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-sm justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/shivamkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Github size={20} />
            View more projects on GitHub
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
