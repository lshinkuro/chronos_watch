import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiAward, FiShoppingBag } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const features = [
  {
    icon: <FiClock className="w-12 h-12 mx-auto mb-4 text-indigo-600" />,
    title: "Swiss Precision",
    description: "Crafted with meticulous attention to detail",
  },
  {
    icon: <FiAward className="w-12 h-12 mx-auto mb-4 text-indigo-600" />,
    title: "Lifetime Warranty",
    description: "Quality guaranteed for generations",
  },
  {
    icon: <FiShoppingBag className="w-12 h-12 mx-auto mb-4 text-indigo-600" />,
    title: "Worldwide Shipping",
    description: "Free delivery to your doorstep",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Luxury Watch 1",
    image: "https://asset.kompas.com/crops/91Xrfu4yb1Fou8InugFoFH5lc0g=/96x32:896x565/750x500/data/photo/2021/04/23/60829fea28f0d.jpg",
    description: "Classic design meets modern innovation",
  },
  {
    id: 2,
    name: "Luxury Watch 2",
    image: "https://asset.kompas.com/crops/91Xrfu4yb1Fou8InugFoFH5lc0g=/96x32:896x565/750x500/data/photo/2021/04/23/60829fea28f0d.jpg",
    description: "Classic design meets modern innovation",
  },
  {
    id: 3,
    name: "Luxury Watch 3",
    image: "https://asset.kompas.com/crops/91Xrfu4yb1Fou8InugFoFH5lc0g=/96x32:896x565/750x500/data/photo/2021/04/23/60829fea28f0d.jpg",
    description: "Classic design meets modern innovation",
  },
];

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

   {/* Hero Section */}
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1634595947394-87012e7b12ba?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="container mx-auto px-6 py-20 text-center bg-black bg-opacity-50 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover our collection of luxury timepieces
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </div>
    </section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                {feature.icon}
                <h3 className="text-lg font-semibold mb-2 text-indigo-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-700">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-700">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md">
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
