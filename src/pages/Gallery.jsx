import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { trackEvent } from "../analytics"; // Thêm dòng này

// New component for smooth image loading
function GalleryImage({ src, alt, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className="relative cursor-pointer group"
      onClick={(e) => {
        trackEvent("gallery_image_click", { src, alt });
        if (onClick) onClick(e);
      }}
    >
      {/* Blurred placeholder */}
      <div
        className={`absolute inset-0 rounded-xl bg-gray-200 ${
          loaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
        style={{
          filter: "blur(12px)",
        }}
      />
      {/* Actual image with fade-in and scale using motion */}
      <AnimatePresence>
        {loaded ? (
          <motion.img
            key="img"
            src={src}
            alt={alt}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-lg object-cover w-full h-56 md:h-64 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="rounded-xl shadow-lg object-cover w-full h-56 md:h-64 opacity-0"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition" />
    </div>
  );
}

// Lazy load image only when in viewport
function LazyGalleryImage({ src, alt, onClick }) {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative cursor-pointer group min-h-[14rem]" onClick={onClick}>
      {show ? (
        <GalleryImage src={src} alt={alt} />
      ) : (
        <div className="absolute inset-0 rounded-xl bg-gray-100 animate-pulse" />
      )}
    </div>
  );
}

export default function Gallery() {
  const images = [
    { thumb: "./images/gallery/thumbs/60X90.JPG", full: "./images/gallery/60X90.JPG" },
    { thumb: "./images/gallery/thumbs/415A2259.JPG", full: "./images/gallery/415A2259.JPG" },
    { thumb: "./images/gallery/thumbs/415A2318.JPG", full: "./images/gallery/415A2318.JPG" },
    { thumb: "./images/gallery/thumbs/415A2329.JPG", full: "./images/gallery/415A2329.JPG" },
    { thumb: "./images/gallery/thumbs/415A2349.JPG", full: "./images/gallery/415A2349.JPG" },
    { thumb: "./images/gallery/thumbs/415A2361.JPG", full: "./images/gallery/415A2361.JPG" },
    { thumb: "./images/gallery/thumbs/415A2418.JPG", full: "./images/gallery/415A2418.JPG" },
    { thumb: "./images/gallery/thumbs/415A2504.JPG", full: "./images/gallery/415A2504.JPG" },
    { thumb: "./images/gallery/thumbs/415A2573.JPG", full: "./images/gallery/415A2573.JPG" },
    { thumb: "./images/gallery/thumbs/415A2669.JPG", full: "./images/gallery/415A2669.JPG" },
    { thumb: "./images/gallery/thumbs/415A2698.JPG", full: "./images/gallery/415A2698.JPG" },
    { thumb: "./images/gallery/thumbs/415A2774.JPG", full: "./images/gallery/415A2774.JPG" },
    { thumb: "./images/gallery/thumbs/415A2776.JPG", full: "./images/gallery/415A2776.JPG" },
    { thumb: "./images/gallery/thumbs/415A2786.JPG", full: "./images/gallery/415A2786.JPG" },
    { thumb: "./images/gallery/thumbs/415A2819.JPG", full: "./images/gallery/415A2819.JPG" },
    { thumb: "./images/gallery/thumbs/415A2823.JPG", full: "./images/gallery/415A2823.JPG" },
    { thumb: "./images/gallery/thumbs/415A2879.JPG", full: "./images/gallery/415A2879.JPG" },
    { thumb: "./images/gallery/thumbs/415A2960.JPG", full: "./images/gallery/415A2960.JPG" },
    { thumb: "./images/gallery/thumbs/415A3001.JPG", full: "./images/gallery/415A3001.JPG" },
    { thumb: "./images/gallery/thumbs/415A3058.JPG", full: "./images/gallery/415A3058.JPG" },
    { thumb: "./images/gallery/thumbs/415A3126.JPG", full: "./images/gallery/415A3126.JPG" },
    { thumb: "./images/gallery/thumbs/415A3132.JPG", full: "./images/gallery/415A3132.JPG" },
    { thumb: "./images/gallery/thumbs/415A3146.JPG", full: "./images/gallery/415A3146.JPG" },
    { thumb: "./images/gallery/thumbs/415A3180.JPG", full: "./images/gallery/415A3180.JPG" },
    { thumb: "./images/gallery/thumbs/415A3199.JPG", full: "./images/gallery/415A3199.JPG" },
    { thumb: "./images/gallery/thumbs/415A3215.JPG", full: "./images/gallery/415A3215.JPG" },
    { thumb: "./images/gallery/thumbs/415A3252.JPG", full: "./images/gallery/415A3252.JPG" },
    { thumb: "./images/gallery/thumbs/415A3283.JPG", full: "./images/gallery/415A3283.JPG" },
    { thumb: "./images/gallery/thumbs/415A3298.JPG", full: "./images/gallery/415A3298.JPG" },
    { thumb: "./images/gallery/thumbs/415A3316.JPG", full: "./images/gallery/415A3316.JPG" },
    { thumb: "./images/gallery/thumbs/415A3343.JPG", full: "./images/gallery/415A3343.JPG" },
    { thumb: "./images/gallery/thumbs/415A3352.JPG", full: "./images/gallery/415A3352.JPG" },
    { thumb: "./images/gallery/thumbs/415A3381.JPG", full: "./images/gallery/415A3381.JPG" },
    { thumb: "./images/gallery/thumbs/415A3386.JPG", full: "./images/gallery/415A3386.JPG" },
    { thumb: "./images/gallery/thumbs/415A3397.JPG", full: "./images/gallery/415A3397.JPG" },
    { thumb: "./images/gallery/thumbs/415A3403.JPG", full: "./images/gallery/415A3403.JPG" },
    { thumb: "./images/gallery/thumbs/415A3427.JPG", full: "./images/gallery/415A3427.JPG" },
    { thumb: "./images/gallery/thumbs/415A3437.JPG", full: "./images/gallery/415A3437.JPG" },
    { thumb: "./images/gallery/thumbs/415A3446.JPG", full: "./images/gallery/415A3446.JPG" },
    { thumb: "./images/gallery/thumbs/415A3449.JPG", full: "./images/gallery/415A3449.JPG" },
    { thumb: "./images/gallery/thumbs/415A3476.JPG", full: "./images/gallery/415A3476.JPG" },
    { thumb: "./images/gallery/thumbs/415A3491.JPG", full: "./images/gallery/415A3491.JPG" },
    { thumb: "./images/gallery/thumbs/415A3493.JPG", full: "./images/gallery/415A3493.JPG" },
  ];

  // Modal xem ảnh lớn
  const [selected, setSelected] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <>
      <section
        id="gallery"
        className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              Xem Ảnh Của Tụi Mình Nè
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Khoảnh Khắc
            </motion.h2>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <span className="text-rose-400 text-xl">💍</span>
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {images.slice(0, visibleCount).map((img, idx) => (
              <LazyGalleryImage
                key={img.full}
                src={img.thumb}
                alt={`Gallery ${idx + 1}`}
                onClick={() => {
                  setSelected(img.full);
                  trackEvent("gallery_modal_open", { image: img.full });
                }}
              />
            ))}
          </div>
          {/* Nút xem thêm */}
          {visibleCount < images.length && (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-2 rounded-full bg-rose-200 text-rose-700 font-semibold shadow hover:bg-rose-300 transition"
                onClick={() => {
                  setVisibleCount((c) => c + 12);
                  trackEvent("gallery_see_more", { currentCount: visibleCount });
                }}
              >
                Xem thêm ảnh
              </button>
            </div>
          )}
          {/* Gallery Section Heading */}
        </div>
        {/* Modal xem ảnh lớn */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={`${selected}`}
                alt="Selected"
                className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                loading="lazy"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
