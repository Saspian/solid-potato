import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
// import styles from "../../styles/Promise.module.css";

export default function PromisePage() {
  return (
    <div className="promise-body min-h-screen bg-[#f7f4f0] relative overflow-hidden">
      {/* Soft background gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#f0e5dd]/40 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#ede8e3]/50 to-transparent blur-3xl" />
      
      <div className="relative">
        {/* Hero Section - Asymmetric Layout */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="md:col-span-3 lg:col-span-4 h-[300px] md:h-[600px]"
            >
              <ImageWithFallback
                src="S+S Pre-shoot-110.jpeg"
                alt="Soft morning light"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            {/* Main content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:col-span-9 lg:col-span-8"
            >
              <div className="max-w-3xl">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 text-[#3d3936] leading-[1.2]"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  I know this feels wrong
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="relative"
                >
                  {/* Decorative accent line */}
                  <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d9bfb3]/30 via-[#d9bfb3]/60 to-transparent hidden md:block" />
                  
                  <div className="space-y-6 md:space-y-8 text-[#5a5654] text-lg md:text-xl lg:text-2xl leading-relaxed">
                    <p>
                      I know that celebrating <b><i>Promise Day</i></b> doesn't feel right, right now because I let you down on the most important one.
                    </p>
                    <p>
                      I'm still not asking for immediate forgiveness. I just want you to know I haven't forgot what I broke and I'm not ignoring your feelings.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Divider Section */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="container mx-auto px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 items-center py-12">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-[#d4c4b8]" />
            <div className="flex justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d9bfb3] opacity-50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#d9bfb3] opacity-70" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#d9bfb3] opacity-50" />
            </div>
            <div className="h-[1px] bg-gradient-to-r from-[#d4c4b8] to-transparent" />
          </div>
        </motion.div>

        {/* Listening Section - Reverse Asymmetric Layout */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Image - Shows first on mobile, last on desktop */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 2.5 }}
              className="md:col-span-3 lg:col-span-4 md:order-1 h-[300px] md:h-[600px]"
            >
              <ImageWithFallback
                src="IMG_0249.jpg"
                alt="Gentle texture"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* Main content - Shows after image on mobile, before on desktop */}
            <div className="md:col-span-9 lg:col-span-8 md:order-2">
              <div className="max-w-3xl md:ml-auto">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 md:mb-12 text-[#3d3936] leading-[1.2] md:text-right"
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  What I can promise now
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.3 }}
                  className="relative"
                >
                  {/* Decorative accent line on right */}
                  <div className="absolute -right-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d9bfb3]/30 via-[#d9bfb3]/60 to-transparent hidden md:block" />
                  
                  <div className="text-[#5a5654] text-lg md:text-xl lg:text-2xl leading-relaxed md:pr-6 md:text-right">
                    <p>
                      I promise to listen to everything you need to say about how I hurt you, without explaining or defending myself.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        {/* <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="pb-16 px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative py-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4c4b8] to-transparent" />
              
              <div className="text-center mt-8">
                <p className="text-[#8a8481] text-base md:text-lg leading-relaxed opacity-70 italic" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Take all the time you need. I'm here when you're ready.
                </p>
              </div>
            </div>
          </div>
        </motion.footer> */}
      </div>
    </div>
  );
}