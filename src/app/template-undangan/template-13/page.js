"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle, PauseCircle } from "lucide-react";
import CountdownSection from "@/components/counter/CountDown";

// Dummy Video Ucapan
const videoMessages = [
  {
    name: "Andi & Keluarga",
    url: "/videos/ucapan1.mp4",
  },
  {
    name: "Sinta",
    url: "/videos/ucapan2.mp4",
  },
];

// ===== Variasi Tema Platinum =====
const THEMES = {
  royal: {
    name: "Royal Glow",
    pageBg:
      "bg-[radial-gradient(1200px_800px_at_0%_0%,#fff0f5,transparent),radial-gradient(1200px_800px_at_100%_100%,#ffe4ec,transparent)] bg-[#fff8fa]",
    headerGrad: "bg-gradient-to-r from-rose-800 via-rose-600 to-pink-500",
    card: "bg-gradient-to-br from-[#fff0f7] via-[#ffe1ec] to-[#ffd1e5]",
    border: "border-rose-400",
    textMain: "text-rose-900",
    cta: "bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-500 hover:from-rose-500 hover:to-pink-400",
    chip: "bg-rose-100 text-rose-800",
  },
  diamond: {
    name: "Diamond Shine",
    pageBg:
      "bg-[radial-gradient(1200px_800px_at_0%_0%,#f0faff,transparent),radial-gradient(1200px_800px_at_100%_100%,#e0f7ff,transparent)] bg-[#f7fdff]",
    headerGrad: "bg-gradient-to-r from-cyan-700 via-blue-600 to-indigo-500",
    card: "bg-gradient-to-br from-[#f0fbff] via-[#e0f5ff] to-[#d0f0ff]",
    border: "border-cyan-300",
    textMain: "text-cyan-900",
    cta: "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 hover:from-blue-500 hover:to-cyan-400",
    chip: "bg-cyan-100 text-cyan-800",
  },
  emerald: {
    name: "Emerald Luxe",
    pageBg:
      "bg-[radial-gradient(1200px_800px_at_0%_0%,#f6fff3,transparent),radial-gradient(1200px_800px_at_100%_100%,#eaffea,transparent)] bg-[#fbfffa]",
    headerGrad: "bg-gradient-to-r from-green-800 via-emerald-600 to-teal-500",
    card: "bg-gradient-to-br from-[#f2fff0] via-[#e3ffe0] to-[#d5ffd1]",
    border: "border-emerald-400",
    textMain: "text-emerald-900",
    cta: "bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-500 hover:to-green-400",
    chip: "bg-emerald-100 text-emerald-800",
  },
};

export default function PlatinumTemplateOne() {
  const rsvpRef = useRef(null);
  const audioRef = useRef(null);

  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [theme, setTheme] = useState("royal");
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
      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* Musik Latar + Controller */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        src='/music/bg-platinum.mp3'
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
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`rounded-3xl shadow-2xl p-10 max-w-lg w-full border ${T.card} ${T.border}`}>
            <p className='mb-3 text-sm text-gray-600'>Wedding Celebration</p>
            <motion.div
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1 }}
              className='w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-rose-400 mb-5 shadow-xl'>
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
            <motion.button
              whileHover={{ scale: 1.08, rotate: 1 }}
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='pt-8'>
            <CountdownSection date='2025-12-01T08:00:00' />
          </motion.div>

          {/* Detail Pasangan */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center py-12 px-4'>
            <h2
              className={`text-3xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text ${T.headerGrad}`}>
              Vidi & Riffany
            </h2>
            <p className='text-sm md:text-base max-w-md mx-auto text-gray-700'>
              Minggu, 1 Desember 2025
              <br />
              Hotel Luxury Grand Ballroom – Jakarta
            </p>
          </motion.section>

          {/* Lokasi */}
          <motion.section
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='text-center py-8 px-4'>
            <h3 className={`font-bold text-lg md:text-xl mb-4 ${T.textMain}`}>
              Lokasi Acara
            </h3>
            <div
              className={`rounded-2xl overflow-hidden shadow-xl border ${T.border} max-w-3xl mx-auto`}>
              <iframe
                src='https://www.google.com/maps?q=-6.21462,106.84513&z=15&output=embed'
                width='100%'
                height='300'
                className='border-0'
                loading='lazy'
              />
            </div>
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className='py-10 px-4 md:px-6'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Galeri Foto
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto'>
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}>
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

          {/* Video Ucapan */}
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Ucapan Video dari Sahabat & Keluarga
            </h3>
            <div className='grid gap-6 md:grid-cols-2 max-w-4xl mx-auto'>
              {videoMessages.map((vid, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`p-4 rounded-2xl shadow border ${T.border} ${T.card}`}>
                  <p className='font-semibold mb-2'>{vid.name}</p>
                  <video
                    src={vid.url}
                    controls
                    className='w-full rounded-xl shadow'
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* RSVP */}
          <motion.section
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white'
                required
              />
              <select
                name='kehadiran'
                value={formData.kehadiran}
                onChange={handleChange}
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white'
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
