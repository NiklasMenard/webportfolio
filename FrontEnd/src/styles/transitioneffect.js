import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1 },
  },
  exit: {
    transition: { delay: 0, duration: 1 },
  },
};

const TransitionEffect = ({ children }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {children}
  </motion.div>

);

TransitionEffect.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TransitionEffect;
