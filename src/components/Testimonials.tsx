import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  // name: string;
  // location: string;
  comment: string;
  // image: string;
  // rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    // name: 'Priya Sharma',
    // location: 'Delhi',
    comment: 'The Thekua reminded me of my childhood in Bihar. The authentic taste brought back so many memories of my grandmother\'s kitchen. Absolutely perfect!',
    // image: '',
    // rating: 5,
  },
  {
    id: 2,
    // name: 'Rajesh Kumar',
    // location: 'Mumbai',
    comment: 'I was skeptical about ordering traditional Bihari Thekua online, but these exceeded my expectations. The taste is exactly like what my mother used to make!',
    // image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // rating: 5,
  },
  {
    id: 3,
    // name: 'Anita Gupta',
    // location: 'Patna',
    comment: 'Being from Bihar, I\'m very particular about my Thekua. These are as authentic as they get - just like my grandmother used to make for Chhath Puja!',
    // image: 'https://images.pexels.com/photos/1181579/pexels-photo-1181579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-grain bg-cover bg-fixed">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-900 mb-4">
            What Our Customers <span className="text-primary-600">Say</span>
          </h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who have experienced the authentic taste of our traditional Thekua.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.904-2.97.824-1.04 1.757-1.637 2.807-1.82-.15.02-.407.2-.407.2-1.16.46-2.07 1.232-2.75 2.298-.62.97-.92 2.006-.92 3.105 0 1.183.437 2.145 1.31 2.886.88.74 1.903 1.11 3.062 1.11.566 0 1.07-.146 1.527-.438.272-.174.456-.354.615-.61.16-.254.24-.597.24-1.02 0-.16-.03-.352-.087-.567-.108-.41-.248-.76-.426-1.05z"></path>
                    <path d="M17.704 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.073-.13-1.54-.022-.16-.94.077-1.926.904-2.97.82-1.04 1.756-1.637 2.807-1.82-.156.02-.406.2-.406.2-1.16.46-2.07 1.232-2.75 2.298-.62.97-.916 2.005-.916 3.105 0 1.183.435 2.145 1.305 2.886.87.74 1.898 1.11 3.062 1.11.57 0 1.07-.146 1.53-.438.274-.174.455-.354.62-.61.16-.254.24-.597.24-1.02 0-.17-.037-.35-.095-.57-.1-.39-.24-.74-.416-1.02z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-secondary-700 mb-6 italic">"{testimonial.comment}"</p>
                
                {/* <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-secondary-900">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-600">{testimonial.location}</p>
                  </div>
                </div>
                 */}
                {/* <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      // className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary-500' : 'text-secondary-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#order"
            className="inline-block px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-lg font-medium"
          >
            Order Your Thekua Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;