import { useState } from "react";
import { FloatingElements } from "../components/FloatingElements";
import { HugMessageCard } from "../components/HugMessageCard";
import { FinalMoment } from "../components/FinalMoment";
import { HugInteractive } from "../components/HugInteractive";

function Hug() {
  const [isHovered, setIsHovered] = useState(false);
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);
  const [hugCount, setHugCount] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);

  const messages = [
    "This hug is for your tired days.",
    "For the days you miss me.",
    "For the days you need comfort.",
    "For every moment until we meet.",
  ];

  const btnMessages = [
    "Hold me closer 🩷",
    "Closer baby 💖",
    "More closer baby 🥰",
  ];

  const handleHugInteraction = () => {
    if (hugCount < messages.length) {
      setHugCount((prev) => prev + 1);
    } else if (!showFinal) {
      setShowFinal(true);
    }
  };

  const handleInteraction = () => {
    setShowFloatingHearts(true);
    setTimeout(() => setShowFloatingHearts(false), 2000);
  };

  return (
    <div className="body-hug min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-red-50">
      {/* Background clouds */}
      <div className="absolute top-20 left-10 w-32 h-20 bg-white/40 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-40 h-24 bg-white/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-22 bg-pink-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-1/3 w-44 h-26 bg-white/35 rounded-full blur-xl"></div>

      <FloatingElements show={showFloatingHearts} />

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen items-center gap-16 px-12 xl:px-20 relative z-10">
        {/* Left Visual Section */}
        <div className="flex items-center justify-center">
          <HugInteractive
            intensity={hugCount / messages.length}
            onHoldProgress={setHoldProgress}
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center space-y-8 relative z-10 max-w-2xl">
          {!showFinal ? (
            <>
              <div className="space-y-12">
                <div className="space-y-4">
                  <h1 className="text-7xl xl:text-8xl font-handwritten text-rose-500 leading-tight">
                    Happy
                  </h1>
                  <h2 className="text-8xl xl:text-9xl font-display font-bold text-red-500 leading-none">
                    Hug Day
                  </h2>
                </div>

                <p className="text-2xl xl:text-3xl text-gray-700 font-light leading-relaxed max-w-xl">
                  Sending you the warmest virtual hug filled with love and joy!
                  💕
                </p>
              </div>

              {hugCount === 0 && (
                <div>
                  <button
                    onClick={handleHugInteraction}
                    className="px-10 py-5 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-soft hover:shadow-medium animate-heartbeat"
                  >
                    Come Here 🤗
                  </button>
                </div>
              )}

              {/* Message progression */}
              {hugCount > 0 && (
                <div className="space-y-5">
                  {messages.slice(0, hugCount).map((message, index) => (
                    <HugMessageCard
                      key={index}
                      message={message}
                      delay={index * 0.2}
                    />
                  ))}
                </div>
              )}

              {hugCount > 0 && hugCount < messages.length && (
                <div>
                  <button
                    onClick={handleHugInteraction}
                    className="px-10 py-5 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-soft hover:shadow-medium animate-heartbeat"
                  >
                    {btnMessages[hugCount - 1]}
                  </button>
                </div>
              )}

              {hugCount === messages.length && (
                <div>
                  <button
                    onClick={handleHugInteraction}
                    className="px-10 py-5 bg-purple-200 hover:bg-purple-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-soft hover:shadow-medium animate-heartbeat"
                  >
                    Hold me close 🩷
                  </button>
                </div>
              )}
            </>
          ) : (
            <FinalMoment />
          )}
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-10">
        {/* Heart Visual */}
        <div className="mb-12">
          <HugInteractive
            intensity={hugCount / messages.length}
            isMobile
            onHoldProgress={setHoldProgress}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-md bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/50">
          {!showFinal ? (
            <>
              <div className="space-y-5 mb-8">
                <h1 className="text-4xl font-playfair text-gray-800 leading-tight">
                  Happy Hug Day <span className="text-pink-300">🤍</span>
                </h1>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  If I were there right now, this is how I'd hold you.
                </p>
              </div>

              {hugCount === 0 && (
                <button
                  onClick={handleHugInteraction}
                  className="w-full px-6 py-4 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-soft animate-heartbeat"
                >
                  Come Here 🤗
                </button>
              )}

              {/* Message progression */}
              {hugCount > 0 && (
                <div className="space-y-4 mb-6">
                  {messages.slice(0, hugCount).map((message, index) => (
                    <HugMessageCard
                      key={index}
                      message={message}
                      delay={index * 0.2}
                      isMobile
                    />
                  ))}
                </div>
              )}

              {hugCount > 0 && hugCount < messages.length && (
                <button
                  onClick={handleHugInteraction}
                  className="w-full px-6 py-4 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-soft animate-heartbeat"
                >
                  {btnMessages[hugCount - 1]}
                </button>
              )}

              {hugCount === messages.length && (
                <button
                  onClick={handleHugInteraction}
                  className="w-full px-6 py-4 bg-purple-200 hover:bg-purple-300 text-gray-800 rounded-full text-lg font-medium transition-all duration-300 shadow-soft animate-heartbeat"
                >
                  Hold me close 🩷
                </button>
              )}
            </>
          ) : (
            <FinalMoment isMobile />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hug;
