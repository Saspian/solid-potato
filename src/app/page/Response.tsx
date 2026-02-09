import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Candy } from "lucide-react";

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
    text: "Thank you for choosing me 💕 It means a lot to me. I promise to keep learning, growing, and loving you with more care every day. I’m really grateful for you.",
    imageUrl: "S+S HIghlights-48.jpg",
  },
];

export default function Response() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showProposal, setShowProposal] = useState(false);
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const navigate = useNavigate();

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
                src={currentStepData.imageUrl}
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
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center flex flex-col items-center"
              >
                <p
                  className="text-3xl leading-relaxed mb-16"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#6b4555",
                    fontWeight: 400,
                    lineHeight: "1.8",
                  }}
                >
                  Thank you for choosing me 💕 <br /> It means a lot to me. I
                  promise to keep learning, growing, and loving you with more
                  care every day. I’m really grateful for you.
                </p>
                <motion.button
                  className="px-12 py-4 rounded-full border-2 border-amber-700 text-amber-800 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => alert('Comming Soon!')}
                >
                  <Candy size={18} />
                  To the Chocolate day{" "}
                  <motion.span
                    style={{
                      width: 20,
                      height: 20,
                      border: "2px solid #ccc",
                      borderTop: "2px solid #973c00",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </motion.div>
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
                src={currentStepData.imageUrl}
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
                className="w-full max-w-lg rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center"
                style={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <p
                  className="text-3xl leading-relaxed mb-16"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#FFFFFF",
                    fontWeight: 400,
                    lineHeight: "1.8",
                  }}
                >
                  Thank you for choosing me 💕 <br /> It means a lot to me. I
                  promise to keep learning, growing, and loving you with more
                  care every day. I’m really grateful for you.
                </p>

                <motion.button
                  className="px-12 py-4 rounded-full border-2 border-amber-700 text-amber-800 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/chocolate")}
                  data-umami-event="choclate_day"
                >
                  <Candy size={18} />
                  To the Chocolate day
                   <motion.span
                    style={{
                      width: 20,
                      height: 20,
                      border: "2px solid #ccc",
                      borderTop: "2px solid #973c00",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
