import { safeBase64 } from "@/lib/base64";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import PetalFalling from "./PetalFalling";
import config from "@/config/config";

export default function Hero() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");
    if (guestParam) {
      try {
        const decodedName = safeBase64.decode(guestParam);
        setGuestName(decodedName);
      } catch {
        setGuestName("");
      }
    }
  }, []);

  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          Ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Phút: Math.floor((difference / 1000 / 60) % 60),
          Giây: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    useEffect(() => {
      const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Object.keys(timeLeft).map((interval) => (
          <div
            key={interval}
            className="flex flex-col items-center p-2 bg-white/80 rounded-lg border border-rose-100 shadow"
          >
            <span className="text-xl font-bold text-rose-600">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </div>
        ))}
      </div>
    );
  };

  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              className={`w-${Math.random() * 3 + 3} h-${Math.random() * 3 + 3} ${
                i % 3 === 0
                  ? "text-rose-400"
                  : i % 3 === 1
                    ? "text-pink-400"
                    : "text-red-400"
              }`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="./images/gallery/60X90.JPG"
            alt={`${config.couple.brideName} ♥ ${config.couple.groomName}`}
            className="w-full h-full object-cover object-center"
            style={{ minHeight: "100vh" }}
          />
          <FloatingHearts />
        </div>

        <PetalFalling />

        {/* Main content block absolutely positioned above bottom bar */}
        <div
          className="container mx-auto px-4 w-full max-w-xl left-1/2 -translate-x-1/2 absolute z-10"
          style={{
            bottom: 70, // height of bottom bar + gap
            pointerEvents: "auto",
          }}
        >
          <motion.div
            className="w-full mb-8 rounded-2xl bg-white/100 backdrop-blur-lg shadow-xl border border-rose-100 px-6 py-7 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-1">
              <span
                className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight text-center"
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                {config.couple.brideName}
                <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
                {config.couple.groomName}
              </span>
              <span className="flex items-center gap-2 text-base md:text-lg text-gray-700 font-medium mt-1">
                Chủ Nhật | 22 - 06 - 2025
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base text-gray-500 font-normal mt-1">
                Đón Khách 11:00 - Khai Tiệc 12:00
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base text-gray-500 font-normal">
                Queen Plaza, 91B2 Phạm Văn Hai, P.3, Tân Bình
              </span>
            </div>
            <CountdownTimer targetDate="2025-06-22T10:30:00" />
            {guestName && (
              <div className="text-base text-gray-700 text-center mt-2">
                Kính mời{" "}
                <span className="font-semibold text-rose-600">{guestName}</span>{" "}
                đến dự lễ cưới của chúng mình!
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
