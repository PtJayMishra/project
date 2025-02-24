import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">Paryatana</span>
            </Link>
            <p className="text-gray-400">
              Empowering businesses with innovative digital solutions that drive growth and success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">SEO Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Website Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400"> Maple tree Bhopal</li>
              <li className="text-gray-400"> Madhya Pradesh 462033</li>
              <li className="text-gray-400">contact@paryatana.com</li>
              <li className="text-gray-400"> +91 8223902584</li>
            </ul>
            <div className="flex space-x-4 mt-4">
             
              <a href="https://x.com/0xJayMishra" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/jay-mishra-21b17b200/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/PtJayMishra" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paryatana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;