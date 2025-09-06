"use client";

import { motion } from "framer-motion";
import { Copy, Gift, Wallet } from "lucide-react";
import { useState } from "react";

export default function AmplopGift({ T, background }) {
  const [copied, setCopied] = useState(null);

  const accounts = [
    {
      owner: "Vidi",
      bank: "BCA",
      number: "1234 5678 9012",
      color: "from-blue-500 to-blue-300", // BCA nuansa biru
    },
    {
      owner: "Riffany",
      bank: "Mandiri",
      number: "9876 5432 1011",
      color: "from-blue-500 to-orange-300", // Mandiri nuansa emas
    },
  ];

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num.replace(/\s/g, ""));
    setCopied(num);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='py-12 px-6'>
      <h3
        className={`text-center font-bold text-2xl md:text-3xl mb-8 ${background[T].textMain}`}>
        Amplop & Gift Registry
      </h3>

      <div
        className={`max-w-2xl mx-auto p-8 rounded-3xl shadow-xl border ${background[T].border} ${background[T].card}`}>
        <p className='text-sm text-gray-700 mb-8 text-center leading-relaxed'>
          Dengan penuh sukacita, kami menerima tanda kasih melalui amplop
          digital atau pilihan hadiah dari wishlist kami.
        </p>

        {/* Rekening Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
          {accounts.map((acc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative p-6 rounded-2xl shadow-lg text-white bg-gradient-to-tr ${acc.color}`}>
              {/* Bank logo */}
              <div className='absolute top-4 right-4 text-sm font-bold opacity-90'>
                {acc.bank}
              </div>

              {/* Rekening number */}
              <div className='text-lg md:text-xl font-mono tracking-widest mb-6'>
                {acc.number}
              </div>

              {/* Owner */}
              <div className='flex items-center justify-between'>
                <h4 className='font-semibold text-sm'>{acc.owner}</h4>
                <button
                  onClick={() => handleCopy(acc.number)}
                  className='bg-white/20 hover:bg-white/30 p-2 rounded-lg transition'>
                  <Copy size={16} />
                </button>
              </div>

              {copied === acc.number && (
                <span className='absolute bottom-2 left-4 text-xs text-green-200'>
                  📋 Nomor disalin
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          <button
            className={`w-full md:w-auto px-6 py-3 rounded-full text-white flex items-center justify-center gap-2 shadow-md transition hover:opacity-90 ${background[T].cta}`}>
            <Wallet size={18} /> Kirim via E-Wallet
          </button>
          <button className='w-full md:w-auto px-6 py-3 rounded-full border bg-white hover:bg-gray-50 flex items-center justify-center gap-2 shadow-md transition'>
            <Gift size={18} /> Buka Wishlist
          </button>
        </div>
      </div>
    </motion.section>
  );
}
