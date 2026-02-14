import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";

export default function Valentine() {
  const [response, setResponse] = useState<"yes" | "no" | null>(null);
  const [hearts, setHearts] = useState<number[]>([]);
  const navigate = useNavigate();

  const yesMessages = [
    "You just made my heart the happiest.",
    "I can't wait to make more memories with you.",
    "This is the best Valentine's gift ever.",
    "Happy Valentine’s Day to the woman who owns my heart.",
    "Every day with you is my favorite love story.",
    "You’re my wife, my heart, my forever.",
    "Distance can’t weaken what I feel for you.",
    "My heart feels safest with you.",
    "I fall for you a little more every day.",
    "Being yours is my favorite thing.",
    "You’re the love I prayed for.",
  ];

  const noMessages = [
    "I'll keep trying until you smile.",
    "Okay… but you're still my favorite person.",
    "That just means I'll love you even more.",
    "I’d still choose you, in every lifetime.",
    "No matter what, my heart is yours.",
    "But You are, and always will be, my greatest blessing.",
  ];

  const handleYes = () => {
    setResponse("yes");
    // Create multiple hearts for animation
    setHearts(Array.from({ length: 8 }, (_, i) => i));
  };

  const handleNo = () => {
    setResponse("no");
    // Create subtle hearts
    setHearts(Array.from({ length: 4 }, (_, i) => i));
  };

  const getMessage = () => {
    if (response === "yes") {
      return yesMessages[Math.floor(Math.random() * yesMessages.length)];
    } else if (response === "no") {
      return noMessages[Math.floor(Math.random() * noMessages.length)];
    }
    return null;
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background gradient */}
      <div
        className="fixed inset-0 -z-10 transition-all duration-1000"
        style={{
          background:
            response === "yes"
              ? "linear-gradient(135deg, #ffc1cc 0%, #ffb3c1 50%, #ffa5b8 100%)"
              : "linear-gradient(135deg, #ffe5ec 0%, #ffd4e0 50%, #ffc1d4 100%)",
        }}
      />

      {/* Floating background hearts (very subtle) */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-heart-${i}`}
            className="absolute text-pink-200/20 text-6xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Animated hearts on button click */}
      <AnimatePresence>
        {hearts.map((id) => (
          <motion.div
            key={`heart-${id}-${Date.now()}`}
            className="fixed text-4xl pointer-events-none"
            style={{
              left: `${50 + (Math.random() - 0.5) * 60}%`,
              top: "50%",
            }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
              y: -200,
              x: (Math.random() - 0.5) * 100,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setHearts((prev) => prev.filter((h) => h !== id));
            }}
          >
            {response === "yes" ? "💖" : "💕"}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main content */}
      <div className="max-w-5xl w-full text-center space-y-12">
        {/* Top Heading */}
        <motion.h1
          className="text-6xl md:text-8xl text-red-600"
          style={{ fontFamily: "Pacifico, cursive" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Happy Valentine's Day Babe
        </motion.h1>

        {/* Main Question or Response */}
        <AnimatePresence mode="wait">
          {!response ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2
                className="text-4xl md:text-5xl text-rose-900"
                style={{ fontFamily: "Lora, serif" }}
              >
                Will you be my Valentine?
              </h2>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <motion.button
                  onClick={handleYes}
                  data-umami-event="final-yes"
                  className="px-10 py-4 rounded-full text-white text-xl font-medium shadow-lg min-w-[200px] cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Yes 💖
                </motion.button>

                <motion.button
                  onClick={handleNo}
                  data-umami-event="final-no"
                  className="px-10 py-4 rounded-full bg-white text-red-500 text-xl font-medium border-2 border-red-400 shadow-lg min-w-[200px] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  No 🙈
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                ...(response === "no" && {
                  rotate: [0, -2, 2, -2, 2, 0],
                }),
              }}
              transition={{
                duration: 0.5,
                rotate: {
                  duration: 0.5,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                },
              }}
              className="space-y-8"
            >
              <p
                className="text-3xl md:text-4xl text-rose-900 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Lora, serif" }}
              >
                {getMessage()}
              </p>

              <motion.button
                onClick={() => {
                  setResponse(null);
                  setHearts([]);
                }}
                className="px-8 py-3 rounded-full bg-white/80 text-rose-700 text-lg font-medium border border-rose-300 shadow-md cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Ask me again ✨
              </motion.button>
              {response !== "no" && (
                <motion.button
                  onClick={() => navigate("/kiss")}
                  className="px-8 py-3 ml-4 rounded-full bg-white/80 text-rose-700 text-lg font-medium border border-rose-300 shadow-md cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Send a kiss 💋
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
