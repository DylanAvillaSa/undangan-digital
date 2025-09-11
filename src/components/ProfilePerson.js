"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilMempelai({ T, background }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-52 h-52 bg-amber-200/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Ornament Kiri */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1.5,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -2, 2, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute top-[9rem] left-10 z-20 w-24 md:w-48 opacity-90"
      >
        <img src="/asset/florar.png" alt="ornament kiri" className="w-full" />
      </motion.div>

      {/* Ornament Kiri */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1.5,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -2, 2, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12rem] right-8 z-20 w-20 md:w-48 opacity-90"
      >
        <img src="/asset/florar.png" alt="ornament kiri" className="w-full" />
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`text-center font-serif text-3xl md:text-4xl mb-16 tracking-wide ${background[T].textMain}`}
      >
        Profil Mempelai
      </motion.h3>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Groom */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <div className="relative w-[200px] h-[200px] mx-auto mb-6">
            <Image
              src="/profil/mempelai-pria.png"
              alt="Groom"
              fill
              className={`rounded-full object-cover shadow-lg border-4 ${background[T].border} hover:scale-105 transition-transform duration-500`}
            />
            <div
              className={`absolute inset-0 rounded-full border-2 ${background[T].border} animate-pulse`}
            ></div>
          </div>
          <h4 className="font-[--greatVibes] text-4xl text-pink-600">Vidi</h4>
          <p className="font-serif text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
            Putra kedua dari <br />
            <span className="font-semibold">Bapak X</span> &{" "}
            <span className="font-semibold">Ibu Y</span>
          </p>
        </motion.div>

        {/* Ornament Divider */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:flex flex-col items-center justify-center"
        >
          <div className="w-px h-32 bg-gradient-to-b from-pink-300 to-amber-300"></div>
          <span className="font-[--greatVibes] text-3xl text-pink-500 mt-2">
            &
          </span>
          <div className="w-px h-32 bg-gradient-to-t from-pink-300 to-amber-300"></div>
        </motion.div>

        {/* Bride */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <div className="relative w-[200px] h-[200px] mx-auto mb-6">
            <Image
              src="/profil/mempelai-wanita.png"
              alt="Bride"
              fill
              className={`rounded-full object-cover shadow-lg border-4 ${background[T].border} hover:scale-105 transition-transform duration-500`}
            />
            <div
              className={`absolute inset-0 rounded-full border-2 ${background[T].border} animate-pulse`}
            ></div>
          </div>
          <h4 className="font-[--greatVibes] text-4xl text-amber-600">
            Riffany
          </h4>
          <p className="font-serif text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
            Putri ketiga dari <br />
            <span className="font-semibold">Bapak A</span> &{" "}
            <span className="font-semibold">Ibu B</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
