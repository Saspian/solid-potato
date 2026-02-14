import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useHourlyCounter } from "../customHooks/useHourlyCounter";

interface Kiss {
  id: number;
  xOffset: number;
  drift: number;
  rotation: number;
}

export default function App() {
  const [kisses, setKisses] = useState<Kiss[]>([]);
  const [kissId, setKissId] = useState(0);
  const [totalKiss, setTotalKiss] = useState(0);
  const { count, resetCounter } = useHourlyCounter();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const localTotalKisses = localStorage.getItem("totalKiss");
    if (localTotalKisses) {
      setTotalKiss(+localTotalKisses);
    }
  }, []);

  // Play kiss sound from mp3 file
  const playKissSound = () => {
    const audio = new Audio("/kiss-t.mov"); // Place your mp3 file in the public folder
    audio.volume = 0.5; // Adjust volume (0.0 to 1.0)
    audio.play().catch((error) => {
      console.log("Audio play failed:", error);
    });
  };

  const sendKiss = () => {
    setIsClicked(true);
    // Play kiss sound
    playKissSound();

    // Create new kiss animation with random properties
    const newKiss: Kiss = {
      id: kissId,
      xOffset: Math.random() * 200 - 100, // Random horizontal offset (-100 to 100px)
      drift: Math.random() * 100 - 50, // Random horizontal drift during animation (-50 to 50px)
      rotation: Math.random() * 60, // Random rotation angle
    };
    setTotalKiss((prevKiss) => prevKiss + 1);
    localStorage.setItem("totalKiss", totalKiss.toString());
    setKisses([...kisses, newKiss]);
    setKissId(kissId + 1);

    // Remove kiss after animation completes
    setTimeout(() => {
      setKisses((prev) => prev.filter((k) => k.id !== newKiss.id));
      setIsClicked(false);
    }, 1500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#ffe5ec] via-[#ffc2d1] to-[#ffb3c6] flex items-center justify-center p-6">
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 text-[#c9184a]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              lineHeight: "1.2",
            }}
          >
            Happy Kiss Day, Babe 💋
          </motion.h1>

          <div className="relative inline-block">
            {/* Big Kiss Animation On Top of Button */}
            <AnimatePresence>
              {kisses.map((kiss) => (
                <motion.div
                  key={kiss.id}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: kiss.xOffset,
                    y: 0,
                    rotate: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.5, 1.2, 0.8],
                    x: kiss.xOffset + kiss.drift,
                    y: -160,
                    rotate: kiss.rotation,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
                  style={{
                    fontSize: "7rem",
                  }}
                >
                  💋
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(255, 56, 92, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={sendKiss}
              className="px-12 py-4 bg-gradient-to-r from-[#ff758f] to-[#ff385c] text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                fontWeight: 500,
                letterSpacing: "0.025em",
              }}
              data-umami-event="kiss-sent"
            >
              Send a Kiss
            </motion.button>
            {isClicked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
              >
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600 whitespace-nowrap">
                    Tap button multiple time to send more kisses
                  </p>
                </div>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="text-center space-y-2">
                <p className="text-sm text-[#f21b42] whitespace-nowrap font-extrabold">
                  You kissed Sanjay {localStorage.getItem("totalKiss") ?? 0}{" "}
                  time
                </p>
                <p className="text-sm text-[#f21b42] whitespace-nowrap font-extrabold">
                  Sanjay kissed you {count ?? 0} time
                </p>
              </div>
            </motion.div>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
