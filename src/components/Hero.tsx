import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-secondary-950/40 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://player.vimeo.com/external/538379920.sd.mp4?s=c03fc0c2c4cc0e03d9333cdbd5377eecc5e5ade1&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full px-4 flex flex-col justify-center items-center text-center"
       style={{
   backgroundImage: "url('src/assets/Images/IMG_2664.PNG')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "1.5rem 1rem",
    color: "#fff",
    boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
  }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-black mb-4 leading-tight"
 
>
            Authentic <span className="text-primary-300">Thekua</span> from the Heart of Mithila
          </h1>
          <p className="text-lg md:text-xl text-orange-500 mb-8 max-w-2xl mx-auto">
  Traditional Thekua made with premium ingredients and recipes passed down through generations
</p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#products"
              className="px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-lg font-medium"
            >
              Order Thekua Now
            </a>
            <a
              href="#heritage"
              className="px-8 py-3 border-2 border-black text-black mb-8 rounded-md hover:bg-black/10 transition-colors text-lg font-medium"
            >
              Our Story
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center">
            <p className="text-black mb-2">Discover authentic taste</p>
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-black rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;