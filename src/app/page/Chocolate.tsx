import { motion } from "motion/react";
import { Heart, Sparkles, Gift } from "lucide-react";
import { FallingChocolates } from "../components/FallingChocolates";
import { UnwrapChocolate } from "../components/UnwrapChocolate";

export default function Chocolate() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 overflow-x-hidden">
      <FallingChocolates />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
            className="text-center"
          >
            {/* Decorative hearts */}
            <div className="flex justify-center gap-4 mb-6">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-8 h-8 md:w-12 md:h-12 text-pink-400 fill-pink-400" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-amber-600 fill-amber-600" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <Heart className="w-8 h-8 md:w-12 md:h-12 text-pink-400 fill-pink-400" />
              </motion.div>
            </div>

            {/* Main heading */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Happy Chocolate Day
            </motion.h1>

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-5xl font-semibold text-pink-600 mb-8"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              My Love! 💖
            </motion.h2>

            {/* Chocolate image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <img
                src="/IMG_0132.jpg"
                alt="Chocolate hearts"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-8 border-white mx-auto"
              />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-amber-700 text-sm"
            >
              ↓ Scroll down for more sweetness ↓
            </motion.div>
          </motion.div>
        </section>

        {/* Message Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-amber-200"
            >
              {/* Decorative header */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-pink-400" />
                <div className="w-3 h-3 rounded-full bg-amber-600" />
                <div className="w-3 h-3 rounded-full bg-rose-400" />
              </div>

              <h3
                className="text-3xl md:text-4xl text-center text-amber-900 mb-8"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                A Sweet Message for You
              </h3>

              <div className="space-y-4 text-lg md:text-xl text-amber-900/90 leading-relaxed">
                <p>My Dearest Love,</p>

                <p>
                  On this Chocolate Day, I wanted to remind you that you're
                  sweeter than any chocolate in the world. Every moment with you
                  feels like unwrapping a precious gift, discovering new reasons
                  to fall in love with you all over again. 😊
                </p>

                <p>
                  Just like chocolate brings joy and warmth, you bring light and
                  happiness into my life. Nothing is sweeter to me than your smile. Your laughter is more delightful than any candy, and
                  your love more satisfying than all the chocolates in the world
                  combined. ☺️
                </p>

                <p>
                  Thank you for being my sweetest blessing, my daily dose of
                  happiness, and the most wonderful person I've ever known. You
                  make every day feel like a celebration! 💖
                </p>

                <p className="text-center mt-8 text-2xl text-pink-600">
                  You know I don't love sweet things, but you are an exception 💕
                </p>

                <p className="text-right italic">With all my love, forever yours</p>
              </div>

              {/* Decorative footer */}
              <div className="flex justify-center gap-3 mt-8">
                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image/GIF Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-100/50 to-amber-100/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3
              className="text-3xl md:text-4xl text-amber-900 mb-8"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Sweet Treats for My Sweetheart
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src="chocolate.png"
                  alt="Sweet chocolates"
                  className="w-full h-80 object-cover rounded-3xl shadow-xl border-4 border-white"
                />
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                </motion.div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl shadow-xl border-4 border-white p-8"
              >
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Gift className="w-24 h-24 text-amber-800 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-2xl text-amber-900 font-semibold">
                    You're my most favorite treat! 🍫
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Interactive Feature Section */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl text-amber-900 mb-8"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              A Special Surprise Just for You
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-umami-event="chocolate_unwrap"
            >
              <UnwrapChocolate />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex justify-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0,
                }}
              >
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.3,
                }}
              >
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.6,
                }}
              >
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </motion.div>
            </div>

            <p className="text-xl text-amber-900">
              Happy Chocolate Day, My Sweetheart! 🍫
            </p>
            <p className="text-amber-700">Made with love, just for you 💖</p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
