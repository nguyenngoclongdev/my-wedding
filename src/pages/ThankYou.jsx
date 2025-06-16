import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="pt-16 pb-4 bg-rose-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-serif text-rose-600 mb-4"
      >
        Cảm ơn bạn đã đồng hành cùng chúng mình!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-xl mx-auto"
      >
        Sự hiện diện và lời chúc của bạn là món quà quý giá nhất đối với chúng mình trong ngày trọng đại này.
      </motion.p>
      <div className="mt-8 text-4xl">💖</div>
    </section>
  );
}
