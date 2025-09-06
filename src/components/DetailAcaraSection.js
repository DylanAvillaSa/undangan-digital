"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function DetailAcara({ T, background }) {
  const events = [
    {
      type: "Akad",
      date: "Sabtu, 25 November 2025",
      time: "08:00 WIB",
      location: "Masjid Al-Falah, Jakarta Selatan",
      dressCode: "Kemeja / Baju Melayu (warna: pastel)",
      icon: <Calendar size={24} />,
    },
    {
      type: "Resepsi",
      date: "Sabtu, 25 November 2025",
      time: "11:00 — 14:00 WIB",
      location: "Gedung Serbaguna — Jakarta Selatan",
      dressCode: "Parkir tersedia di basement gedung.",
      icon: <Calendar size={24} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='py-16 px-6 bg-white'>
      <h3
        className={`text-center font-[--playfair] text-3xl md:text-4xl mb-12 ${background[T].textMain}`}>
        Detail Acara
      </h3>

      <div className='max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between gap-16'>
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className='flex flex-col items-center text-center space-y-4'>
            <div className={`text-[${T.textMain}] mb-2`}>{event.icon}</div>

            <h4 className='text-2xl md:text-3xl font-[--greatVibes] text-center'>
              {event.type}
            </h4>

            <p className='text-lg md:text-xl text-gray-700 font-[--playfair]'>
              {event.date}
            </p>

            <p className='flex items-center justify-center gap-2 text-gray-600 text-lg'>
              <Clock size={18} /> {event.time}
            </p>

            <p className='flex items-center justify-center gap-2 text-gray-600 text-lg'>
              <MapPin size={18} /> {event.location}
            </p>

            {event.dressCode && (
              <p className='mt-2 text-gray-700 text-lg'>{event.dressCode}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
