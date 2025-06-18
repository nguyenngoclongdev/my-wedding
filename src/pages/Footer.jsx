import config from "@/config/config";
import { motion } from "framer-motion";
import { CheckCircle, X, XCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../analytics";

export default function Footer() {
  const [submitted, setSubmitted] = useState(null);
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");

  const handleRSVP = (response) => {
    trackEvent("rsvp_submit", { response, name, wish });
    setSubmitted(response);
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-rose-50 to-rose-100 pt-16 pb-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md mx-auto bg-white/95 rounded-2xl shadow-xl border border-rose-100 px-6 py-8 flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-3xl mb-1">💌</span>
          <h2 className="text-xl md:text-2xl font-serif text-rose-600">
            Nhắn gì cho tụi mình nha!
          </h2>
          <p className="text-gray-600 text-center text-base md:text-lg max-w-xs">
            Dù bạn đến chung vui hay chỉ ghé gửi lời chúc, tụi mình đều rất trân trọng! Để lại tên và vài dòng nhắn nhủ cho tụi mình nhé, tụi mình sẽ đọc hết và cảm động lắm luôn á 🥰
          </p>
        </motion.div>
        {/* RSVP */}
        <div className="w-full">
          {!submitted ? (
            <>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:border-rose-400 focus:outline-none bg-rose-50/60 pr-10"
                    placeholder="Tên của bạn nè..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={40}
                  />
                  {name && (
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-400 transition"
                      onClick={() => setName("")}
                      tabIndex={-1}
                      aria-label="Xoá tên"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="relative">
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:border-rose-400 focus:outline-none bg-rose-50/60 resize-none pr-10"
                    placeholder="Có gì muốn nhắn cho tụi mình không? (tuỳ thích nha)"
                    rows={2}
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    maxLength={200}
                  />
                  {wish && (
                    <button
                      type="button"
                      className="absolute right-2 top-3 text-gray-400 hover:text-rose-400 transition"
                      onClick={() => setWish("")}
                      tabIndex={-1}
                      aria-label="Xoá lời nhắn"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full mt-4">
                <motion.button
                  whileHover={!name.trim() ? {} : { scale: 1.05 }}
                  whileTap={!name.trim() ? {} : { scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 rounded-xl bg-rose-500 text-white font-semibold shadow transition text-base
                    ${!name.trim() ? "opacity-60 cursor-not-allowed" : "hover:bg-rose-600"}
                  `}
                  onClick={() => handleRSVP("yes")}
                  disabled={!name.trim()}
                >
                  <CheckCircle className="w-5 h-5" />
                  Mình sẽ tới nha!
                </motion.button>
                <motion.button
                  whileHover={!name.trim() ? {} : { scale: 1.05 }}
                  whileTap={!name.trim() ? {} : { scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold shadow transition text-base
                    ${!name.trim() ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-200"}
                  `}
                  onClick={() => handleRSVP("no")}
                  disabled={!name.trim()}
                >
                  <XCircle className="w-5 h-5" />
                  Tiếc quá, mình bận mất rồi!
                </motion.button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="w-full flex flex-col items-center gap-3 px-4 py-6 bg-rose-50/80 rounded-xl border border-rose-100 shadow-sm">
                {submitted === "yes" ? (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.12, 1], rotate: [0, -6, 6, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <Sparkles className="w-9 h-9 text-rose-400 mb-1" />
                    </motion.div>
                    <div className="text-lg font-bold text-rose-600 text-center">
                      Tuyệt vời quá! <span className="font-extrabold text-rose-700">{name.trim()}</span> sẽ đến chung vui cùng tụi mình! <span className="text-xl">🎉</span>
                    </div>
                    <div className="text-base text-gray-700 text-center">
                      Tụi mình mong chờ được gặp {name.trim()}, cùng nhau lưu lại những khoảnh khắc thật đẹp nhé! 💖
                    </div>
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{ rotate: [0, -8, 8, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <XCircle className="w-9 h-9 text-rose-300 mb-1" />
                    </motion.div>
                    <div className="text-lg font-bold text-rose-600 text-center">
                      Tiếc quá, <span className="font-extrabold text-rose-700">{name.trim()}</span> không đến được lần này rồi 😢
                    </div>
                    <div className="text-base text-gray-700 text-center">
                      Tụi mình vẫn luôn trân trọng tình cảm của {name.trim()}. Hẹn gặp {name.trim()} vào dịp khác nhé! 🌸
                    </div>
                  </>
                )}
                {wish.trim() && (
                  <div className="w-full flex flex-col items-center px-4 py-3 bg-white rounded-xl border border-rose-100 shadow-sm mt-2">
                    <div className="text-xs text-gray-400 mb-1">Lời nhắn của {name.trim()} tới tụi mình nè</div>
                    <div className="px-2 py-1 text-rose-500 text-center text-base break-words font-medium">
                      “{wish.trim()}”
                    </div>
                  </div>
                )}
              </div>
              <button
                className="mt-1 px-4 py-2 rounded-lg border border-rose-200 bg-white text-rose-500 font-medium hover:bg-rose-50 transition"
                onClick={() => setSubmitted(null)}
              >
                Muốn đổi ý? Nhấn lại nè 💌
              </button>
            </div>
          )}
        </div>
      </motion.div>
      <div className="w-full flex flex-col items-center mt-8" style={{ marginBottom: 70 }}>
        <div className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} {`${config.couple.brideName} ♥ ${config.couple.groomName}`}<br />
          Tụi mình cảm ơn bạn rất nhiều vì đã đồng hành!
        </div>
      </div>
    </footer>
  );
}
