"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle, PauseCircle } from "lucide-react";
import CountdownSection from "@/components/counter/CountDown";

// Dummy Messages
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

// ===== Variasi Warna Baru Template 7 =====
const THEMES = {
  purple: {
    name: "Royal Purple",
    pageBg:
      "bg-[radial-gradient(800px_500px_at_10%_-10%,#f5e6ff,transparent),radial-gradient(800px_500px_at_120%_0%,#e6d6ff,transparent)] bg-[#faf5ff]",
    headerGrad: "bg-gradient-to-r from-purple-800 via-violet-600 to-pink-600",
    card: "bg-gradient-to-br from-[#f9f0ff] via-[#f4e6ff] to-[#eed9ff]",
    border: "border-violet-300",
    textMain: "text-purple-900",
    cta: "bg-gradient-to-r from-violet-700 via-purple-600 to-pink-500 hover:from-purple-600 hover:to-pink-400",
    chip: "bg-purple-100 text-purple-800",
  },
  sunset: {
    name: "Sunset Glow",
    pageBg:
      "bg-[radial-gradient(800px_500px_at_10%_-10%,#fff1e6,transparent),radial-gradient(800px_500px_at_120%_0%,#ffe6f0,transparent)] bg-[#fffaf7]",
    headerGrad: "bg-gradient-to-r from-pink-700 via-red-600 to-orange-500",
    card: "bg-gradient-to-br from-[#fff6f0] via-[#ffeae2] to-[#ffdcd2]",
    border: "border-rose-300",
    textMain: "text-rose-900",
    cta: "bg-gradient-to-r from-red-600 via-pink-500 to-orange-400 hover:from-red-500 hover:to-pink-400",
    chip: "bg-rose-100 text-rose-800",
  },
  forest: {
    name: "Forest Calm",
    pageBg:
      "bg-[radial-gradient(800px_500px_at_10%_-10%,#e9ffe6,transparent),radial-gradient(800px_500px_at_120%_0%,#d6ffe0,transparent)] bg-[#f5fff7]",
    headerGrad: "bg-gradient-to-r from-green-900 via-emerald-700 to-lime-600",
    card: "bg-gradient-to-br from-[#efffec] via-[#e0ffe0] to-[#d9ffd9]",
    border: "border-green-300",
    textMain: "text-green-900",
    cta: "bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 hover:from-emerald-500 hover:to-lime-400",
    chip: "bg-green-100 text-green-800",
  },
};

export default function GoldTemplateSeven() {
  const rsvpRef = useRef(null);
  const audioRef = useRef(null);

  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [theme, setTheme] = useState("purple");
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`rounded-3xl shadow-2xl p-8 max-w-lg w-full border ${T.card} ${T.border}`}>
            <p className='mb-3 text-sm text-gray-600'>We Invite You To</p>
            <motion.div
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
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
            <motion.button
              whileHover={{ scale: 1.08 }}
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
            <CountdownSection date='2025-11-25T08:00:00' />
          </motion.div>

          {/* Nama & Detail */}
          <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
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

          {/* Gallery (rotate + staggered) */}
          <motion.section
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
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
                    hidden: { opacity: 0, rotate: i % 2 === 0 ? -15 : 15 },
                    visible: { opacity: 1, rotate: 0 },
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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Ucapan & Doa
            </h3>
            <div className='space-y-4 max-w-2xl mx-auto'>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`p-4 rounded-2xl shadow border ${T.border} bg-white`}>
                  <p className='font-semibold'>{msg.name}</p>
                  <p className='text-xs text-gray-500 mb-2'>{msg.time}</p>
                  <p className='text-gray-800'>{msg.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* RSVP */}
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
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
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white'
                required
              />
              <select
                name='kehadiran'
                value={formData.kehadiran}
                onChange={handleChange}
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white'
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
