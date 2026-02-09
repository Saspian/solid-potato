import { useNavigate, Route, Routes, useLocation } from "react-router";
import { motion } from "motion/react";
import Proposal from "./page/Proposal";
import Chocolate from "./page/Chocolate";
import Response from "./page/Response";
import { Heart, Candy } from "lucide-react";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoute = () => {
    if (location.pathname === "/proposal") {
      navigate("/");
    } else {
      navigate("/proposal");
    }
  };

  return (
    <>
      <nav className="absolute top-6 right-6 z-50 flex gap-3">
        <motion.button
          className="px-6 py-3 rounded-full border-2 border-pink-400 text-pink-600 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRoute}
        >
          <Heart size={18} />
          {location.pathname === "/proposal" ? "My Response" : "Propose Day"}
        </motion.button>

        <motion.button
          className="px-6 py-3 rounded-full border-2 border-amber-700 text-amber-800 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer hidden sm:flex"
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
          Chocolate Day
        </motion.button>
      </nav>
      <Routes>
        <Route path="/" element={<Response />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/chocolate" element={<Chocolate />} />
      </Routes>
    </>
  );
}
