import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FallingItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  type: "heart" | "chocolate";
}

export function FallingChocolates() {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const newItems: FallingItem[] = [];
    for (let i = 0; i < 15; i++) {
      newItems.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        type: Math.random() > 0.5 ? "heart" : "chocolate",
      });
    }
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{ left: `${item.left}%` }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {item.type === "heart" ? (
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 opacity-30" />
          ) : (
            <div className="w-6 h-6 rounded-full bg-amber-800 opacity-30" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
