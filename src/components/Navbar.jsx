import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            CHRONOS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Collection', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {['Home', 'Collection', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;