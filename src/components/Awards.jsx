import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, BadgeCheck, GraduationCap } from 'lucide-react';

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const awards = [
    {
      id: 1,
      title: 'Champ Award - FY24 Q2',
      organization: 'DXC Technology',
      image: '/FY24Q2_Champ_shivam.jpg',
    },
    {
      id: 2,
      title: 'Champ Award - FY24 Q4',
      organization: 'DXC Technology',
      image: '/FY24Q4_Champ_shivam.jpg',
    },
    {
      id: 3,
      title: 'Champ Award - FY25 H2',
      organization: 'DXC Technology',
      image: '/FY25H2_Champ_shivam_page-0001.jpg',
    },
    {
      id: 4,
      title: 'Champ Award - FY26 H1',
      organization: 'DXC Technology',
      image: '/FY26H1_Champ_shivam_page-0001.jpg',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Microsoft Azure Fundamentals',
      code: 'AZ-900',
      issuer: 'Microsoft',
      icon: '☁️',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Azure AI Engineer Associate',
      code: 'AI-102',
      issuer: 'Microsoft',
      icon: '🤖',
      color: 'bg-indigo-500',
    },
    {
      id: 3,
      title: 'OCI 2023 AI Foundation',
      code: '',
      issuer: 'Oracle',
      icon: '🔴',
      color: 'bg-red-500',
    },
    {
      id: 4,
      title: 'Python Basics',
      code: '',
      issuer: 'Udemy',
      icon: '🐍',
      color: 'bg-green-500',
    },
    {
      id: 5,
      title: 'Automation with Python',
      code: '',
      issuer: 'Udemy',
      icon: '⚙️',
      color: 'bg-purple-500',
    },
    {
      id: 6,
      title: 'LangChain in Action',
      code: '',
      issuer: 'Udemy',
      icon: '🔗',
      color: 'bg-primary',
    },
    {
      id: 7,
      title: 'QuickStart: LangChain Essentials',
      code: '',
      issuer: 'Python',
      icon: '🚀',
      color: 'bg-cyan-500',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="awards" className="section-padding bg-white dark:bg-dark-400">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Awards & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Recognition and credentials that validate my expertise
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <Trophy className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-heading font-bold text-dark dark:text-cream">
              Awards
            </h3>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              4x Champ Award Winner
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <div className="card p-0 overflow-hidden">
                  {/* Award Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Trophy badge */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Award Info */}
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-dark-300 dark:to-dark-400">
                    <h4 className="font-heading font-bold text-dark dark:text-cream text-sm mb-1">
                      {award.title}
                    </h4>
                    <p className="text-muted dark:text-muted-light text-xs">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h3 className="text-2xl font-heading font-bold text-dark dark:text-cream">
              Certifications
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                custom={index}
              >
                <div className="card h-full flex items-start gap-4 group">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {cert.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-dark dark:text-cream text-sm leading-tight">
                        {cert.title}
                      </h4>
                      <BadgeCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    {cert.code && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-mono">
                        {cert.code}
                      </span>
                    )}
                    <p className="text-muted dark:text-muted-light text-xs mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
