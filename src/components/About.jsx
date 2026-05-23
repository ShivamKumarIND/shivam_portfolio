import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Zap, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Briefcase,
      value: '5+',
      label: 'Years Experience',
      color: 'from-primary to-primary-400',
    },
    {
      icon: Zap,
      value: '80+',
      label: 'Automation Solutions Delivered',
      color: 'from-blue-500 to-blue-400',
    },
    {
      icon: Award,
      value: '4x',
      label: 'Champ Award Winner',
      color: 'from-amber-500 to-amber-400',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-400">
      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl" />
                
                {/* Image */}
                <motion.div
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/Shivam_image.jpg"
                    alt="Shivam Kumar"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-2xl shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                >
                  <span className="text-2xl font-bold">5+</span>
                  <span className="text-sm ml-1">Years</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center lg:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-dark dark:text-cream mb-6">
                Assistant Manager - <span className="text-primary">Automation and AI Engineer</span>
              </h3>

              <div className="space-y-4 text-muted dark:text-muted-light text-lg leading-relaxed">
                <p>
                  I am currently working with <span className="font-semibold text-dark dark:text-cream">Wipro as an Assistant Manager</span>,
                  where my role focuses on Automation and AI Engineering in the
                  <span className="text-primary font-medium"> BPS-BFS domain</span>.
                </p>
                <p>
                  I bring <span className="font-semibold text-dark dark:text-cream">5+ years of experience</span> across automation,
                  infrastructure services, and Generative AI. I left DXC Technology on
                  March 27, 2026, after building LLM-powered applications and automation
                  solutions using <span className="text-primary font-medium">OpenAI, Gemini, Claude, Groq, RAG, LangChain, and LangGraph</span>.
                </p>
              </div>

              {/* Location & Contact Info */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-muted dark:text-muted-light">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Gurugram, India</span>
                </div>
                <div className="flex items-center gap-2 text-muted dark:text-muted-light">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>shivamee1997@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl md:text-4xl font-heading font-bold text-dark dark:text-cream mb-2">
                  {stat.value}
                </h4>
                <p className="text-muted dark:text-muted-light font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
