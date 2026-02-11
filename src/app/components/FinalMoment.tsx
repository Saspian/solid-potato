import { motion } from 'motion/react';
import { useState } from 'react';

interface FinalMomentProps {
  isMobile?: boolean;
}

export function FinalMoment({ isMobile = false }: FinalMomentProps) {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <div className="space-y-6">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-playfair text-gray-800 leading-tight`}>
          Can I keep hugging you forever? <span className="text-pink-300">🤍</span>
        </h2>
      </div>

      {!response && (
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
          <motion.button
            onClick={() => setResponse('always')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`${
              isMobile ? 'w-full' : 'flex-1'
            } px-10 py-5 bg-pink-300 hover:bg-pink-400 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-medium animate-heartbeat`}
          >
            Yes, always 💕
          </motion.button>
          
          <motion.button
            onClick={() => setResponse('closer')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`${
              isMobile ? 'w-full' : 'flex-1'
            } px-10 py-5 bg-purple-200 hover:bg-purple-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-medium`}
          >
            Come closer 🤗
          </motion.button>
        </div>
      )}

      {response === 'always' && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 p-10 rounded-3xl shadow-soft border border-white/60"
        >
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-800 font-light leading-relaxed text-center`}>
            Then I'll hold you through every sunrise, every storm, and every quiet moment in between. 
            You're safe here. Always. 🤍
          </p>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl text-center mt-8"
          >
            💕
          </motion.div>
        </motion.div>
      )}

      {response === 'closer' && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 p-10 rounded-3xl shadow-soft border border-white/60"
        >
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-800 font-light leading-relaxed text-center`}>
            There's no such thing as too close when it comes to you. 
            Let me be your warmth on cold days, your calm in chaos. 🫂
          </p>
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl text-center mt-8"
          >
            🤗
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}