import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send, Mail, Phone, Linkedin, MapPin, Loader2 } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shivamee1997@gmail.com',
      href: 'mailto:shivamee1997@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7992206945',
      href: 'tel:+917992206945',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/shivam-kumar-ab53b4193/',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      href: null,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS Configuration
      // Replace these with your actual EmailJS credentials:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
      // 4. Get your Service ID, Template ID, and Public Key
      
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS Public Key
      );

      if (result.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 5000,
          icon: '🎉',
          style: {
            background: '#1A1714',
            color: '#F9F6F1',
          },
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email me directly.', {
        duration: 5000,
        style: {
          background: '#1A1714',
          color: '#F9F6F1',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-cream dark:bg-dark-500">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s build something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Side - Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark dark:text-cream mb-6">
              Let&apos;s build something with{' '}
              <span className="text-primary">AI</span>
            </h3>
            <p className="text-lg text-muted dark:text-muted-light mb-8 leading-relaxed">
              I&apos;m always excited to work on innovative AI projects. Whether you need
              an intelligent automation solution, an LLM-powered application, or want
              to explore the possibilities of Generative AI, I&apos;d love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-dark-400 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                        <info.icon className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted dark:text-muted-light">
                          {info.label}
                        </p>
                        <p className="font-medium text-dark dark:text-cream">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-dark-400 rounded-xl shadow-md">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted dark:text-muted-light">
                          {info.label}
                        </p>
                        <p className="font-medium text-dark dark:text-cream">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div variants={itemVariants}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card space-y-6"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark dark:text-cream mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-cream dark:bg-dark-300 border-2 border-cream-300 dark:border-dark-200 rounded-xl 
                           text-dark dark:text-cream placeholder-muted dark:placeholder-muted-light
                           focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark dark:text-cream mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-cream dark:bg-dark-300 border-2 border-cream-300 dark:border-dark-200 rounded-xl 
                           text-dark dark:text-cream placeholder-muted dark:placeholder-muted-light
                           focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark dark:text-cream mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-cream dark:bg-dark-300 border-2 border-cream-300 dark:border-dark-200 rounded-xl 
                           text-dark dark:text-cream placeholder-muted dark:placeholder-muted-light
                           focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-sm text-center text-muted dark:text-muted-light">
                I typically respond within 24-48 hours
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
