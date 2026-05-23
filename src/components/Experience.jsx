import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState(0);

  const experiences = [
    {
      id: 0,
      company: 'Wipro',
      role: 'Assistant Manager - Automation and AI Engineer',
      duration: 'Mar 2026 - Present',
      isCurrent: true,
      points: [
        'Started a new professional chapter as Assistant Manager in the BPS-BFS domain',
        'Working on automation and AI engineering initiatives for banking and financial services operations',
        'Building intelligent automation solutions that combine process optimization with AI capabilities',
      ],
      techStack: ['Automation', 'AI Engineering', 'BPS-BFS', 'Python', 'GenAI'],
    },
    {
      id: 1,
      company: 'DXC Technology',
      role: 'Analyst I - Infrastructure Services',
      duration: 'Nov 2023 - Mar 2026',
      isCurrent: false,
      points: [
        'Built Virtual Linux System Assistant AI Agent and Change Management AI Agent using LangChain + Azure OpenAI',
        'Automated risk analysis across 7,000+ historical failure records',
        'Built HealthMate AI - RAG-based health report generator',
        'Led end-to-end automation on Cisco, HPE 3PAR, Brocade, Nimble',
        'Developed reusable automation components for multi-client scaling',
      ],
      techStack: ['Python', 'FastAPI', 'LangChain', 'Azure OpenAI', 'Streamlit', 'RAG'],
    },
    {
      id: 2,
      company: 'DXC Technology',
      role: 'Professional 1 - Service Delivery Coordinator',
      duration: 'Oct 2022 - Nov 2023',
      isCurrent: false,
      points: [
        'Delivered 50+ end-to-end automation solutions',
        'Proposed automation opportunities across multiple accounts',
      ],
      techStack: ['PowerShell', 'Bash', 'Power Automate'],
    },
    {
      id: 3,
      company: 'DXC Technology',
      role: 'Associate Professional - Software Engineer',
      duration: 'Jan 2021 - Oct 2022',
      isCurrent: false,
      points: [
        'Delivered 30+ automation solutions',
        'Contributed to storage automation use case identification',
      ],
      techStack: ['PowerShell', 'Bash', 'Storage Automation'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="section-padding bg-cream dark:bg-dark-500">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey in technology
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-400 to-primary-200 transform md:-translate-x-1/2 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-cream dark:border-dark-500 z-10 shadow-lg">
                {exp.isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Date - Hidden on mobile, shown on opposite side */}
              <div className={`hidden md:flex flex-1 items-center ${
                index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'
              }`}>
                <motion.div
                  className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  {exp.duration}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}
              >
                <motion.div
                  className={`card cursor-pointer ${
                    expandedId === exp.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setExpandedId(expandedId === exp.id ? -1 : exp.id)}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Building2 className="w-5 h-5" />
                        <span className="font-medium">{exp.company}</span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-dark dark:text-cream">
                        {exp.role}
                      </h3>
                      {/* Mobile Date */}
                      <p className="md:hidden text-muted dark:text-muted-light text-sm mt-1">
                        {exp.duration}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted dark:text-muted-light"
                    >
                      {expandedId === exp.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Points */}
                        <ul className="mt-4 space-y-3">
                          {exp.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 text-muted dark:text-muted-light"
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="mt-6 pt-4 border-t border-cream-300 dark:border-dark-300">
                          <p className="text-sm text-muted dark:text-muted-light mb-3">
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech) => (
                              <span key={tech} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
