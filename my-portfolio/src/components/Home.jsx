import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Stella Impuhwe
      </motion.h1>
      <motion.p 
        className="text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A motivated software developer specializing in JavaScript, Node.js, Express.js, and React.js.
      </motion.p>
    </section>
  );
};

export default Home;
