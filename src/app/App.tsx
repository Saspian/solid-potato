import { useNavigate, Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Proposal from "./page/Proposal";
import Chocolate from "./page/Chocolate";
import Response from "./page/Response";
import { Heart, Candy, X, Menu, HeartHandshake } from "lucide-react";
import { useState } from "react";
import Teddy from "./page/Teddy";
import PromisePage from "./page/Promise";
import Hug from "./page/Hug";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRoute = (routeName: string) => {
    setIsMenuOpen(false);
    navigate(routeName);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="xl:hidden fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border-2 border-pink-400 text-pink-600 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
      <nav className="hidden xl:flex absolute top-6 right-6 z-50 gap-3">
        <motion.button
          className="px-6 py-3 rounded-full border-2 border-pink-400 text-pink-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute(location.pathname === "/proposal" ? "/response" : "/proposal")}
        >
          <Heart size={18} />
          {location.pathname === "/proposal" ? "My Response" : "Propose Day"}
        </motion.button>

        <motion.button
          className="px-6 py-3 rounded-full border-2 border-amber-700 text-amber-800 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute("/chocolate")}
        >
          <Candy size={18} />
          Chocolate Day
        </motion.button>

        <motion.button
          className="px-5 py-2.5 rounded-full border-2 border-rose-400 text-rose-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute("/teddy")}
        >
          🧸 &nbsp;Teddy Day
        </motion.button>

         <motion.button
          className="px-5 py-2.5 rounded-full border-2 border-purple-400 text-purple-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute("/promise")}
        >
          <HeartHandshake size={18} />
          Promise
        </motion.button>

        <motion.button
          className="px-5 py-2.5 rounded-full border-2 border-blue-400 text-blue-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute("/hug")}
        >
          🤗 &nbsp;Hug
        </motion.button>

        {/* <motion.button
          className="px-5 py-2.5 rounded-full border-2 border-red-400 text-red-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute("/kiss")}
        >
          💋 &nbsp;Kiss
        </motion.button>

        <motion.button
          className="px-5 py-2.5 rounded-full border-2 border-fuchsia-400 text-fuchsia-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleRoute("/valentine")}
        >
          💝 &nbsp;Valentine
        </motion.button> */}
      </nav>

      {/* Mobile Collapsible Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden w-[250px] fixed top-20 right-6 z-40 rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl border border-pink-200 p-4"
          >
            <div className="flex flex-col gap-2">
              <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-pink-400 text-pink-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute(location.pathname === "/proposal" ? "/response" : "/proposal")}
              >
                <Heart size={18} />
                {location.pathname === "/proposal"
                  ? "My Response"
                  : "Propose Day"}
              </motion.button>

              <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-amber-700 text-amber-800 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute("/chocolate")}
              >
                <Candy size={18} />
                Chocolate Day
              </motion.button>

              <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-rose-400 text-rose-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute("/teddy")}
              >
                🧸 Teddy Day
              </motion.button>

              <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-purple-400 text-purple-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute("/promise")}
              >
                <HeartHandshake size={18} />Promise
              </motion.button>

              <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-blue-400 text-blue-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute("/hug")}
              >
                🤗 Hug
              </motion.button>

              {/* <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-red-400 text-red-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute("/kiss")}
              >
                💋 Kiss
              </motion.button>

              <motion.button
                className="w-full px-5 py-3 rounded-full border-2 border-fuchsia-400 text-fuchsia-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRoute("/valentine")}
              >
                💝 Valentine
              </motion.button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Hug />} />
        <Route path="/response" element={<Response />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/teddy" element={<Teddy />} />
        <Route path="/promise" element={<PromisePage />} />
        <Route path="/hug" element={<Hug />} />
      </Routes>
    </>
  );
}
