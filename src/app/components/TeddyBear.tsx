import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeddyBearProps {
  onClick: () => void;
  clickCount: number;
}

export function TeddyBear({ onClick, clickCount }: TeddyBearProps) {
  const [showHearts, setShowHearts] = useState(false);

  const handleClick = () => {
    onClick();
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1000);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Pop-out hearts on click */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`${clickCount}-${i}`}
              className="absolute top-1/2 left-1/2"
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 100,
                y: Math.sin((i * Math.PI * 2) / 8) * 100,
                opacity: 0,
                scale: 1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heart className="text-blush" size={24} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Teddy Bear Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={showHearts ? { 
          y: [0, -20, 0],
          rotate: [0, -5, 5, -5, 0]
        } : {}}
        transition={{ duration: 0.6 }}
        onClick={handleClick}
        className="cursor-pointer relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/30 p-4 md:p-8">
          <ImageWithFallback
            src="/168724_2.jpg"
            alt="Cute teddy bear"
            className="w-full h-auto max-w-md mx-auto rounded-2xl"
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-soft-pink/20 to-transparent rounded-3xl pointer-events-none" />
        </div>

        {/* Sparkles */}
        <motion.div
          className="absolute -top-2 -right-2 text-4xl"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -bottom-2 -left-2 text-3xl"
          animate={{ 
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          💖
        </motion.div>
      </motion.div>
    </div>
  );
}
