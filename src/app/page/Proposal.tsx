import { useState } from "react";
import { motion, AnimatePresence, translateAxis } from "motion/react";
import { Heart } from "lucide-react";

interface Step {
  id: number;
  title?: string;
  subtitle?: string;
  text?: string;
  imageUrl: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Shreeya",
    subtitle: "I want to tell you something…",
    imageUrl: "1poster.JPG",
  },
  {
    id: 2,
    text: "I never got the chance to ask you the way I should have.",
    imageUrl: "2IMG_0320.jpg",
  },
  {
    id: 3,
    text: "Life moved fast, and I missed a moment that mattered deeply to you.",
    imageUrl: "3IMG_07922.jpg",
  },
  {
    id: 4,
    text: "So today, on Propose Day, I want to ask you properly",
    imageUrl: "IMG_2950.jpg",
  },
  {
    id: 5,
    text: "not to erase the past, but to honor you.",
    imageUrl: "S+SHIghlights-110.jpg",
  },
];

const proposalImageUrl = "IMG_2493.jpg";

export default function Proposal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showProposal, setShowProposal] = useState(false);
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [notiText, setNotiText] = useState("Click to notify Sanjay! 💕");

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowProposal(true);
    }
  };

  const handleAnswer = (response: "yes" | "no") => {
    setAnswer(response);
  };

  const handleNotify = () => {
    setTimeout(() => {
      setNotiText("Notification sent to Sanjay 🥰");
    }, 2000);
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="fixed inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #ffd6e8, #fff1f7)" }}
      />

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="heart heart-filled heart-small heart-1"></div>
        <div className="heart heart-outline heart-medium heart-2"></div>
        <div className="heart heart-filled heart-medium heart-3"></div>
        <div className="heart heart-outline heart-small heart-4"></div>
        <div className="heart heart-filled heart-large heart-5"></div>
        <div className="heart heart-outline heart-medium heart-6"></div>
        <div className="heart heart-filled heart-small heart-7"></div>
        <div className="heart heart-outline heart-large heart-8"></div>
        <div className="heart heart-filled heart-medium heart-9"></div>
        <div className="heart heart-outline heart-small heart-10"></div>
        <div className="heart heart-filled heart-small heart-11"></div>
        <div className="heart heart-outline heart-medium heart-12"></div>
        <div className="heart heart-filled heart-large heart-13"></div>
        <div className="heart heart-outline heart-small heart-14"></div>
        <div className="heart heart-filled heart-medium heart-15"></div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex relative z-10 min-h-screen">
        {/* Left Image Area - 40% */}
        <motion.div
          className="w-[40%] relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={showProposal ? "proposal" : currentStep}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={showProposal ? proposalImageUrl : currentStepData.imageUrl}
                alt="Romantic moment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Content Area - 60% */}
        <motion.div
          className="w-[60%] flex items-center justify-center p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl w-full">
            <AnimatePresence mode="wait">
              {!showProposal ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  {currentStepData.title ? (
                    <>
                      <h1
                        className="text-7xl md:text-8xl mb-6"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#d4456e",
                          fontWeight: 700,
                        }}
                      >
                        {currentStepData.title}
                      </h1>
                      <p
                        className="text-2xl mb-16"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#8b5a6a",
                          fontWeight: 300,
                        }}
                      >
                        {currentStepData.subtitle}
                      </p>
                    </>
                  ) : (
                    <p
                      className="text-3xl leading-relaxed mb-16"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: "#6b4555",
                        fontWeight: 400,
                        lineHeight: "1.8",
                      }}
                    >
                      {currentStepData.text}
                    </p>
                  )}

                  <motion.button
                    onClick={handleContinue}
                    className="px-12 py-4 rounded-full text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #ff9dbe, #ffb4d2)",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  {!answer ? (
                    <>
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Heart
                          className="mx-auto mb-8"
                          size={80}
                          style={{ color: "#ff6b9d", fill: "#ff6b9d" }}
                        />
                      </motion.div>

                      <h1
                        className="text-5xl md:text-6xl mb-12"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#d4456e",
                          fontWeight: 700,
                          lineHeight: "1.3",
                        }}
                      >
                        Will you still choose me, knowing I’m learning to love
                        you better?
                      </h1>

                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.button
                          onClick={() => handleAnswer("yes")}
                          className="px-16 py-5 rounded-full text-white text-xl shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px] cursor-pointer"
                          style={{
                            background:
                              "linear-gradient(135deg, #ff4d7d, #ff6b9d)",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                          }}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          data-umami-event="valentine_yes"
                        >
                          Yes! 💕
                        </motion.button>

                        <motion.button
                          onClick={() => handleAnswer("no")}
                          className="px-16 py-5 rounded-full text-gray-600 text-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-[200px] cursor-pointer"
                          style={{
                            background: "rgba(255, 255, 255, 0.8)",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 400,
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          data-umami-event="valentine_no"
                        >
                          No
                        </motion.button>
                      </div>
                    </>
                  ) : answer === "yes" ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1
                        className="text-6xl md:text-7xl mb-6"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#d4456e",
                          fontWeight: 700,
                        }}
                      >
                        You've made me the happiest person on earth! 💖
                      </h1>
                      <p
                        className="text-2xl"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#8b5a6a",
                          fontWeight: 300,
                        }}
                      >
                        This Valentine's Day will be unforgettable.
                      </p>
                      <br />
                      <motion.button
                        onClick={handleNotify}
                        className="px-16 py-5 rounded-full text-white text-md shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px] cursor-pointer"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff4d7d, #ff6b9d)",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        data-umami-event="notify_me"
                      >
                        {notiText}
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1
                        className="text-5xl md:text-6xl mb-6"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#8b5a6a",
                          fontWeight: 600,
                        }}
                      >
                        That's okay... I'll always cherish the moments we've
                        shared.
                      </h1>
                      <p
                        className="text-xl"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#8b5a6a",
                          fontWeight: 300,
                        }}
                      >
                        I love you. I respect your space. And I believe in us.
                        <br />
                        <br />
                        Always yours,
                        <br />
                        Sanjay
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={showProposal ? "proposal" : currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen"
          >
            {/* Full screen background image */}
            <div className="absolute inset-0">
              <img
                src={showProposal ? proposalImageUrl : currentStepData.imageUrl}
                alt="Romantic moment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glassmorphism overlay with content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-lg rounded-3xl p-8 shadow-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {!showProposal ? (
                  <div className="text-center">
                    {currentStepData.title ? (
                      <>
                        <h1
                          className="text-6xl mb-4"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#ffffff",
                            fontWeight: 700,
                            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          {currentStepData.title}
                        </h1>
                        <p
                          className="text-xl mb-12"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#ffffff",
                            fontWeight: 300,
                            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                          }}
                        >
                          {currentStepData.subtitle}
                        </p>
                      </>
                    ) : (
                      <p
                        className="text-2xl leading-relaxed mb-12"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#ffffff",
                          fontWeight: 400,
                          lineHeight: "1.7",
                          textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                        }}
                      >
                        {currentStepData.text}
                      </p>
                    )}

                    <motion.button
                      onClick={handleContinue}
                      className="px-10 py-4 rounded-full text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                      style={{
                        background: "linear-gradient(135deg, #ff4d7d, #ff6b9d)",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Continue
                    </motion.button>
                  </div>
                ) : (
                  <div className="text-center">
                    {!answer ? (
                      <>
                        <motion.div
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <Heart
                            className="mx-auto mb-6"
                            size={60}
                            style={{
                              color: "#ffffff",
                              fill: "#ffffff",
                              filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.3))",
                            }}
                          />
                        </motion.div>

                        <h1
                          className="text-4xl mb-10"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#ffffff",
                            fontWeight: 700,
                            lineHeight: "1.3",
                            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          Will you still choose me, knowing I’m learning to love
                          you better?
                        </h1>

                        <div className="flex flex-col gap-4">
                          <motion.button
                            onClick={() => handleAnswer("yes")}
                            className="px-12 py-4 rounded-full text-white text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, #ff4d7d, #ff6b9d)",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: 600,
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Yes! 💕
                          </motion.button>

                          <motion.button
                            onClick={() => handleAnswer("no")}
                            className="px-12 py-4 rounded-full text-white text-lg shadow-md hover:shadow-lg transition-all duration-300"
                            style={{
                              background: "rgba(255, 255, 255, 0.3)",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: 400,
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            No
                          </motion.button>
                        </div>
                      </>
                    ) : answer === "yes" ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h1
                          className="text-5xl mb-4"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#ffffff",
                            fontWeight: 700,
                            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          You've made me the happiest! 💖
                        </h1>
                        <p
                          className="text-xl"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#ffffff",
                            fontWeight: 300,
                            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                          }}
                        >
                          This Valentine's Day will be unforgettable.
                        </p>
                        <br />
                        <motion.button
                          onClick={handleNotify}
                          className="px-16 py-5 rounded-full text-white text-md shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px] cursor-pointer"
                          style={{
                            background:
                              "linear-gradient(135deg, #ff4d7d, #ff6b9d)",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                          }}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          data-umami-event="notify_me"
                        >
                          {notiText}
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h1
                          className="text-5xl md:text-6xl mb-6"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#ffffff",
                            fontWeight: 600,
                          }}
                        >
                          That's okay... I'll always cherish the moments we've
                          shared.
                        </h1>
                        <p
                          className="text-xl"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#ffffff",
                            fontWeight: 300,
                          }}
                        >
                          I love you. I respect your space. And I believe in us.
                          <br />
                          <br />
                          Always yours,
                          <br />
                          Sanjay
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
