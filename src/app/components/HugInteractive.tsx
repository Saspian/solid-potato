import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HugInteractiveProps {
  intensity: number;
  isMobile?: boolean;
  onHoldProgress?: (progress: number) => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export function HugInteractive({
  intensity,
  isMobile = false,
  onHoldProgress,
}: HugInteractiveProps) {
  const [holdProgress, setHoldProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const intervalRef = useRef<number | null>(null);
  const holdStartTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isPressed) {
      holdStartTimeRef.current = Date.now();
      intervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - holdStartTimeRef.current;
        const progress = Math.min((elapsed / 3000) * 100, 100);
        setHoldProgress(progress);
        onHoldProgress?.(progress);

        // Add particles as you hold
        if (progress < 100 && Math.random() > 0.7) {
          const newParticle: Particle = {
            id: Date.now() + Math.random(),
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 200,
            delay: Math.random() * 0.2,
          };
          setParticles((prev) => [...prev.slice(-8), newParticle]);
        }
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setHoldProgress(0);
      onHoldProgress?.(0);
      setParticles([]);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPressed, onHoldProgress]);

  const handleStart = () => {
    setIsPressed(true);
  };

  const handleEnd = () => {
    setIsPressed(false);
  };

  const scale = isMobile ? 0.6 : 1;
  const glowIntensity = Math.max(intensity * 60, holdProgress);
  const zoom = isPressed ? 1 + (holdProgress / 100) * 0.15 : 1;
  const imageScale = isPressed ? 1.05 : 1;

  return (
    <div
      className="relative cursor-pointer select-none touch-none"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      style={{
        transform: `scale(${zoom})`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Multi-layer glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        animate={{
          opacity: glowIntensity / 150,
          scale: 1 + (glowIntensity / 100) * 0.6,
        }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(circle, rgba(251, 207, 232, 1), rgba(221, 214, 254, 0.6))",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        animate={{
          opacity: glowIntensity / 100,
          scale: 1 + (glowIntensity / 100) * 0.4,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(251, 207, 232, 0.4))",
        }}
      />

      {/* Particle hearts */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: particle.x + (Math.random() - 0.5) * 50,
              y: particle.y - 60,
              opacity: [0, 1, 0],
              scale: [0, 1, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: particle.delay,
              ease: "easeOut",
            }}
            className="absolute text-2xl pointer-events-none top-1/2 left-1/2 z-50"
          >
            {["💕", "🤍", "💗", "✨"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Image Container */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: imageScale,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        style={{
          width: `${400 * scale}px`,
          height: `${450 * scale}px`,
        }}
      >
        {/* Image with rounded corners and shadow */}
        <motion.div
          className="w-full h-full rounded-3xl overflow-hidden shadow-2xl"
          animate={{
            boxShadow: isPressed
              ? "0 25px 50px -12px rgba(251, 207, 232, 0.5)"
              : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ImageWithFallback
            src="IMG_0181.JPG"
            alt="Hug Day Memory"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Breathing border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 20px rgba(251, 207, 232, 0.3)",
              "0 0 40px rgba(251, 207, 232, 0.5)",
              "0 0 20px rgba(251, 207, 232, 0.3)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating hearts around the image */}
        {intensity > 0.25 && (
          <>
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💕
            </motion.div>
            <motion.div
              className="absolute top-1/4 -left-12 text-2xl"
              animate={{
                x: [0, -5, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              🩷
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-12 text-2xl"
              animate={{
                x: [0, -5, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              💖
            </motion.div>
            <motion.div
              className="absolute top-1/4 -right-12 text-2xl"
              animate={{
                x: [0, 5, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              💗
            </motion.div>
          </>
        )}

        {intensity > 0.75 && (
          <>
            <motion.div
              className="absolute top-12 -left-8 text-xl"
              animate={{
                y: [0, -8, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute top-12 -right-8 text-xl"
              animate={{
                y: [0, -8, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute top-50 -right-8 text-xl"
              animate={{
                y: [0, -8, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              🥰
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Hold progress indicator */}
      <AnimatePresence>
        {isPressed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600 font-light whitespace-nowrap">
                {holdProgress < 100
                  ? "Hold to feel the warmth..."
                  : "So warm 💕"}
              </p>
              {/* Progress bar */}
              <div className="w-48 h-2 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400"
                  style={{ width: `${holdProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
