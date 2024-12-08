import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <ImageSlider />
      
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Nanasaheb Mahadik College of Engineering
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-green-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Shaping Tomorrow's Engineers Today
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Virtual Tour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;