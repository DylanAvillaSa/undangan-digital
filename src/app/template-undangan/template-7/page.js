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

// ===== Tema Royal Purple untuk Template 4 =====
const THEME = {
  pageBg:
    "bg-[radial-gradient(1200px_800px_at_10%_-10%,#f8e8ff,transparent),radial-gradient(1200px_800px_at_100%_0%,#ffe6f7,transparent)] bg-[#faf5ff]",
  headerGrad: "bg-gradient-to-r from-purple-900 via-fuchsia-600 to-pink-600",
  card: "backdrop-blur-lg bg-white/40",
  border: "border-purple-300",
  textMain: "text-purple-900",
  cta: "bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 hover:from-purple-600 hover:to-pink-400",
};

export default function GoldTemplateFour() {
  const rsvpRef = useRef(null);
  const audioRef = useRef(null);

  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [formData, setFormData] = useState({ nama: "", kehadiran: "" });

  const handleOpen = () => setOpened(true);

  useEffect(() => {
    if (opened && rsvpRef.current) {
      setTimeout(() => {
        rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 900);
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
      className={`min-h-screen ${THEME.pageBg} relative overflow-hidden`}
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
        className={`fixed z-40 bottom-4 right-4 p-3 rounded-full shadow-lg ${THEME.cta} text-white`}>
        {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
      </button>

      {/* Welcome Screen */}
      {!opened && (
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`rounded-3xl shadow-2xl p-8 max-w-lg w-full border ${THEME.card} ${THEME.border}`}>
            <p className='mb-3 text-sm text-gray-600'>We Invite You To</p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className='w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-pink-400 mb-5 shadow-lg'>
              <Image
                src='/images/tmp.jpg'
                width={176}
                height={176}
                alt='Pasangan'
                className='object-cover h-full w-full'
              />
            </motion.div>
            <h1
              className={`text-4xl font-extrabold mb-1 text-transparent bg-clip-text ${THEME.headerGrad}`}>
              Vidi & Riffany
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              Dengan penuh rasa syukur, kami mengundang Anda ke acara pernikahan
              kami.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className={`mt-6 text-white px-7 py-3 rounded-full shadow-xl ${THEME.cta}`}>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='pt-8'>
            <CountdownSection date='2025-11-25T08:00:00' />
          </motion.div>

          {/* Nama & Detail */}
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='text-center py-12 px-4'>
            <h2
              className={`text-3xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text ${THEME.headerGrad}`}>
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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center py-8 px-4'>
            <h3
              className={`font-bold text-lg md:text-xl mb-4 ${THEME.textMain}`}>
              Lokasi Acara
            </h3>
            <div
              className={`rounded-2xl overflow-hidden shadow-xl border ${THEME.border} max-w-3xl mx-auto`}>
              <iframe
                src='https://www.google.com/maps?q=-6.244669,106.800483&z=15&output=embed'
                width='100%'
                height='300'
                className='border-0'
                loading='lazy'
              />
            </div>
          </motion.section>

          {/* Galeri */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='py-10 px-4 md:px-6'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${THEME.textMain}`}>
              Galeri Foto
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto'>
              {[...Array(16)].map((_, i) => (
                <Image
                  key={i}
                  src={`/images/galeri/${i + 1}.jpg`}
                  width={400}
                  height={400}
                  alt={`Galeri ${i + 1}`}
                  className={`rounded-xl border ${THEME.border} object-cover w-full h-40 sm:h-44 md:h-48 shadow`}
                />
              ))}
            </div>
          </motion.section>

          {/* Video */}
          <motion.section
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='py-10 text-center px-4'>
            <h3
              className={`font-bold text-lg md:text-xl mb-4 ${THEME.textMain}`}>
              Video Kami
            </h3>
            <div
              className={`max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border ${THEME.border}`}>
              <video
                src='/videos/love-story.mp4'
                controls
                className='w-full h-auto'
              />
            </div>
          </motion.section>

          {/* Amplop Digital */}
          <motion.section
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center py-10 px-4'>
            <h3
              className={`font-bold text-lg md:text-xl mb-4 ${THEME.textMain}`}>
              Amplop Digital
            </h3>
            <div
              className={`max-w-xl mx-auto p-6 rounded-2xl shadow-xl border ${THEME.border} ${THEME.card}`}>
              <p className='text-sm text-gray-700 mb-4'>
                Dengan segala hormat, jika berkenan memberikan hadiah, Anda
                dapat mengirimkan melalui e-wallet.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <button
                  className={`px-5 py-2 rounded-full text-white ${THEME.cta}`}>
                  Kirim via E-Wallet
                </button>
                <button className='px-5 py-2 rounded-full border bg-white hover:bg-gray-50'>
                  Salin No. Rekening
                </button>
              </div>
            </div>
          </motion.section>

          {/* Ucapan & Doa */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${THEME.textMain}`}>
              Ucapan & Doa
            </h3>
            <div className='space-y-4 max-w-2xl mx-auto'>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl shadow border ${THEME.border} bg-white`}>
                  <p className='font-semibold'>{msg.name}</p>
                  <p className='text-xs text-gray-500 mb-2'>{msg.time}</p>
                  <p className='text-gray-800'>{msg.message}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* RSVP */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='py-12 px-4'
            ref={rsvpRef}>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${THEME.textMain}`}>
              Konfirmasi Kehadiran
            </h3>
            <form
              onSubmit={handleSubmit}
              className={`max-w-md mx-auto flex flex-col gap-3 p-6 rounded-2xl border ${THEME.border} ${THEME.card} shadow`}>
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
                className={`mt-1 py-3 rounded-full text-white shadow ${THEME.cta}`}>
                Kirim Konfirmasi
              </button>
            </form>
          </motion.section>
        </div>
      )}
    </main>
  );
}
