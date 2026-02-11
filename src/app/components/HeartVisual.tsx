import { motion } from 'motion/react';

interface HeartVisualProps {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isMobile?: boolean;
}

export function HeartVisual({ isHovered, onMouseEnter, onMouseLeave, onClick, isMobile = false }: HeartVisualProps) {
  const size = isMobile ? 300 : 500;
  
  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Heartbeat pulse animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width={size} height={size} viewBox="0 0 500 500">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#ff6b9d" floodOpacity="0.3"/>
            </filter>
          </defs>
          <path
            d="M 250 150 C 250 100, 200 80, 160 100 C 120 120, 110 160, 130 200 C 150 240, 250 340, 250 340 C 250 340, 350 240, 370 200 C 390 160, 380 120, 340 100 C 300 80, 250 100, 250 150 Z"
            fill="#ff6b9d"
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Main heart with couple inside */}
      <svg width={size} height={size} viewBox="0 0 500 500">
        <defs>
          {/* Heart clip path for masking the couple */}
          <clipPath id="heartClip">
            <path d="M 250 150 C 250 100, 200 80, 160 100 C 120 120, 110 160, 130 200 C 150 240, 250 340, 250 340 C 250 340, 350 240, 370 200 C 390 160, 380 120, 340 100 C 300 80, 250 100, 250 150 Z" />
          </clipPath>
          
          {/* Gradient for heart */}
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>

          <filter id="softShadow">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#ff6b9d" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Heart background */}
        <path
          d="M 250 150 C 250 100, 200 80, 160 100 C 120 120, 110 160, 130 200 C 150 240, 250 340, 250 340 C 250 340, 350 240, 370 200 C 390 160, 380 120, 340 100 C 300 80, 250 100, 250 150 Z"
          fill="url(#heartGradient)"
          filter="url(#softShadow)"
        />

        {/* Hugging couple inside the heart */}
        <g clipPath="url(#heartClip)">
          {/* Background inside heart */}
          <rect x="100" y="80" width="300" height="300" fill="#ffe0ec" />
          
          {/* Left person */}
          <motion.g
            animate={{
              x: isHovered ? 10 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            {/* Body */}
            <ellipse cx="200" cy="240" rx="35" ry="55" fill="#ffc9d9" />
            {/* Head */}
            <circle cx="200" cy="180" r="28" fill="#ffd4e3" />
            {/* Hair */}
            <ellipse cx="200" cy="170" rx="30" ry="25" fill="#8b5a3c" />
            {/* Arm wrapping around */}
            <path
              d="M 165 210 Q 140 230 150 260 Q 155 275 180 280"
              stroke="#ffb3cc"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            {/* Other arm */}
            <path
              d="M 235 210 Q 260 230 280 250"
              stroke="#ffb3cc"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Right person */}
          <motion.g
            animate={{
              x: isHovered ? -10 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            {/* Body */}
            <ellipse cx="300" cy="240" rx="35" ry="55" fill="#d4a5ff" />
            {/* Head */}
            <circle cx="300" cy="180" r="28" fill="#e6d5ff" />
            {/* Hair */}
            <ellipse cx="300" cy="170" rx="30" ry="25" fill="#6b4423" />
            {/* Arm wrapping around */}
            <path
              d="M 335 210 Q 360 230 350 260 Q 345 275 320 280"
              stroke="#c99aff"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            {/* Other arm */}
            <path
              d="M 265 210 Q 240 230 220 250"
              stroke="#c99aff"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Small hearts between them */}
          <motion.g
            animate={{
              y: [0, -5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path
              d="M 250 200 L 252 205 L 248 205 Z M 252 195 C 252 193, 253 192, 254 193 C 255 194, 255 196, 254 197 L 252 200 L 250 197 C 249 196, 249 194, 250 193 C 251 192, 252 193, 252 195 Z"
              fill="#ff4d6d"
              transform="scale(2)"
            />
          </motion.g>
          <motion.g
            animate={{
              y: [0, -5, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            <path
              d="M 235 215 L 236 218 L 234 218 Z M 236 213 C 236 212, 236.5 211, 237 212 C 237.5 213, 237.5 214, 237 215 L 236 218 L 235 215 C 234.5 214, 234.5 213, 235 212 C 235.5 211, 236 212, 236 213 Z"
              fill="#ff4d6d"
              transform="scale(1.5)"
            />
          </motion.g>
        </g>

        {/* Highlight on heart */}
        <path
          d="M 180 120 Q 200 110 220 120 Q 210 115 200 120"
          fill="white"
          opacity="0.3"
          transform="translate(10, -10)"
        />
      </svg>

      {/* Decorative floating hearts around */}
      <motion.div
        className="absolute top-10 -right-8"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path
            d="M 20 12 C 20 8, 16 6, 13 8 C 10 10, 9 13, 11 16 C 13 19, 20 26, 20 26 C 20 26, 27 19, 29 16 C 31 13, 30 10, 27 8 C 24 6, 20 8, 20 12 Z"
            fill="#ff9eb3"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-6"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <svg width="35" height="35" viewBox="0 0 40 40">
          <path
            d="M 20 12 C 20 8, 16 6, 13 8 C 10 10, 9 13, 11 16 C 13 19, 20 26, 20 26 C 20 26, 27 19, 29 16 C 31 13, 30 10, 27 8 C 24 6, 20 8, 20 12 Z"
            fill="#ffc4d6"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
