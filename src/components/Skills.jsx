import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Brain, Cloud, Cog, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      id: 1,
      title: 'Languages & Scripting',
      icon: Code,
      gradient: 'from-blue-500 to-indigo-500',
      skills: ['Python', 'PowerShell', 'Bash'],
    },
    {
      id: 2,
      title: 'LLMs & AI Frameworks',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['LangChain', 'LangGraph', 'RAG', 'OpenAI Agent SDK'],
    },
    {
      id: 3,
      title: 'LLM Platforms',
      icon: Cloud,
      gradient: 'from-primary to-primary-400',
      skills: ['OpenAI GPT', 'Google Gemini', 'Anthropic Claude', 'Groq', 'Azure OpenAI'],
    },
    {
      id: 4,
      title: 'Automation & RPA',
      icon: Cog,
      gradient: 'from-emerald-500 to-teal-500',
      skills: ['Power Automate', 'Storage Automation', 'Cisco', 'HPE 3PAR', 'Brocade'],
    },
    {
      id: 5,
      title: 'Data & Analytics',
      icon: BarChart3,
      gradient: 'from-amber-500 to-orange-500',
      skills: ['Pandas', 'NumPy', 'Power BI'],
    },
    {
      id: 6,
      title: 'AI Dev Tools',
      icon: Wrench,
      gradient: 'from-rose-500 to-red-500',
      skills: ['GitHub Copilot', 'Amazon Q', 'Cursor', 'Augment'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-cream dark:bg-dark-500">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="card h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark dark:text-cream">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-cream-200 dark:bg-dark-300 text-dark dark:text-cream rounded-lg text-sm font-medium 
                               hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300 cursor-default"
                      style={{
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-400 rounded-full shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-muted dark:text-muted-light font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
