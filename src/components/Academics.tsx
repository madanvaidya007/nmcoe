import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Computer Engineering',
    description: 'Focus on software development, algorithms, and computer systems.',
    duration: '4 Years',
    seats: 120
  },
  {
    title: 'Mechanical Engineering',
    description: 'Study of machinery, thermodynamics, and manufacturing processes.',
    duration: '4 Years',
    seats: 120
  },
  {
    title: 'Civil Engineering',
    description: 'Design and construction of infrastructure and buildings.',
    duration: '4 Years',
    seats: 60
  },
  {
    title: 'Electronics Engineering',
    description: 'Study of electronic systems and communication technology.',
    duration: '4 Years',
    seats: 60
  }
];

const Academics = () => {
  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Academic Programs
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Duration: {program.duration}</p>
                <p className="text-sm text-gray-500">Available Seats: {program.seats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;