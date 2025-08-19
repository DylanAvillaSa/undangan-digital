import React from "react";

const FormPemesananPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center px-4 py-16'>
      <div className='w-full max-w-2xl bg-white mt-7 rounded-2xl shadow-xl p-8'>
        <h1 className='text-3xl font-extrabold text-center text-black mb-8'>
          Form Pemesanan
        </h1>

        <form className='space-y-6'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Nama Lengkap
            </label>
            <input
              type='text'
              required
              placeholder='Masukkan nama lengkap'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-800'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              required
              placeholder='Masukkan email aktif'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-800'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Nomor WhatsApp
            </label>
            <input
              type='tel'
              required
              placeholder='Contoh: 08123456789'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-800'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Pilih Paket
            </label>
            <select
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-800'>
              <option value=''>-- Pilih Paket --</option>
              <option value='silver'>Silver</option>
              <option value='gold'>Gold</option>
              <option value='platinum'>Platinum</option>
            </select>
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Catatan Tambahan
            </label>
            <textarea
              rows={4}
              placeholder='Tulis permintaan atau keterangan tambahan...'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-800'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition'>
            Kirim Pemesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPemesananPage;
