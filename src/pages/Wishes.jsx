import Marquee from "@/components/ui/marquee";
import { formatEventDate } from "@/lib/formatEventDate";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  HelpCircle,
  MessageCircle,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import Confetti from "react-confetti";

export default function Wishes() {
  const [wishes] = useState([
    {
      id: 1,
      name: "John Doe",
      message:
        "Wishing you both a lifetime of love, laughter, and happiness! 🎉",
      timestamp: "2024-12-24T23:20:00Z",
      attending: "attending",
    },
    {
      id: 2,
      name: "Natalie",
      message:
        "Wishing you both a lifetime of love, laughter, and happiness! 🎉",
      timestamp: "2024-12-24T23:20:00Z",
      attending: "attending",
    },
    {
      id: 3,
      name: "John Doe",
      message:
        "Congratulations on your special day! May Allah bless your union! 🤲",
      timestamp: "2024-12-25T23:08:09Z",
      attending: "maybe",
    },
  ]);

  const getAttendanceIcon = (status) => {
    switch (status) {
      case "attending":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "not-attending":
        return <XCircle className="w-4 h-4 text-rose-500" />;
      case "maybe":
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <>
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        <Confetti recycle={false} numberOfPieces={200} />

        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-rose-500 font-medium"
            >
              Best Wishes
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Messages
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <MessageCircle className="w-5 h-5 text-rose-400" />
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>
          </motion.div>

          {/* Wishes List */}
          <div className="max-w-2xl mx-auto space-y-6">
            <AnimatePresence>
              <Marquee
                speed={20}
                gradient={false}
                className="[--duration:20s] py-2"
              >
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative w-[280px]"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                    {/* Card content */}
                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md">
                      {/* Header */}
                      <div className="flex items-start space-x-3 mb-2">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                            {wish.name[0].toUpperCase()}
                          </div>
                        </div>

                        {/* Name, Time, and Attendance */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-800 text-sm truncate">
                              {wish.name}
                            </h4>
                            {getAttendanceIcon(wish.attending)}
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <time className="truncate">
                              {formatEventDate(wish.timestamp)}
                            </time>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                        {wish.message}
                      </p>

                      {/* Optional: Time indicator for recent messages */}
                      {Date.now() - new Date(wish.timestamp).getTime() <
                        3600000 && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
                            New
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </Marquee>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section>
        <img
          src="https://photos.google.com/share/AF1QipNFILPz0c12E1Ahi59FPndVQ9w1P2yzkTJPhEybBAeVhm_Y76FwLQrrDLJdjL42RQ/photo/AF1QipMvjOioJVgfp2eRsQJ4kVHcKZ7fOCZ-3_2w-njS?key=N3d4S1VTSDFwNDRMRlhiWS12MkYzcGlka3hBUFFR"
          alt="Cover"
          className="w-full h-full object-contain"
        />
      </section>
    </>
  );
}
