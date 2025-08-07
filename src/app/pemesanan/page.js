import React from "react";

const FormPemesananPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center px-4 py-16'>
      <div className='w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-center text-blue-900 mb-8'>
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
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
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
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
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
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Pilih Paket
            </label>
            <select
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>
              <option value=''>-- Pilih Paket --</option>
              <option value='bronze'>Bronze</option>
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
              rows='4'
              placeholder='Tulis permintaan atau keterangan tambahan...'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition'>
            Kirim Pemesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPemesananPage;
