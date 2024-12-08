import React from 'react';
import { BookOpen, Users, Trophy, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { icon: BookOpen, value: "40+ Years", label: "of Excellence" },
    { icon: Users, value: "5000+", label: "Students" },
    { icon: Trophy, value: "100+", label: "Awards" },
    { icon: Building2, value: "6", label: "Departments" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          About NMCOE
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Our Legacy</h3>
            <p className="text-gray-600 leading-relaxed">
              Established in 1983, NMCOE has been at the forefront of engineering education in Maharashtra.
              With state-of-the-art facilities and experienced faculty, we prepare students for successful
              careers in engineering and technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto text-green-600 mb-3" />
                <h4 className="font-semibold">{stat.value}</h4>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
         ``   ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;