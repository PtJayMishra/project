import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Paryatana</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Portfolio</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</Link>
            <Link to="/consultation" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Home</Link>
              <Link to="/services" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Services</Link>
              <Link to="/portfolio" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Portfolio</Link>
              <Link to="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">About</Link>
              <Link to="/blog" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Blog</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</Link>
              <Link to="/consultation" className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;