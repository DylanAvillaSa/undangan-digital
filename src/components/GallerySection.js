"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Random Unsplash images
  const slides = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* ===== Photo Slider ===== */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='py-10 px-4'>
        <h3 className='text-center font-bold text-lg md:text-xl mb-6'>
          Gallery
        </h3>
        <div className='relative max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg'>
          <div
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`slide-${i}`}
                width={900}
                height={600}
                className='object-cover w-full flex-shrink-0'
              />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={() =>
              setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1))
            }
            className='absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white'>
            ‹
          </button>
          <button
            onClick={() =>
              setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1))
            }
            className='absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white'>
            ›
          </button>

          {/* Indicators */}
          <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== Photo Gallery ===== */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='py-10 px-4'>
        <div className='max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='overflow-hidden rounded-xl shadow-lg'>
              <Image
                src={src}
                alt={`gallery-${i}`}
                width={600}
                height={600}
                className='object-cover w-full h-40 md:h-52 hover:scale-110 transition-transform duration-500'
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
