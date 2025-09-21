"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react"; // pake lucide-react biar dapet icon
import BottomNavigation from "@/components/navigation/NavBottom";
import { ChevronRight } from "lucide-react"; // icon panah

const PlatinumTemplate2 = () => {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mainMenuPlay, setMenuPlay] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2, // animasi anak-anak berurutan
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Auto play ketika undangan dibuka
  useEffect(() => {
    if (opened && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [opened]);

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -100,
      filter: "blur(20px)",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideo = (e) => {
    setShowVideo(false);
    setMenuPlay(true);
  };

  return (
    <section>
      {/* === Halaman Cover === */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -850, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="relative w-full min-h-screen flex flex-col justify-center items-center text-white gap-5"
          >
            <div className="absolute inset-0 bg-red-600/40 mix-blend-multiply" />
            <div className="bg-[url(/images/prewed-1.jpg)] w-full h-full bg-cover bg-center absolute inset-0" />

            <article className="relative z-10 flex flex-col gap-5 items-center">
              <h3 className="font-semibold">The Wedding Of</h3>
              <h2 className="font-bold text-2xl">Vidi & Riffany</h2>
              <p>Dear :</p>
              <h3 className="text-rose-800">Nama Tamu</h3>
              <button
                onClick={() => setOpened(true)}
                className="py-2 px-3 bg-rose-800 text-white rounded-md hover:bg-rose-700"
              >
                Buka undangan
              </button>
            </article>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Halaman Undangan + Musik === */}
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden"
          >
            <BottomNavigation />

            <AnimatePresence>
              {showVideo && (
                <motion.div
                  className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden"
                  variants={videoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <video
                    ref={videoRef}
                    className="w-auto h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideo}
                  >
                    <source src="/animasi.mp4" type="video/mp4" />
                    Browser kamu tidak mendukung video tag.
                  </video>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {mainMenuPlay && (
                <motion.div
                  className="relative w-screen h-screen overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory scroll-smooth"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* Background Video */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/background.mp4" type="video/mp4" />
                    Browser kamu tidak mendukung video tag.
                  </video>

                  {/* Section 1 */}
                  <section className="flex-shrink-0 w-screen h-screen snap-center flex flex-col gap-5 items-center justify-center text-white text-shadow-2xs">
                    <motion.h2 className="text-xl md:text-2xl">
                      The Wedding Of
                    </motion.h2>

                    <motion.div>
                      <Image
                        src="/images/prewed-1.jpg"
                        alt="Pasangan"
                        width={700}
                        height={700}
                        priority
                        className="object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-r-full rounded-bl-full shadow-2xl"
                      />
                    </motion.div>

                    <motion.h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                      Vidi & Riffany
                    </motion.h1>

                    {/* Indikator Scroll ke Kanan */}
                    <motion.div
                      className="absolute bottom-10 right-5 flex items-center gap-2"
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-white text-sm tracking-wider">
                        Scroll →
                      </span>
                      <ChevronRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </section>

                  {/* Section 2 - QS Ar-Rum */}
                  <section className="relative flex-shrink-0 w-screen h-screen snap-center flex flex-col items-center justify-center overflow-hidden bg-[url(/asset/bg.png)] bg-cover text-slate-950 px-6">
                    {/* Ornamen Background Blur */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ duration: 2 }}
                      className="absolute w-[400px] h-[400px] rounded-full bg-white blur-3xl top-10 left-10"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      transition={{ duration: 2 }}
                      className="absolute w-[300px] h-[300px] rounded-full bg-white blur-2xl bottom-10 right-10"
                    />

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 1.5 }}
                      className="text-2xl md:text-4xl font-semibold mb-8 tracking-widest"
                    >
                      بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                    </motion.h2>

                    {/* Ayat */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2 }}
                      className="max-w-3xl text-center text-lg md:text-2xl leading-relaxed font-light"
                    >
                      وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
                      أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم
                      مَّوَدَّةً وَرَحْمَةً ۚ
                      <br />
                      <span className="block mt-4 text-sm md:text-base italic opacity-90">
                        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                        menciptakan untukmu pasangan-pasangan dari jenismu
                        sendiri, agar kamu merasa tenteram kepadanya, dan Dia
                        menjadikan di antaramu rasa kasih dan sayang.” <br />{" "}
                        (QS. Ar-Rum: 21)
                      </span>
                    </motion.blockquote>

                    {/* Garis Ornamen */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      className="mt-10 w-32 h-[2px] bg-white/70 rounded-full"
                    />
                  </section>

                  {/* Section 3 - Ucapan Salam & Nama Mempelai */}
                  <section className="flex-shrink-0 w-screen h-screen snap-center relative flex flex-col items-center justify-center text-center px-6 overflow-hidden ">
                    {/* Background Video */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover -z-10"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/cover.mp4" type="video/mp4" />
                      Browser kamu tidak mendukung video tag.
                    </video>

                    {/* Ucapan Salam */}
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-lg md:text-2xl italic mb-4 text-gray-800"
                    >
                      Assalamu’alaikum Warahmatullahi Wabarakatuh
                    </motion.h2>

                    {/* Doa */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="max-w-2xl text-sm md:text-lg leading-relaxed text-gray-600"
                    >
                      Maha Suci Allah yang telah menciptakan makhluk-Nya
                      berpasang-pasangan. Dengan memohon rahmat dan ridho Allah
                      Subhanahu Wa Ta’ala, kami bermaksud menyelenggarakan
                      pernikahan putra-putri kami:
                    </motion.p>

                    {/* Foto Mempelai */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="flex gap-10 items-center mt-10"
                    >
                      <div className="flex flex-col items-center">
                        <img
                          src="/images/pria.avif"
                          alt="Vidi Al-Fathir"
                          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                        />
                        <h1 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
                          Vidi Al-Fathir
                        </h1>
                      </div>

                      <span className="text-3xl md:text-5xl font-bold text-[#ead7bf]">
                        &
                      </span>

                      <div className="flex flex-col items-center">
                        <img
                          src="/images/wanita.jpg"
                          alt="Riffany Azizah"
                          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                        />
                        <h1 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
                          Riffany Azizah
                        </h1>
                      </div>
                    </motion.div>

                    {/* Penutup Salam */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="mt-10 text-sm md:text-lg italic text-gray-700"
                    >
                      Wassalamu’alaikum Warahmatullahi Wabarakatuh
                    </motion.p>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Musik */}
            <audio ref={audioRef} loop>
              <source src="/thousand-year.mp3" type="audio/mpeg" />
            </audio>

            {/* Tombol Musik */}
            <button
              onClick={toggleMusic}
              className="absolute bottom-5 right-5 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              {isPlaying ? (
                <Volume2 className="w-6 h-6 text-rose-800" />
              ) : (
                <VolumeX className="w-6 h-6 text-rose-800" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlatinumTemplate2;
