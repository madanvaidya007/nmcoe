import React from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from './logo.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="NMCOE Logo" 
              className="h-12 w-12 "
            />
            <div className="text-sm md:text-base">
              <div className="font-bold">NMCOE Peth</div>
              <div className="text-xs text-green-200">Walwa, Sangli</div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Home</a>
              <a href="#about" className="hover:bg-green-700 px-3 py-2 rounded-md transition-colors">About</a>
              <a href="#academics" className="hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Academics</a>
              <a href="#facilities" className="hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Facilities</a>
              <a href="#placements" className="hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Placements</a>
              <a href="#contact" className="hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Home</a>
            <a href="#about" className="block hover:bg-green-700 px-3 py-2 rounded-md transition-colors">About</a>
            <a href="#academics" className="block hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Academics</a>
            <a href="#facilities" className="block hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Facilities</a>
            <a href="#placements" className="block hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Placements</a>
            <a href="#contact" className="block hover:bg-green-700 px-3 py-2 rounded-md transition-colors">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;