import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingHearts } from '../components/FloatingHearts';
import { TeddyBear } from '../components/TeddyBear';
import { MessageCard } from '../components/MessageCard';
import { FinalButtons } from '../components/FinalButtons';

const messages = [
  "Whenever you feel lonely… 🥺",
  "Imagine this teddy hugging you tight. ☺️",
  "It carries all my warmth for you. 🥰",
  "Until I can hug you myself. 🤗"
];

export default function Teddy() {
  const [messageIndex, setMessageIndex] = useState<number>(-1);
  const [showFinal, setShowFinal] = useState(false);
  const [teddyClicks, setTeddyClicks] = useState(0);

  const handleTeddyClick = () => {
    setTeddyClicks(prev => prev + 1);
    if (messageIndex < messages.length - 1) {
      setMessageIndex(prev => prev + 1);
    } else if (messageIndex === messages.length - 1) {
      setShowFinal(true);
    }
  };

  const handleYes = () => {
    alert("🧸💗 Yay! This teddy is all yours, along with my heart!");
  };

  const handleNo = () => {
    alert("😊 I know you secretly love it! The teddy stays with you! 🧸");
  };

  return (
    <div className="body min-h-screen relative overflow-hidden flex items-center justify-center p-4 md:p-8">
      <FloatingHearts />
      
      <div className="max-w-5xl w-full mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-warm-brown mb-4">
            Happy Teddy Day 🧸
          </h1>
          <p className="text-lg md:text-2xl text-warm-brown/80 font-light max-w-2xl mx-auto">
            This teddy comes with all my hugs, warmth, and love.
          </p>
        </motion.div>

        {/* Main Interactive Area */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Teddy Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <TeddyBear onClick={handleTeddyClick} clickCount={teddyClicks} />
            
            
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-6"
              >
                <button
                  onClick={handleTeddyClick}
                  className="bg-soft-pink text-warm-brown px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-blush cursor-pointer"
                >
                  Tap the Teddy
                </button>
              </motion.div>
            
          </motion.div>

          {/* Message Section */}
          <div className="order-1 md:order-2 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {messageIndex >= 0 && !showFinal && (
                <MessageCard 
                  key={messageIndex}
                  message={messages[messageIndex]} 
                  onClick={handleTeddyClick}
                  showContinue={messageIndex < messages.length}
                />
              )}
              
              {showFinal && (
                <FinalButtons 
                  key="final"
                  onYes={handleYes}
                  onNo={handleNo}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
