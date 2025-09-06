"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  PlayCircle,
  PauseCircle,
  Share2,
  Copy,
  Sun,
  Moon,
  Heart,
  MapPin,
  Calendar,
  Gift,
} from "lucide-react";
import CountdownSection from "@/components/counter/CountDown";

// ===== Dummy Messages (Ucapan & Doa) =====
const initialMessages = [
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

// ===== Variasi Warna (3 Tema) =====
const THEMES = {
  royal: {
    name: "Royal Gold",
    pageBg:
      "bg-[radial-gradient(1200px_600px_at_20%_-10%,#fff6d5,transparent),radial-gradient(1200px_600px_at_120%_10%,#ffe6a7,transparent)] bg-[#fff9ec]",
    headerGrad: "bg-gradient-to-r from-amber-700 via-yellow-700 to-orange-700",
    card: "bg-gradient-to-br from-[#fff6da] via-[#fff0c5] to-[#ffe9a8]",
    border: "border-amber-400",
    textMain: "text-amber-900",
    cta: "bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 hover:from-amber-500 hover:to-orange-400",
    chip: "bg-amber-100 text-amber-800",
  },
  rose: {
    name: "Rose Gold",
    pageBg:
      "bg-[radial-gradient(1200px_600px_at_10%_-10%,#ffe9ef,transparent),radial-gradient(1200px_600px_at_110%_0%,#ffe2d0,transparent)] bg-[#fff7f6]",
    headerGrad: "bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700",
    card: "bg-gradient-to-br from-[#fff0f2] via-[#ffe6e9] to-[#ffe2d6]",
    border: "border-rose-300",
    textMain: "text-rose-900",
    cta: "bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 hover:from-rose-500 hover:to-amber-400",
    chip: "bg-rose-100 text-rose-800",
  },
  emerald: {
    name: "Emerald Gold",
    pageBg:
      "bg-[radial-gradient(1200px_600px_at_-10%_10%,#d1ffe5,transparent),radial-gradient(1200px_600px_at_110%_0%,#eaffd1,transparent)] bg-[#f7fff5]",
    headerGrad: "bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700",
    card: "bg-gradient-to-br from-[#effff7] via-[#e7ffe7] to-[#f5ffe0]",
    border: "border-emerald-300",
    textMain: "text-emerald-900",
    cta: "bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 hover:from-emerald-500 hover:to-amber-400",
    chip: "bg-emerald-100 text-emerald-800",
  },
};

export default function GoldTemplate() {
  const rsvpRef = useRef(null);
  const audioRef = useRef(null);

  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [theme, setTheme] = useState("royal");
  const [dark, setDark] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    kehadiran: "",
  });

  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem("msgs_v1");
      return raw ? JSON.parse(raw) : initialMessages;
    } catch (e) {
      return initialMessages;
    }
  });

  const [guestForm, setGuestForm] = useState({ name: "", message: "" });

  const T = THEMES[theme];

  const handleOpen = () => setOpened(true);

  useEffect(() => {
    if (opened && rsvpRef.current) {
      setTimeout(() => {
        rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 900);
    }
  }, [opened]);

  useEffect(() => {
    localStorage.setItem("msgs_v1", JSON.stringify(messages));
  }, [messages]);

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

  const addGuestMessage = (e) => {
    e.preventDefault();
    if (!guestForm.name || !guestForm.message) return;
    const newMsg = {
      name: guestForm.name,
      time: new Date().toISOString().slice(0, 19).replace("T", " "),
      message: guestForm.message,
    };
    setMessages((s) => [newMsg, ...s]);
    setGuestForm({ name: "", message: "" });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin ✅");
    } catch (e) {
      alert("Gagal menyalin link. Coba manual.");
    }
  };

  const shareWA = () => {
    const text = encodeURIComponent(
      "Undangan pernikahan Vidi & Riffany - Cek di: " + window.location.href
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  // simple QR via google chart API (replace coordinates / text if needed)
  const qrSrc = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(
    window?.location?.href || "https://example.com"
  )}`;

  return (
    <main
      className={`min-h-screen ${T.pageBg} relative overflow-hidden ${
        dark ? "dark" : ""
      }`}
      style={{ fontFamily: "'Playfair Display', serif" }}>
      {/* Global wrapper for dark mode background */}
      <div className={`${dark ? "bg-slate-900 text-slate-100" : ""}`}></div>

      {/* ===== Musik Latar + Controller ===== */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        src='/music/bg-wedding.mp3'
        className='hidden'
      />

      {/* Floating controls: audio, theme, dark */}
      <div className='fixed z-40 bottom-4 right-4 flex flex-col gap-3 items-end'>
        <button
          onClick={toggleAudio}
          className={`p-3 rounded-full shadow-lg ${T.cta} text-white flex items-center gap-2`}
          aria-label='Toggle Music'>
          {isPlaying ? <PauseCircle size={20} /> : <PlayCircle size={20} />}
          <span className='hidden md:inline text-sm'>Music</span>
        </button>
        <button
          onClick={() => setDark((d) => !d)}
          className='p-3 rounded-full shadow-lg bg-white'
          aria-label='Toggle Dark'>
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={copyLink}
          className='p-3 rounded-full shadow-lg bg-white'
          aria-label='Copy Link'>
          <Copy size={18} />
        </button>
      </div>

      {/* ===== Ornamen Background (Parallax-ish) ===== */}
      <Image
        src='/asset/ornament-gold-1.png'
        alt='ornament'
        width={220}
        height={220}
        className='pointer-events-none select-none opacity-70 absolute -top-6 -left-6 md:w-64'
      />
      <Image
        src='/asset/ornament-gold-2.png'
        alt='ornament'
        width={240}
        height={240}
        className='pointer-events-none select-none opacity-60 absolute -top-10 right-0 md:w-72'
      />

      {/* ===== Theme Switcher (Variasi Warna 3) ===== */}
      <div className='fixed top-4 left-1/2 -translate-x-1/2 z-30'>
        <div className='flex gap-2 p-1 rounded-full bg-white/70 backdrop-blur shadow'>
          {Object.entries(THEMES).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`px-3 py-1 text-xs md:text-sm rounded-full border ${
                T.border
              } ${
                theme === key
                  ? `${T.chip} font-semibold`
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              aria-label={`Tema ${val.name}`}
              title={val.name}>
              {val.name}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Welcome Screen ===== */}
      {!opened && (
        <motion.section
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className={`rounded-3xl shadow-2xl p-8 max-w-lg w-full border ${T.card} ${T.border}`}>
            <p className='mb-3 text-sm text-gray-600'>We Invite You To</p>
            <div className='w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 mb-5 shadow-lg'>
              <Image
                src='/images/tmp.jpg'
                width={176}
                height={176}
                alt='Pasangan'
                className='object-cover h-full w-full'
              />
            </div>
            <h1
              className={`text-4xl font-extrabold mb-1 text-transparent bg-clip-text ${T.headerGrad}`}>
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
              className={`mt-6 text-white px-7 py-3 rounded-full shadow-xl ${T.cta}`}>
              Buka Undangan ✨
            </motion.button>
          </motion.div>
        </motion.section>
      )}

      {/* ===== UNDANGAN LENGKAP ===== */}
      {opened && (
        <div className='relative z-10 pb-24'>
          {/* introduction section */}
          <div className='w-full flex justify-center mt-20'>
            <Image
              src='/images/tmp.jpg'
              width={1920}
              height={1080}
              alt='Pasangan'
              className='object-cover h-[250px] rounded-md w-[250px]'
            />
          </div>

          {/* Nama & Detail */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center py-8 px-4 mt-6'>
            <h1
              className={`text-xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text ${T.headerGrad}`}>
              The Wedding Of
            </h1>
            <h2
              className={`text-2xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text ${T.headerGrad}`}>
              Vidi & Riffany
            </h2>
            <p className='text-sm md:text-base max-w-md mx-auto text-gray-700'>
              Sabtu, 25 November 2025
              <br />
              Gedung Serbaguna – Jakarta Selatan
            </p>

            {/* quick actions */}
            <div className='mt-4 flex gap-3 justify-center'>
              <button
                onClick={shareWA}
                className={`px-4 py-2 rounded-full text-white shadow ${T.cta} flex items-center gap-2`}>
                <Share2 size={16} /> Share
              </button>
              <button
                onClick={copyLink}
                className='px-4 py-2 rounded-full border bg-white hover:bg-gray-50 flex items-center gap-2'>
                <Copy size={14} /> Salin Link
              </button>
            </div>
          </motion.section>

          {/* Countdown */}
          <div className='px-4'>
            <CountdownSection date='2025-11-25T08:00:00' />
          </div>

          {/* Profile Mempelai */}
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='py-10 px-4'>
            <h3
              className={`font-bold text-lg md:text-xl mb-6 text-center ${T.textMain}`}>
              Profil Mempelai
            </h3>

            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
              <div
                className={`p-6 rounded-2xl border ${T.border} ${T.card} shadow`}>
                <Image
                  src='/images/groom.jpg'
                  alt='Groom'
                  width={500}
                  height={500}
                  className='rounded-xl w-full h-56 object-cover mb-4'
                />
                <h4 className='font-semibold text-lg'>Vidi</h4>
                <p className='text-sm text-gray-700'>
                  Putra kedua dari Bapak X dan Ibu Y.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${T.border} ${T.card} shadow`}>
                <Image
                  src='/images/bride.jpg'
                  alt='Bride'
                  width={500}
                  height={500}
                  className='rounded-xl w-full h-56 object-cover mb-4'
                />
                <h4 className='font-semibold text-lg'>Riffany</h4>
                <p className='text-sm text-gray-700'>
                  Putri ketiga dari Bapak A dan Ibu B.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Love Story Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Our Love Story
            </h3>
            <div className='max-w-3xl mx-auto space-y-6'>
              {[
                {
                  title: "Kenalan",
                  when: "2018",
                  text: "Ketemu di kafe dekat kampus.",
                },
                {
                  title: "Jadian",
                  when: "2019",
                  text: "Mulai pacaran setelah beberapa bulan PDKT.",
                },
                {
                  title: "Lamaran",
                  when: "2024",
                  text: "Lamaran sederhana di rumah keluarga.",
                },
                {
                  title: "Menikah",
                  when: "2025",
                  text: "Akhirnya resmi mengikat janji.",
                  highlight: true,
                },
              ].map((it, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className={`p-4 rounded-xl border ${T.border} ${T.card} shadow`}>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h4 className='font-semibold'>{it.title}</h4>
                      <p className='text-xs text-gray-500'>{it.when}</p>
                    </div>
                    {it.highlight && (
                      <Heart
                        size={20}
                        className='text-red-500'
                      />
                    )}
                  </div>
                  <p className='mt-2 text-sm text-gray-700'>{it.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Detail Acara (Akad & Resepsi) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Detail Acara
            </h3>
            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div
                className={`p-6 rounded-2xl border ${T.border} ${T.card} shadow`}>
                <h4 className='font-semibold flex items-center gap-2'>
                  <Calendar size={18} /> Akad
                </h4>
                <p className='text-sm text-gray-700 mt-2'>
                  Sabtu, 25 November 2025 — 08:00 WIB
                </p>
                <p className='text-sm text-gray-700 mt-1 flex items-center gap-2'>
                  <MapPin size={14} /> Masjid Al-Falah, Jakarta Selatan
                </p>
                <p className='text-sm text-gray-700 mt-2'>
                  Dress Code: Kemeja / Baju Melayu (warna: pastel)
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${T.border} ${T.card} shadow`}>
                <h4 className='font-semibold flex items-center gap-2'>
                  <Calendar size={18} /> Resepsi
                </h4>
                <p className='text-sm text-gray-700 mt-2'>
                  Sabtu, 25 November 2025 — 11:00 — 14:00 WIB
                </p>
                <p className='text-sm text-gray-700 mt-1 flex items-center gap-2'>
                  <MapPin size={14} /> Gedung Serbaguna — Jakarta Selatan
                </p>
                <p className='text-sm text-gray-700 mt-2'>
                  Parkir tersedia di basement gedung.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Dress Code & Info Tambahan */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center py-8 px-4'>
            <h3 className={`font-bold text-lg md:text-xl mb-4 ${T.textMain}`}>
              Dress Code & Info
            </h3>
            <p className='max-w-2xl mx-auto text-sm text-gray-700'>
              Dress code: Elegant Casual (warna pastel) — Mohon datang tepat
              waktu. Jika membawa anak, pastikan diawasi.
            </p>
          </motion.section>

          {/* Link Streaming */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center py-10 px-4'>
            <h3 className={`font-bold text-lg md:text-xl mb-3 ${T.textMain}`}>
              Tonton Secara Online
            </h3>
            <a
              href='https://youtube.com/stream-link'
              target='_blank'
              className={`inline-block px-5 py-3 rounded-full text-white shadow-lg ${T.cta}`}
              rel='noreferrer'>
              Klik untuk streaming via YouTube
            </a>
          </motion.section>

          {/* Wishlist / Gift Registry */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-4 ${T.textMain}`}>
              Amplop & Gift Registry
            </h3>
            <div className='max-w-xl mx-auto p-6 rounded-2xl shadow-xl border ${T.border} ${T.card}'>
              <p className='text-sm text-gray-700 mb-4'>
                Jika berkenan, kirim amplop digital atau cek list wishlist kami.
              </p>
              <div className='flex gap-3 justify-center'>
                <button
                  className={`px-5 py-2 rounded-full text-white ${T.cta}`}>
                  Kirim via E-Wallet
                </button>
                <button className='px-5 py-2 rounded-full border bg-white hover:bg-gray-50 flex items-center gap-2'>
                  <Gift size={16} /> Buka Wishlist
                </button>
              </div>
            </div>
          </motion.section>

          {/* QR + Map Embed + Gallery small */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='py-10 px-4'>
            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div
                className={`p-4 rounded-2xl border ${T.border} ${T.card} shadow text-center`}>
                <h4 className='font-semibold mb-2'>
                  Scan QR untuk buka undangan
                </h4>
                {/* simple QR */}
                <img
                  src={qrSrc}
                  alt='qr'
                  className='mx-auto w-40 h-40 object-contain rounded-md'
                />
                <p className='text-xs text-gray-500 mt-2'>
                  Scan untuk akses cepat dari HP
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border ${T.border} ${T.card} shadow col-span-2`}>
                <h4 className='font-semibold mb-2'>Peta Lokasi</h4>
                <iframe
                  src='https://www.google.com/maps?q=-6.244669,106.800483&z=15&output=embed'
                  width='100%'
                  height='200'
                  className='border-0 rounded-md'
                  loading='lazy'
                />
              </div>
            </div>
          </motion.section>

          {/* Ucapan & Doa + Guest Book form */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='py-10 px-4'>
            <h3
              className={`text-center font-bold text-lg md:text-xl mb-6 ${T.textMain}`}>
              Ucapan & Doa
            </h3>
            <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-2xl shadow border ${T.border} bg-white`}>
                    <p className='font-semibold'>{msg.name}</p>
                    <p className='text-xs text-gray-500 mb-2'>{msg.time}</p>
                    <p className='text-gray-800'>{msg.message}</p>
                  </motion.div>
                ))}
              </div>

              <div
                className={`p-6 rounded-2xl border ${T.border} ${T.card} shadow`}>
                <h4 className='font-semibold mb-2'>Tulis Ucapanmu</h4>
                <form
                  onSubmit={addGuestMessage}
                  className='flex flex-col gap-3'>
                  <input
                    type='text'
                    value={guestForm.name}
                    onChange={(e) =>
                      setGuestForm((s) => ({ ...s, name: e.target.value }))
                    }
                    placeholder='Nama'
                    className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white'
                    required
                  />
                  <textarea
                    value={guestForm.message}
                    onChange={(e) =>
                      setGuestForm((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder='Ucapan & doa'
                    className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white h-28'
                    required
                  />
                  <button
                    type='submit'
                    className={`mt-1 py-3 rounded-full text-white shadow ${T.cta}`}>
                    Kirim Ucapan
                  </button>
                </form>
              </div>
            </div>
          </motion.section>

          {/* RSVP */}
          <motion.section
            ref={rsvpRef}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='py-12 px-4'>
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
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white'
                required
              />
              <select
                name='kehadiran'
                value={formData.kehadiran}
                onChange={handleChange}
                className='p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white'
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

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center py-8 px-4'>
            <p className='text-sm text-gray-600'>
              Merupakan suatu kehormatan & kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir.
            </p>
            <p className='text-xs text-gray-500 mt-2'>
              Terima kasih — Vidi & Tijani
            </p>
          </motion.footer>
        </div>
      )}
    </main>
  );
}
