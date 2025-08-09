"use client";

import { motion } from "framer-motion";
import Countdown from "react-countdown";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import CountdownSection from "@/components/counter/CountDown";

export default function Home() {
  const rsvpRef = useRef(null);
  const [kehadiran, setKehadiran] = useState("");
  const [formDataTamu, setFormDataTamu] = useState({
    nama_tamu_undangan: "",
    kehadiran: "",
  });
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  useEffect(() => {
    if (opened && rsvpRef.current) {
      setTimeout(() => {
        rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 800); // tunggu animasi selesai
    }
  }, [opened]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataTamu({ ...formDataTamu, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (formDataTamu.kehadiran === "hadir") {
  //     setKehadiran(formDataTamu.kehadiran);
  //   } else {
  //     setKehadiran("tidak hadir");
  //   }
  // };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center bg-[#F9F5F2] text-[#6F4E37] relative overflow-hidden scroll-smooth"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Background Flowers */}
      <Image
        src="/asset/bunga-coklat-1.png"
        alt="flower deco"
        width={120}
        height={120}
        className="absolute top-0 left-0 w-40 md:w-60 rotate-[-20deg]"
      />
      <Image
        src="/asset/bunga-2.png"
        alt="flower deco"
        width={200}
        height={200}
        className="absolute top-0 right-0 w-40 md:w-60 rotate-[20deg]"
      />
      <Image
        src="/asset/bunga-2.png"
        alt="flower deco"
        width={120}
        height={120}
        className="absolute bottom-0 left-0 w-40 md:w-60 rotate-[20deg]"
      />
      <Image
        src="/asset/bunga-1.png"
        alt="flower deco"
        width={120}
        height={120}
        className="absolute bottom-0 right-0 w-40 md:w-60 rotate-[-20deg]"
      />

      {/* Welcome Screen */}
      {!opened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={`z-10 bg-[#F9F5F2]/90 backdrop-blur-md p-6 rounded-lg shadow-lg ${
            kehadiran && "hidden"
          }`}
        >
          <p className="text-sm mb-4">We Invite You To</p>
          <div className="rounded-full overflow-hidden border-4 border-[#D3BAA2] w-40 h-40 mx-auto mb-4">
            <Image
              src="/images/tmp.jpg"
              width={160}
              height={160}
              className="h-full object-cover"
              alt="pasangan"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-[#A47148]">
            Vidi & Riffany
          </h1>
          <p className="text-sm text-[#7B5E57]">
            Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i
            untuk Hadir di Acara Kami.
          </p>
          <p className="mt-2 text-[#4A3C35] font-semibold">
            Kepada Bapak Handoko
          </p>
          <motion.button
            onClick={handleOpen}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-[#CBB59D] hover:bg-[#b6a086] text-white py-2 px-4 rounded-full shadow"
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      )}

      {/* Full Invitation */}
      {/* {opened && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`z-10 px-6 max-w-xl py-12 ${kehadiran && "hidden"}`}>
          <h2 className='text-2xl font-bold text-[#A47148]'>
            Undangan Pernikahan
          </h2>
          <p className='mt-2'>Dengan hormat mengundang Bapak/Ibu/Saudara/i</p>

          <div className='mt-6 border-t pt-6 border-[#CBB59D]'>
            <p className='font-bold text-lg text-[#A47148]'>Vidi & Riffany</p>
            <p className='mt-1 text-sm text-[#4A3C35]'>
              Sabtu, 25 November 2025
            </p>
            <p className='mt-1 text-sm text-[#4A3C35]'>
              Gedung Serbaguna, Jakarta
            </p>
          </div>

          <div
            ref={rsvpRef}
            className='mt-12'>
            <h3 className='text-lg font-bold text-[#A47148] mb-2'>RSVP</h3>
            <form
              className='flex flex-col gap-2'
              onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Nama'
                name='nama_tamu_undangan'
                onChange={handleChange}
                value={formDataTamu.nama_tamu_undangan}
                className='border p-2 rounded bg-white text-[#4A3C35]'
              />
              <select
                className='border p-2 rounded bg-white text-[#4A3C35]'
                name='kehadiran'
                onChange={handleChange}>
                <option>--Pilih Kehadiran--</option>
                <option value='hadir'>Hadir</option>
                <option value='tidak hadir'>Tidak Hadir</option>
              </select>
              <button
                type='submit'
                className='bg-[#CBB59D] hover:bg-[#b6a086] text-white py-2 rounded shadow'>
                Kirim Konfirmasi
              </button>
            </form>
          </div>
        </motion.div>
      )} */}
      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center p-4 bg-[#F9F5F2] min-h-screen relative text-[#6F4E37] mt-24"
        >
          <Image
            src="/asset/ornament.png"
            alt="flower deco"
            width={120}
            height={120}
            className="absolute top-0 left-0 w-40 md:w-60 rotate-[-20deg]"
          />
          <Image
            src="/asset/ornament.png"
            alt="flower deco"
            width={200}
            height={200}
            className="absolute top-0 right-0 w-40 md:w-60 rotate-[20deg]"
          />

          {/* Gambar mempelai */}
          <Image
            src="/images/tmp.jpg"
            width={160}
            height={160}
            alt="Foto Mempelai"
            className="mx-auto w-40 h-40 rounded-full border-4 border-[#D3BAA2] object-cover"
          />

          {/* Nama mempelai */}
          <h2 className="mt-4 text-3xl font-cursive text-[#A47148]">
            The Wedding of Vidi & Riffany
          </h2>

          {/* Ucapan Terima Kasih */}

          <p className="mt-4 text-sm">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>

          <p className="mt-4 text-sm">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>

          <h2 className="mt-4">- Ar-Rum Ayat 21 -</h2>

          {/* Countdown */}
          <CountdownSection />

          {/*kedua mempelai */}
          <section>
            {/* mempelai pria */}
            <section className="bg-[#f8f4f2] flex flex-col items-center text-center px-4 pb-20 pt-10 relative">
              {/* Ornamen atas */}
              <img
                src="/asset/ornament.png"
                alt="Ornament Top"
                className="absolute top-0 left-0 w-[110px] h-[110px] object-cover"
              />

              {/* Salam pembuka */}
              <p className="text-[#6a5f58] text-xl md:text-2xl font-arabic mt-8">
                ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللّٰهِ وَبَرَكَاتُهُ
              </p>

              {/* Teks undangan */}
              <p className="text-[#4d4139] max-w-xl mt-4 leading-relaxed text-sm md:text-base">
                Atas Berkah dan Rahmat Allah Subhanallahu Wa Ta'ala. Tanpa
                mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
                serta kerabat sekalian untuk menghadiri acara pernikahan kami:
              </p>

              {/* Foto mempelai */}
              <div className="relative mt-6">
                <div className="rounded-full border-4 border-[#e2d6cd] w-52 h-52 mx-auto overflow-hidden">
                  <img
                    src="/images/pria.avif"
                    alt="Groom"
                    className="object-cover w-full h-full"
                  />
                </div>
                <img
                  src="/asset/ornament-bottom.png"
                  alt="Decor"
                  className="absolute bottom-0 right-0 w-[100px] h-[100px] object-cover transform translate-x-1/2 translate-y-1/2"
                />
              </div>

              {/* Nama dan keterangan */}
              <h2 className="text-[#826259] text-2xl font-semibold mt-6">
                Vidi
              </h2>
              <p className="text-[#4d4139] text-sm mt-2">
                Anak Pertama dari Pasangan <br />
                Bapak Si pria & <br />
                Ibu Si pria <br />
                Beralamat di Alamat rumah si pria
              </p>
            </section>

            <h2 className="text-5xl  text-[#6a5f58] mb-12">&</h2>

            {/* mempelai wanita */}
            <section className="bg-[#f8f4f2] flex flex-col items-center text-center px-4 pb-20 pt-10 relative">
              {/* Ornamen atas */}
              <img
                src="/asset/ornament.png"
                alt="Ornament Top"
                className="absolute top-0 left-0 w-[110px] h-[110px] object-cover"
              />

              {/* Foto mempelai */}
              <div className="relative mt-6">
                <div className="rounded-full border-4 border-[#e2d6cd] w-52 h-52 mx-auto overflow-hidden">
                  <img
                    src="/images/wanita.jpg"
                    alt="Groom"
                    className="object-cover w-full h-full"
                  />
                </div>
                <img
                  src="/asset/ornament-bottom.png"
                  alt="Decor"
                  className="absolute bottom-0 right-0 w-[100px] h-[100px] object-cover transform translate-x-1/2 translate-y-1/2"
                />
              </div>

              {/* Nama dan keterangan */}
              <h2 className="text-[#826259] text-2xl font-semibold mt-6">
                Riffany
              </h2>
              <p className="text-[#4d4139] text-sm mt-2">
                Anak Kedua dari Pasangan <br />
                Bapak Si pria & <br />
                Ibu Si pria <br />
                Beralamat di Alamat rumah si pria
              </p>
            </section>
          </section>

          {/* akad */}
          <section className="flex flex-col items-center text-center mt-8">
            {/* Bagian Foto + Wave */}
            <div className="relative w-full max-w-xl overflow-hidden">
              {/* Foto */}
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src="/images/pengantin.avif"
                  alt="family"
                  fill
                  className="object-cover rounded-xl"
                />
                {/* Overlay warna coklat */}
                <div className="absolute inset-0 bg-[#A47148]/35 mix-blend-multiply z-10" />
                {/* Text Save The Date */}
                <h2 className="absolute inset-0 z-20 flex items-center justify-center text-white text-3xl md:text-4xl font-[GreatVibes] drop-shadow-lg">
                  Save The Date
                </h2>
              </div>
            </div>

            {/* Card Info */}
            <div className="relative w-[90%] max-w-md -mt-12 z-40">
              <div
                className="bg-white/95 backdrop-blur-md rounded-3xl px-6 py-6 border-[3px] border-dashed border-[#F0C84C] shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
                style={{
                  backgroundImage: 'url("/images/marble-texture.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Jumat, 15 Agustus 2025
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pukul 13:30 - 20:00
                </p>
                <p className="text-sm text-gray-700 mt-3">
                  Lokasi alamat acara
                </p>
              </div>
            </div>
          </section>

          {/* ucapan terimakasih */}
          <section className="mt-16">
            <p>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga,
              apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa
              restu. Atas kehadiran dan doa restunya, kami mengucapkan terima
              kasih.
            </p>
          </section>

          {/* gallery pernikahan */}
          <section className="bg-[#A47148] mt-16 rounded-md p-3 flex flex-col gap-5 text-white">
            <h1>Our Gallery</h1>

            {["/images/galeri-1.png", "/images/galeri-2.png"].map(
              (galeri, index) => (
                <div
                  key={index}
                  className="border-dotted border-2 border-[#F0C84C] rounded"
                >
                  <img src={galeri} className="bg-amber-900" />
                </div>
              )
            )}
          </section>
        </motion.div>
      )}
    </main>
  );
}
