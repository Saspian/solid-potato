import { motion } from "motion/react";

interface FinalButtonsProps {
  onYes: () => void;
  onNo: () => void;
}

export function FinalButtons({ onYes, onNo }: FinalButtonsProps) {
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
          className="text-2xl md:text-3xl text-warm-brown text-center leading-relaxed font-medium mb-8"
        >
          Will you accept this teddy from me? 🧸💗
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 182, 198, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            data-umami-event="teddy_yes"
            className="bg-soft-pink text-warm-brown px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-blush transition-colors duration-300 min-w-[200px] cursor-pointer"
          >
            Yes, I will 💝
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(196, 153, 123, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onNo}
            data-umami-event="teddy_no"
            className="bg-white/60 text-warm-brown px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-white/80 transition-colors duration-300 min-w-[200px] border-2 border-warm-brown/20 cursor-pointer"
          >
            No, it's too cute 🥰
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
