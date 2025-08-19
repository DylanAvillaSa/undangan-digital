"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  const router = useRouter();

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#F9F9F9] via-[#FFFFFF] to-[#F3F3F3] text-[#2B2B2B]'>
      {/* Hero Section */}
      <section className='px-6 md:px-24 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16'>
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-start gap-6 max-w-xl'>
          <h1 className='font-extrabold text-5xl md:text-6xl leading-tight tracking-tight text-[#111111]'>
            Undangan Digital <br /> Monochrome Elegan
          </h1>
          <p className='text-lg text-[#555555]'>
            Rayakan momen spesialmu dengan undangan digital modern, minimalis,
            dan penuh gaya.
          </p>
          <button
            onClick={() => router.push("/pemesanan")}
            className='bg-black hover:bg-[#333] text-white transition px-10 py-4 font-semibold rounded-xl shadow-lg hover:scale-105'>
            Pesan Sekarang
          </button>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full md:w-[450px] rounded-2xl overflow-hidden shadow-2xl bg-white p-3'>
          <Image
            src='/images/image.png'
            alt='Undangan Pernikahan'
            width={700}
            height={700}
            className='w-full h-auto object-cover rounded-xl'
            priority
          />
        </motion.div>
      </section>

      {/* Fitur Section */}
      <section className='px-6 md:px-24 py-20 bg-white text-[#2B2B2B]'>
        <h2 className='text-3xl font-bold text-center mb-14 text-[#111111]'>
          ✨ Fitur Unggulan
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Desain Premium",
              desc: "Template minimalis & elegan dalam nuansa monochrome.",
            },
            {
              title: "100% Digital",
              desc: "Sebar undangan lewat WhatsApp, Instagram, atau Email.",
            },
            {
              title: "Galeri & Musik",
              desc: "Tampilkan foto kenangan & lagu favoritmu.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='p-6 bg-[#F4F4F4] rounded-2xl text-center shadow-md hover:shadow-xl transition'>
              <h3 className='font-semibold text-xl mb-2 text-[#111111]'>
                {item.title}
              </h3>
              <p className='text-[#555555]'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeri Section */}
      <section className='px-6 md:px-24 py-20 bg-[#EDEDED] text-[#2B2B2B]'>
        <h2 className='text-3xl font-bold text-center mb-10 text-[#111111]'>
          📸 Contoh Template
        </h2>
        <p className='text-center text-[#555555]'>
          Segera hadir berbagai pilihan template undangan elegan 🖐️
        </p>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className='px-6 md:px-24 py-20 bg-white text-[#2B2B2B]'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#111111]'>
          💡 Kenapa Pilih Kami?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {[
            {
              title: "Proses Cepat & Mudah",
              icon: "⚡",
              desc: "Cukup beberapa klik, undangan siap dibagikan.",
            },
            {
              title: "Custom Nama Tamu & Cerita Cinta",
              icon: "💌",
              desc: "Personalisasi undanganmu agar lebih berkesan.",
            },
            {
              title: "Harga Transparan",
              icon: "💸",
              desc: "Tanpa biaya tersembunyi, harga jujur & terjangkau.",
            },
            {
              title: "Gratis Revisi",
              icon: "🔄",
              desc: "Revisi desain sepuasnya sesuai kebutuhanmu.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className='flex items-start gap-4 p-6 bg-[#F4F4F4] rounded-xl shadow hover:shadow-lg transition'>
              <div className='text-3xl'>{item.icon}</div>
              <div>
                <h3 className='text-xl font-semibold mb-1 text-[#111111]'>
                  {item.title}
                </h3>
                <p className='text-[#555555]'>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-6 md:px-24 py-20 bg-black text-white text-center'>
        <h2 className='text-3xl font-bold mb-6'>
          📨 Siap Buat Undangan Digitalmu?
        </h2>
        <p className='mb-8 text-lg text-gray-300'>
          Klik tombol di bawah untuk mulai memesan undangan impianmu.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/pemesanan")}
          className='bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-xl font-bold shadow-xl transition'>
          Mulai Pesan Sekarang
        </motion.button>
      </section>

      {/* Footer */}
      <footer className='bg-[#111111] text-center text-sm py-6 text-[#EDEDED]'>
        © {new Date().getFullYear()} UndanganDigital.id — All Rights Reserved
      </footer>
    </div>
  );
};

export default Page;
