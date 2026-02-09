import { motion, AnimatePresence } from "motion/react";
import { Gift, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export function UnwrapChocolate() {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  const sweetMessages = [
    "You're sweeter than any chocolate! 🍫",
    "Every moment with you is as delightful as the finest chocolate 💖",
    "You make my life so much sweeter! ✨",
    "You're the sweetest treat in my life 🍬",
    "My love for you is infinite, just like my love for chocolate... but you're better! 💕",
  ];

  const randomMessage =
    sweetMessages[Math.floor(Math.random() * sweetMessages.length)];

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <AnimatePresence mode="wait">
        {!isUnwrapped ? (
          <motion.div
            key="wrapped"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.button
              onClick={() => setIsUnwrapped(true)}
              className="relative bg-gradient-to-br from-amber-700 to-amber-900 text-white px-8 py-6 rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="flex items-center gap-3">
                <Gift className="w-8 h-8" />
                <span className="text-xl font-semibold">
                  Unwrap Your Chocolate
                </span>
              </div>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              </motion.div>
            </motion.button>
            <p className="text-amber-900/60 text-sm">
              Click to unwrap a sweet surprise! 🎁
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="unwrapped"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.5,
            }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 rounded-3xl shadow-xl border-4 border-pink-300 max-w-md"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
              </motion.div>
              <p className="text-xl text-center text-amber-900 font-medium leading-relaxed">
                {randomMessage}
              </p>
              <motion.button
                onClick={() => setIsUnwrapped(false)}
                className="mt-4 text-pink-600 hover:text-pink-700 underline text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Wrap it back up
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
