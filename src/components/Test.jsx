import React from 'react';
import { motion } from 'framer-motion';

const items = ['one', 'two', 'three'];

function Test() {
  const itemVariants = {
    initial: { x: '-100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <ul>
      {items.map((item, i) => (
        <motion.li
          variants={itemVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3, delay: i * 0.8 }}
        >
          {i}
        </motion.li>
      ))}
    </ul>
  );
}

export default Test;
