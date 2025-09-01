"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle, PauseCircle } from "lucide-react";
import CountdownSection from "@/components/counter/CountDown";

// ===== Dummy Messages (Ucapan & Doa) =====
const messages = [
  {
    name: "Team Our Journey",
    time: "2025-08-09 16:17:53",
    message: "Semoga acaranya berjalan dengan lancar dan sesuai rencana 🙏",
  },
  {
    name: "Budi Santoso",
    time: "2025-08-09 17:45:10",
    message: "Selamat menempuh hidup baru, semoga bahagia selalu ❤️",
  },
];

// ===== Variasi Warna (3 Tema Baru) =====
const THEMES = {
  emerald: {
    name: "Emerald Glow",
    pageBg:
      "bg-[radial-gradient(1000px_600px_at_10%_-10%,#e6fff5,transparent),radial-gradient(1000px_600px_at_120%_0%,#ccffeb,transparent)] bg-[#f5fffb]",
    headerGrad: "bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600",
    card: "bg-gradient-to-br from-[#ecfff7] via-[#e0fff3] to-[#d9fff0]",
    border: "border-emerald-300",
    textMain: "text-emerald-900",
    cta: "bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400",
    chip: "bg-emerald-100 text-emerald-800",
  },
  bronze: {
    name: "Bronze Classic",
    pageBg:
      "bg-[radial-gradient(1000px_600px_at_10%_-10%,#fff3e6,transparent),radial-gradient(1000px_600px_at_120%_0%,#ffe6cc,transparent)] bg-[#fffaf5]",
    headerGrad: "bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600",
    card: "bg-gradient-to-br from-[#fff7ec] via-[#fff1e0] to-[#ffebd6]",
    border: "border-amber-300",
    textMain: "text-amber-900",
    cta: "bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 hover:from-orange-500 hover:to-amber-400",
    chip: "bg-amber-100 text-amber-800",
  },
  ocean: {
    name: "Ocean Breeze",
    pageBg:
      "bg-[radial-gradient(1000px_600px_at_10%_-10%,#e6f3ff,transparent),radial-gradient(1000px_600px_at_120%_0%,#d6f0ff,transparent)] bg-[#f5fbff]",
    headerGrad: "bg-gradient-to-r from-sky-800 via-cyan-700 to-blue-600",
    card: "bg-gradient-to-br from-[#f0faff] via-[#e0f6ff] to-[#d9f3ff]",
    border: "border-sky-300",
    textMain: "text-sky-900",
    cta: "bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 hover:from-sky-500 hover:to-blue-400",
    chip: "bg-sky-100 text-sky-800",
  },
};

export default function GoldTemplateSix() {
  const rsvpRef = useRef(null);
  const audioRef = useRef(null);

  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [theme, setTheme] = useState("emerald");
  const [formData, setFormData] = useState({ nama: "", kehadiran: "" });

  const T = THEMES[theme];

  const handleOpen = () => setOpened(true);

  useEffect(() => {
    if (opened && rsvpRef.current) {
      setTimeout(() => {
        rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 800);
    }
  }, [opened]);

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Konfirmasi kehadiran terkirim ✅");
    setFormData({ nama: "", kehadiran: "" });
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main
      className={`min-h-screen ${T.pageBg} relative overflow-hidden`}
      style={{ fontFamily: "'Playfair Display', serif" }}>
      {/* Musik Latar + Controller */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        src='/music/bg-wedding.mp3'
        className='hidden'
      />
      <button
        onClick={toggleAudio}
        className={`fixed z-40 bottom-4 right-4 p-3 rounded-full shadow-lg ${T.cta} text-white`}>
        {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
      </button>

      {/* Theme Switcher */}
      <div className='fixed top-4 left-1/2 -translate-x-1/2 z-30'>
        <div className='flex gap-2 p-1 rounded-full bg-white/70 backdrop-blur shadow'>
          {Object.entries(THEMES).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`px-3 py-1 text-xs md:text-sm rounded-full border ${
                theme === key
                  ? `${T.chip} font-semibold`
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}>
              {val.name}
            </button>
          ))}
        </div>
      </div>

      {/* Welcome Screen */}
      {!opened && (
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
          <motion.div
            initial={{ scale: 0.8, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className={`rounded-3xl shadow-2xl p-8 max-w-lg w-full border ${T.card} ${T.border}`}>
            <p className='mb-3 text-sm text-gray-600'>We Invite You To</p>
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className='w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 mb-5 shadow-xl'>
              <Image
                src='/images/tmp.jpg'
                width={176}
                height={176}
                alt='Pasangan'
                className='object-cover h-full w-full'
              />
            </motion.div>
            <h1
              className={`text-4xl font-extrabold mb-1 text-transparent bg-clip-text ${T.headerGrad}`}>
              Vidi & Riffany
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              Dengan penuh rasa syukur, kami mengundang Anda ke acara pernikahan
              kami.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className={`mt-6 text-white px-7 py-3 rounded-full shadow-xl ${T.cta}`}>
              Buka Undangan ✨
            </motion.button>
          </motion.div>
        </motion.section>
      )}

      {/* UNDANGAN LENGKAP */}
      {opened && (
        <div className='relative z-10'>
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='pt-8'>
            <CountdownSection date='2025-11-25T08:00:00' />
          </motion.div>

          {/* Nama & Detail */}
          <motion.section
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className='text-center py-12 px-4'>
            <h2
              className={`text-3xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text ${T.headerGrad}`}>
              Vidi & Riffany
            </h2>
            <p className='text-sm md:text-base max-w-md mx-auto text-gray-700'>
              Sabtu, 25 November 2025
              <br />
              Gedung Serbaguna – Jakarta Selatan
            </p>
          </motion.section>

          {/* Lokasi */}
          <motion.section
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='text-center py-8 px-4'>
            <h3 className={`font-bold text-lg md:text-xl mb-4 ${T.textMain}`}>
              Lokasi Acara
            </h3>
            <div
              className={`rounded-2xl overflow-hidden shadow-xl border ${T.border} max-w-3xl mx-auto`}>
              <iframe
                src='https://www.google.com/maps?q=-6.244669,106.800483&z=15&output=embed'
                width='100%'
                height='300'
                className='border-0'
                loading='lazy'
              />
            </div>
          </motion.section>

          {/* Gallery (animasi zigzag) */}
          <motion.section
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className='py-10 px-4 md:px-6'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Galeri Foto
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto'>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8 }}>
                  <Image
                    src={`/images/galeri/${i + 1}.jpg`}
                    width={400}
                    height={400}
                    alt={`Galeri ${i + 1}`}
                    className={`rounded-xl border ${T.border} object-cover w-full h-40 sm:h-44 md:h-48 shadow`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Ucapan & Doa */}
          <motion.section
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Ucapan & Doa
            </h3>
            <div className='space-y-4 max-w-2xl mx-auto'>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl shadow border ${T.border} bg-white`}>
                  <p className='font-semibold'>{msg.name}</p>
                  <p className='text-xs text-gray-500 mb-2'>{msg.time}</p>
                  <p className='text-gray-800'>{msg.message}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* RSVP */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='py-12 px-4'
            ref={rsvpRef}>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Konfirmasi Kehadiran
            </h3>
            <form
              onSubmit={handleSubmit}
              className={`max-w-md mx-auto flex flex-col gap-3 p-6 rounded-2xl border ${T.border} ${T.card} shadow`}>
              <input
                type='text'
                name='nama'
                value={formData.nama}
                onChange={handleChange}
                placeholder='Nama Anda'
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400 bg-white'
                required
              />
              <select
                name='kehadiran'
                value={formData.kehadiran}
                onChange={handleChange}
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400 bg-white'
                required>
                <option value=''>--Pilih Kehadiran--</option>
                <option value='hadir'>Hadir</option>
                <option value='tidak hadir'>Tidak Hadir</option>
              </select>
              <button
                type='submit'
                className={`mt-1 py-3 rounded-full text-white shadow ${T.cta}`}>
                Kirim Konfirmasi
              </button>
            </form>
          </motion.section>
        </div>
      )}
    </main>
  );
}
