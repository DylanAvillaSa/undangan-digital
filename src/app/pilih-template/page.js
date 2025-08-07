import React from "react";
import Image from "next/image";

const templates = [];

const PilihTemplatePage = () => {
  return (
    <section className='min-h-screen w-full bg-gradient-to-br from-[#FDF6F0] to-[#F4EDE5] px-6 md:px-24 py-24'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-[#8B5E3C]'>
          Pilih Template Undangan
        </h1>
        <p className='mt-4 text-[#3B3B3B] text-lg'>
          Temukan template terbaik untuk hari istimewamu ✨
        </p>
      </div>

      {templates.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {templates.map((template) => (
            <div
              key={template.id}
              className='bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition duration-300'>
              <div className='w-full h-60 relative'>
                <Image
                  src={template.image}
                  alt={template.name}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-t-xl'
                />
              </div>
              <div className='p-5 flex flex-col items-center gap-3'>
                <h2 className='text-xl font-semibold text-[#8B5E3C]'>
                  {template.name}
                </h2>
                <button className='bg-[#8B5E3C] hover:bg-[#75482F] text-white px-5 py-2 rounded-md transition'>
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center text-center mt-20 text-[#8B5E3C]'>
          <Image
            src='/images/image2.jpg'
            alt='Kosong'
            width={300}
            height={300}
            className='rounded-md'
          />
          <p className='text-xl font-medium mt-6'>
            Template belum tersedia untuk sekarang 🖐️
          </p>
          <p className='text-[#3B3B3B] mt-2'>Silakan cek kembali nanti ya!</p>
        </div>
      )}
    </section>
  );
};

export default PilihTemplatePage;
