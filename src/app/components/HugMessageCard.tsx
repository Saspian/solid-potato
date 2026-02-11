import { motion } from 'motion/react';

interface MessageCardProps {
  message: string;
  delay: number;
  isMobile?: boolean;
}

export function HugMessageCard({ message, delay, isMobile = false }: MessageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`${
        isMobile 
          ? 'bg-white/70 backdrop-blur-md p-5 rounded-2xl' 
          : 'bg-white/60 backdrop-blur-md p-7 rounded-3xl'
      } shadow-soft border border-white/60`}
    >
      <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-700 font-light leading-relaxed italic`}>
        "{message}"
      </p>
    </motion.div>
  );
}