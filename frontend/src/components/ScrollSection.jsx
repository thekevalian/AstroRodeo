import { motion } from 'framer-motion';

const ScrollSection = ({ children }) => {
  return (
    <motion.section
      className="scroll-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
