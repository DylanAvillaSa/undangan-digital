import React from "react";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Bronze",
    price: "Rp. 100.000 Promo 28%",
    features: [
      "Template basic",
      "Jumlah undangan unlimited",
      "Free Revisi",
      "Peta Lokasi",
      "Photo Slider (2)",
      "Photo Gallery (2)",
      "Template (1)",
    ],
    color: "border-[#D6D6D6] text-[#8B5E3C]",
    bg: "bg-[#F4EDE5]",
  },
  {
    name: "Silver",
    price: "Rp. 200.000 Promo 32%",
    features: [
      "Semua fitur Bronze",
      "Tampilan lebih elegan",
      "Jumlah undangan unlimited",
      "Photo Slider (4)",
      "Relationship Story",
      "Ucapan dan Doa",
      "Photo Gallery (4)",
      "Template (2)",
      "Countdown",
      "Amplop Digital",
      "Musik",
    ],
    color: "border-[#B8B8B8] text-[#3B3B3B]",
    bg: "bg-[#FDF6F0]",
  },
  {
    name: "Gold",
    price: "Rp. 300.000 Promo 36%",
    features: [
      "Semua fitur Silver",
      "Video",
      "Story Instagram",
      "Photo Slider (8)",
      "Variasi warna (3)",
      "Photo Gallery (16)",
      "Link Streaming",
    ],
    color: "border-[#8B5E3C] text-[#8B5E3C]",
    bg: "bg-[#F4EDE5]",
  },
  {
    name: "Platinum",
    price: "Rp. 1.000.000",
    features: [
      "Semua fitur Gold",
      "Custom Tema",
      "Desain eksklusif",
      "Ucapan Melalui Video",
    ],
    color: "border-[#7B3F00] text-[#7B3F00]",
    bg: "bg-[#FDF6F0]",
  },
];

const HargaPage = () => {
  return (
    <section className='min-h-screen bg-[#FDF6F0] px-6 md:px-24 py-16 mt-6'>
      <h1 className='text-4xl font-extrabold text-center text-[#8B5E3C] mb-12'>
        Pilihan Paket Undangan
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border-2 ${plan.color} ${plan.bg} hover:shadow-lg transition duration-300 h-full flex flex-col justify-between`}>
            <div>
              <h2 className={`text-2xl font-bold mb-2 ${plan.color}`}>
                {plan.name}
              </h2>
              <p className='text-lg font-semibold mb-4 text-[#3B3B3B]'>
                {plan.price}
              </p>
              <ul className='text-sm space-y-3 mb-6 text-[#3B3B3B]'>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-2'>
                    <CheckCircle
                      size={16}
                      className='text-green-600 mt-1'
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className='w-full mt-auto bg-[#8B5E3C] text-white py-2.5 rounded-xl hover:bg-[#74492F] transition'>
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HargaPage;
