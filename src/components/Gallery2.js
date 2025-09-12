"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Foto slider utama
  const slides = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  ];

  // Foto gallery grid
  const gallery = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* ===== Slider Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-14 px-4"
      >
        <h2 className="text-center font-[var(--font-vibes)] text-3xl md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
          Our Moments
        </h2>

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`slide-${i}`}
                width={1200}
                height={800}
                className="object-cover w-full flex-shrink-0"
              />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={() =>
              setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1))
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            ‹
          </button>
          <button
            onClick={() =>
              setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1))
            }
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            ›
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => setCurrentSlide(i)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== Grid Gallery Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-14 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                width={600}
                height={600}
                className="object-cover w-full h-48 md:h-56 group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                Precious Moment
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
