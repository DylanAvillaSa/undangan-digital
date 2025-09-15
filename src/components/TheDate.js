"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TheDate({ background, theme }) {
  // Hitung countdown
  const targetDate = new Date("2025-05-14T19:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-serif text-center tracking-wide mb-6"
      >
        THE DATE
      </motion.h2>

      {/* Countdown Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`bg-gradient-to-r from-${background[theme].chip} to-${background[theme].cta} text-white rounded-lg shadow-md flex justify-around py-4 text-center mb-10`}
      >
        <div>
          <p className="text-3xl font-bold">{timeLeft.days}</p>
          <p className="text-sm">Day(s)</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.hours}</p>
          <p className="text-sm">Hour(s)</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.minutes}</p>
          <p className="text-sm">Minute(s)</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.seconds}</p>
          <p className="text-sm">Second(s)</p>
        </div>
      </motion.div>
    </>
  );
}
