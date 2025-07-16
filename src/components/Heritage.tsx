import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../assets/Images/2.jpg';

const Heritage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="heritage" className="py-20 bg-terracotta-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-900 mb-4">
            The Heritage of <span className="text-primary-600">Thekua</span>
          </h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Preserving the ancient tradition of Thekua making and passing down the authentic flavors of Mithila from one generation to the next.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={Image}
                alt="Traditional Thekua making methods"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-earthen-700 rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-semibold text-secondary-900 mb-4">
              Five Generations of Thekua Excellence
            </h3>
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              The Thekua recipes we use today have been passed down through five generations, preserving the authentic taste and traditional cooking methods that make this Mithila delicacy so special.
            </p>
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              Our journey began in the small village kitchens of Bihar, where our great-great-grandmother would prepare these delicious sweet treats with love and precision, using locally sourced ingredients and traditional clay ovens.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-secondary-900 mb-1">Ancient Clay Ovens</h4>
                  <p className="text-secondary-700">
                    We still use traditional clay ovens (chulha) to cook our Thekua, ensuring that the authentic smoky flavor is preserved in every bite.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-secondary-900 mb-1">Pure Local Ingredients</h4>
                  <p className="text-secondary-700">
                    All our ingredients are sourced locally from small farms in Bihar, supporting local communities and ensuring the freshest quality.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-secondary-900 mb-1">Sacred Family Recipe</h4>
                  <p className="text-secondary-700">
                    Our secret family recipe has been carefully guarded and passed down through generations, with each adding their touch while preserving the core essence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-bl-full -z-10"></div>
            
            <h3 className="text-2xl font-serif font-semibold text-secondary-900 mb-6 text-center">
              The Cultural Significance of Thekua
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-earthen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-earthen-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Festival Essential</h4>
                <p className="text-secondary-700">
                  Thekua is an integral part of Chhath Puja and other festivals in Bihar, symbolizing devotion and tradition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Symbol of Love</h4>
                <p className="text-secondary-700">
                  Traditionally prepared by mothers and grandmothers, Thekua represents the love and care of family bonds.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-terracotta-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Global Recognition</h4>
                <p className="text-secondary-700">
                  We're proud to bring this authentic Bihar delicacy to food lovers across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;