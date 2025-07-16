import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import thekuaImage from '../assets/Images/1.jpg';


const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-grain bg-cover bg-fixed">
      <div 
        className="container mx-auto px-4"
        ref={ref}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-900 mb-4">
              The Art of Making <span className="text-primary-600">Thekua</span>
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md"
            >
              <p className="text-lg text-secondary-800 mb-4 leading-relaxed">
                In the heart of Bihar, where traditions are treasured and flavors are revered, we bring you authentic Thekua - the crown jewel of Mithila delicacies.
              </p>
              <p className="text-lg text-secondary-800 mb-4 leading-relaxed">
                Our journey began in a small village kitchen, where our founder's grandmother would prepare these delightful sweet treats following age-old recipes passed down through generations.
              </p>
              <p className="text-lg text-secondary-800 mb-4 leading-relaxed">
                Each Thekua is carefully handcrafted using premium wheat flour, pure jaggery, and aromatic ghee, creating the perfect balance of sweetness and texture that has made this delicacy beloved across Bihar and beyond.
              </p>
              <div className="mt-6">
                <a
                  href="#heritage"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn more about our heritage
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <img
                src={thekuaImage}
                alt="Traditional Thekua making in Mithila"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute bottom-4 left-4 bg-primary-500 text-white py-2 px-4 rounded-md font-serif">
                <p className="text-lg font-medium">Authentic Thekua</p>
                <p className="text-sm">Pure Mithila Taste</p>
              </div>
            </motion.div>
          </div>

          {/* Thekua Making Process */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-serif font-semibold text-secondary-900 mb-8 text-center">
              Our Traditional Making Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary-600">1</span>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Premium Ingredients</h4>
                <p className="text-secondary-700">
                  We start with the finest wheat flour, pure jaggery, and aromatic ghee, sourced locally from trusted farmers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary-600">2</span>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Traditional Mixing</h4>
                <p className="text-secondary-700">
                  The dough is prepared using traditional techniques, ensuring the perfect consistency and flavor balance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary-600">3</span>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Handcrafted Perfection</h4>
                <p className="text-secondary-700">
                  Each Thekua is carefully shaped by hand and cooked to golden perfection using traditional methods.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;