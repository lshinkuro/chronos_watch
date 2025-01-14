import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiAward, FiShoppingBag } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">Timeless Elegance</h1>
            <p className="text-xl text-gray-600 mb-8">Discover our collection of luxury timepieces</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FiClock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Swiss Precision</h3>
              <p className="text-gray-600">Crafted with meticulous attention to detail</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <FiAward className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">Quality guaranteed for generations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <FiShoppingBag className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Worldwide Shipping</h3>
              <p className="text-gray-600">Free delivery to your doorstep</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <img
                    src={`https://asset.kompas.com/crops/91Xrfu4yb1Fou8InugFoFH5lc0g=/96x32:896x565/750x500/data/photo/2021/04/23/60829fea28f0d.jpg`}
                    alt="Watch"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Watch {item}</h3>
                  <p className="text-gray-600 mb-4">Classic design meets modern innovation</p>
                  <button className="bg-black text-white px-6 py-2 rounded-full">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;