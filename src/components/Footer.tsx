import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">NMCOE</span>
            </div>
            <p className="text-gray-300">
              Empowering students with quality education and innovative learning experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#academics" className="text-gray-300 hover:text-white">Academics</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-white">Facilities</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <p className="text-gray-300">P-60, MIDC,<br />Ahmednagar-414111,<br />Maharashtra, India</p>
            <p className="text-gray-300 mt-2">Phone: +91 241 2778164</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} NMCOE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;