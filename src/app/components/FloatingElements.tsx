import { motion, AnimatePresence } from 'motion/react';

interface FloatingElementsProps {
  show: boolean;
}

export function FloatingElements({ show }: FloatingElementsProps) {
  const hearts = [
    { id: 1, x: '20%', delay: 0 },
    { id: 2, x: '40%', delay: 0.2 },
    { id: 3, x: '60%', delay: 0.4 },
    { id: 4, x: '80%', delay: 0.6 },
    { id: 5, x: '30%', delay: 0.3 },
    { id: 6, x: '70%', delay: 0.5 },
  ];

  return (
    <AnimatePresence>
      {show && hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed bottom-0 pointer-events-none z-50"
          style={{ left: heart.x }}
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{ 
            y: -window.innerHeight, 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.8],
            x: [0, (Math.random() - 0.5) * 100]
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            delay: heart.delay,
            ease: "easeOut"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M 20 12 C 20 8, 16 6, 13 8 C 10 10, 9 13, 11 16 C 13 19, 20 26, 20 26 C 20 26, 27 19, 29 16 C 31 13, 30 10, 27 8 C 24 6, 20 8, 20 12 Z"
              fill={['#ff6b9d', '#ff9eb3', '#ffc4d6', '#ef4444'][Math.floor(Math.random() * 4)]}
            />
          </svg>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
