import { motion } from 'motion/react';

interface MessageCardProps {
  message: string;
  onClick: () => void;
  showContinue: boolean;
}

export function MessageCard({ message, onClick, showContinue }: MessageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <div className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-warm-brown text-center leading-relaxed font-light"
        >
          {message}
        </motion.p>

        {showContinue && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onClick}
            className="mt-8 mx-auto block bg-soft-pink text-warm-brown px-6 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-blush cursor-pointer"
          >
            Continue 💗
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
