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

// ===== Variasi Warna Baru Template 9 =====
const THEMES = {
  turquoise: {
    name: "Turquoise Wave",
    pageBg:
      "bg-[radial-gradient(1000px_700px_at_10%_-10%,#e6fcff,transparent),radial-gradient(1000px_700px_at_120%_0%,#ccf7ff,transparent)] bg-[#f5feff]",
    headerGrad: "bg-gradient-to-r from-cyan-800 via-teal-600 to-sky-500",
    card: "bg-gradient-to-br from-[#eaffff] via-[#d9fcff] to-[#c6f9ff]",
    border: "border-cyan-300",
    textMain: "text-cyan-900",
    cta: "bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500 hover:from-teal-500 hover:to-cyan-400",
    chip: "bg-cyan-100 text-cyan-800",
  },
  magenta: {
    name: "Magenta Dream",
    pageBg:
      "bg-[radial-gradient(1000px_700px_at_10%_-10%,#ffe6fa,transparent),radial-gradient(1000px_700px_at_120%_0%,#ffd6f5,transparent)] bg-[#fff5fb]",
    headerGrad: "bg-gradient-to-r from-fuchsia-800 via-pink-600 to-rose-500",
    card: "bg-gradient-to-br from-[#fff0fb] via-[#ffe4f7] to-[#ffd9f3]",
    border: "border-fuchsia-300",
    textMain: "text-fuchsia-900",
    cta: "bg-gradient-to-r from-pink-600 via-fuchsia-500 to-rose-500 hover:from-pink-500 hover:to-fuchsia-400",
    chip: "bg-pink-100 text-pink-800",
  },
  olive: {
    name: "Olive Garden",
    pageBg:
      "bg-[radial-gradient(1000px_700px_at_10%_-10%,#faffeb,transparent),radial-gradient(1000px_700px_at_120%_0%,#f5ffd6,transparent)] bg-[#fdfff5]",
    headerGrad: "bg-gradient-to-r from-lime-900 via-olive-700 to-green-600",
    card: "bg-gradient-to-br from-[#fafff0] via-[#f4ffe0] to-[#ecffd1]",
    border: "border-lime-300",
    textMain: "text-lime-900",
    cta: "bg-gradient-to-r from-lime-700 via-green-600 to-olive-500 hover:from-lime-600 hover:to-green-500",
    chip: "bg-lime-100 text-lime-800",
  },
};

export default function GoldTemplateNine() {
  const rsvpRef = useRef(null);
  const audioRef = useRef(null);

  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [theme, setTheme] = useState("turquoise");
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
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
          <motion.div
            initial={{ scale: 0.5, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className={`rounded-3xl shadow-2xl p-8 max-w-lg w-full border ${T.card} ${T.border}`}>
            <p className='mb-3 text-sm text-gray-600'>We Invite You To</p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
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
              whileHover={{ scale: 1.08, rotate: 2 }}
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
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='pt-8'>
            <CountdownSection date='2025-11-25T08:00:00' />
          </motion.div>

          {/* Nama & Detail */}
          <motion.section
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, rotate: -15, scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
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

          {/* Gallery (bounce staggered) */}
          <motion.section
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
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
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
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

          {/* Ucapan & Doa (fade diagonal) */}
          <motion.section
            initial={{ opacity: 0, x: -80, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                  initial={{
                    opacity: 0,
                    x: i % 2 === 0 ? -100 : 100,
                    y: 50,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white'
                required
              />
              <select
                name='kehadiran'
                value={formData.kehadiran}
                onChange={handleChange}
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white'
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
