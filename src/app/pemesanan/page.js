import React from "react";

const FormPemesananPage = () => {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center px-4 py-16'>
      <div className='w-full max-w-2xl bg-white mt-7 rounded-2xl shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-center text-[#8B5E3C] mb-8'>
          Form Pemesanan
        </h1>

        <form className='space-y-6'>
          <div>
            <label className='block mb-2 text-sm font-medium text-[#3B3B3B]'>
              Nama Lengkap
            </label>
            <input
              type='text'
              required
              placeholder='Masukkan nama lengkap'
              className='w-full px-4 py-2 border border-[#D6D6D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-white text-[#3B3B3B]'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-[#3B3B3B]'>
              Email
            </label>
            <input
              type='email'
              required
              placeholder='Masukkan email aktif'
              className='w-full px-4 py-2 border border-[#D6D6D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-white text-[#3B3B3B]'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-[#3B3B3B]'>
              Nomor WhatsApp
            </label>
            <input
              type='tel'
              required
              placeholder='Contoh: 08123456789'
              className='w-full px-4 py-2 border border-[#D6D6D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-white text-[#3B3B3B]'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-[#3B3B3B]'>
              Pilih Paket
            </label>
            <select
              required
              className='w-full px-4 py-2 border border-[#D6D6D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-white text-[#3B3B3B]'>
              <option value=''>-- Pilih Paket --</option>
              <option value='bronze'>Bronze</option>
              <option value='silver'>Silver</option>
              <option value='gold'>Gold</option>
              <option value='platinum'>Platinum</option>
            </select>
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-[#3B3B3B]'>
              Catatan Tambahan
            </label>
            <textarea
              rows='4'
              placeholder='Tulis permintaan atau keterangan tambahan...'
              className='w-full px-4 py-2 border border-[#D6D6D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] bg-white text-[#3B3B3B]'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-[#8B5E3C] hover:bg-[#7a4f33] text-white font-semibold py-3 rounded-lg transition'>
            Kirim Pemesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPemesananPage;
