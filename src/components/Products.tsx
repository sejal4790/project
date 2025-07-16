import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../hooks/useProducts';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addItem } = useCart();
  const { products, loading, error } = useProducts();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      category: product.category,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-secondary-700">Loading our delicious Thekua...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Error loading products: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-900 mb-4">
            Authentic <span className="text-primary-600">Thekua</span>
          </h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Experience the traditional taste of Bihar with our handcrafted Thekua, made using age-old recipes and the finest ingredients.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category === 'all' ? 'All Varieties' : category}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-secondary-900">{product.name}</h3>
                  <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-secondary-700 mb-4 line-clamp-3">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-primary-600">₹{product.price}</span>
                  <button 
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-md hover:bg-secondary-200 transition-colors text-sm"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 px-3 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-sm font-medium"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="px-3 py-2 border border-primary-500 text-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm"
                    onClick={() => {
                      window.location.href = "#order";
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-semibold text-secondary-900 mb-6 text-center">
              Why Our Thekua is Special
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">100% Natural</h4>
                <p className="text-secondary-700">
                  Made with pure, natural ingredients without any artificial preservatives or additives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Traditional Recipe</h4>
                <p className="text-secondary-700">
                  Prepared using authentic recipes passed down through five generations of our family.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Made with Love</h4>
                <p className="text-secondary-700">
                  Each piece is handcrafted with care and attention to detail, ensuring perfect taste and quality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <img 
                src={selectedProduct.image_url} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center text-secondary-900 hover:bg-white transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-semibold text-secondary-900">{selectedProduct.name}</h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full">
                  {selectedProduct.category}
                </span>
              </div>
              <p className="text-lg text-secondary-700 mb-6">{selectedProduct.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Premium Ingredients:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedProduct.ingredients.map((ingredient: string, index: number) => (
                    <li key={index} className="flex items-center text-secondary-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary-600">₹{selectedProduct.price}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <a
                    href="#order"
                    className="px-6 py-2 border border-primary-500 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Products;