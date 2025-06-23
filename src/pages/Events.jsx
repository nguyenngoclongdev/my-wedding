import EventCards from "@/components/EventsCard";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Events() {
  return (
    <>
      {/* Event Section */}
      <section id="event" className="min-h-screen relative overflow-hidden py-12">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-12"
        >
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
              className="inline-block text-rose-500 font-medium mb-2"
            >
              Nhớ ghé chơi mấy ngày này nha!
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
            >
              Lịch Trình Của Tụi Mình
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <div className="text-rose-400">
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Mark HCM event as done by passing its id/title */}
            <EventCards
              events={config.eventDetails}
              doneEvents={["hcm"]} // Replace "hcm" with the actual id/title of the HCM event in your config
            />
          </motion.div>
        </motion.div>

        {/* Decorative Bottom Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>
    </>
  );
}
