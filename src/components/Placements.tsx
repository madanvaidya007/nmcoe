import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';

const Placements = () => {
  const stats = [
    { icon: Building2, value: "100+", label: "Recruiting Companies" },
    { icon: Users, value: "85%", label: "Placement Rate" },
    { icon: TrendingUp, value: "12 LPA", label: "Highest Package" },
    { icon: Award, value: "250+", label: "Students Placed" }
  ];

  return (
    <section id="placements" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Placement Highlights
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Placement Report
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Placements;