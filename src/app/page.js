"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#FDF6F0] via-[#FFF] to-[#FDF6F0] text-[#3B3B3B]'>
      {/* Hero Section */}
      <section className='px-6 md:px-24 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16'>
        <article className='flex flex-col items-start gap-6 max-w-xl'>
          <h1 className='font-extrabold text-5xl leading-tight tracking-tight text-[#8B5E3C]'>
            Undangan Pernikahan Digital Elegan
          </h1>
          <p className='text-lg text-[#5A5A5A]'>
            Buat momen spesialmu jadi tak terlupakan dengan undangan digital
            yang elegan, cepat, dan hemat biaya.
          </p>
          <button
            onClick={() => router.push("/pemesanan")}
            className='bg-[#8B5E3C] hover:bg-[#a76f49] text-white transition px-8 py-3 font-bold rounded-lg shadow-lg hover:scale-105'>
            Pesan Sekarang
          </button>
        </article>

        <div className='w-full md:w-[450px] rounded-2xl overflow-hidden shadow-2xl bg-white p-2'>
          <Image
            src='/images/image.png'
            alt='Undangan Pernikahan'
            width={700}
            height={700}
            className='w-full h-auto object-cover rounded-xl'
            priority
          />
        </div>
      </section>

      {/* Fitur Section */}
      <section className='px-6 md:px-24 py-20 bg-white text-[#3B3B3B]'>
        <h2 className='text-3xl font-bold text-center mb-14 text-[#8B5E3C]'>
          ✨ Fitur Unggulan
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Desain Mewah",
              desc: "Banyak pilihan template premium yang elegan & berkelas.",
            },
            {
              title: "100% Digital",
              desc: "Kirim undangan melalui WhatsApp, Instagram, Email, dll.",
            },
            {
              title: "Galeri & Musik",
              desc: "Tampilkan foto & lagu favoritmu dalam undangan.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className='p-6 bg-[#F7EFE7] rounded-2xl text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300'>
              <h3 className='font-semibold text-xl mb-2 text-[#8B5E3C]'>
                {item.title}
              </h3>
              <p className='text-[#5A5A5A]'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galeri Section */}
      <section className='px-6 md:px-24 py-20 bg-[#F4EDE5] text-[#3B3B3B]'>
        <h2 className='text-3xl font-bold text-center mb-14 text-[#8B5E3C]'>
          📸 Contoh Template
        </h2>
        <p className='text-center text-[#5A5A5A]'>
          Template belum tersedia untuk sekarang 🖐️
        </p>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className='px-6 md:px-24 py-20 bg-white text-[#3B3B3B]'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#8B5E3C]'>
          💡 Kenapa Memilih Kami?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          {[
            {
              title: "Proses Cepat & Mudah",
              icon: "⚡",
              desc: "Hanya butuh beberapa langkah untuk membuat undangan digital Anda siap dibagikan.",
            },
            {
              title: "Custom Nama Tamu & Cerita Cinta",
              icon: "💌",
              desc: "Personalisasi undangan dengan nama tamu dan kisah cinta Anda.",
            },
            {
              title: "Harga Terjangkau & Transparan",
              icon: "💸",
              desc: "Tidak ada biaya tersembunyi, Anda mendapatkan kualitas dengan harga terbaik.",
            },
            {
              title: "Gratis Revisi Desain",
              icon: "🔄",
              desc: "Revisi sepuasnya agar sesuai dengan keinginan Anda.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex items-start gap-4 p-5 bg-[#F7EFE7] rounded-xl shadow hover:shadow-md transition'>
              <div className='text-3xl'>{item.icon}</div>
              <div>
                <h3 className='text-xl font-semibold mb-1 text-[#8B5E3C]'>
                  {item.title}
                </h3>
                <p className='text-[#5A5A5A]'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-6 md:px-24 py-20 bg-[#8B5E3C] text-white text-center'>
        <h2 className='text-3xl font-bold mb-6'>📨 Siap Buat Undanganmu?</h2>
        <p className='mb-6 text-lg'>
          Klik tombol di bawah ini untuk memesan undangan digital impianmu
          sekarang juga!
        </p>
        <button
          onClick={() => router.push("/pemesanan")}
          className='bg-white text-[#8B5E3C] hover:bg-gray-100 px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition'>
          Mulai Pesan Sekarang
        </button>
      </section>

      {/* Footer */}
      <footer className='bg-[#8B5E3C] text-center text-sm py-6 text-[#F4EDE5]'>
        © {new Date().getFullYear()} UndanganDigital.id — All Rights Reserved
      </footer>
    </div>
  );
};

export default page;
