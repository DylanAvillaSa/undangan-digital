"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const templates = [
  {
    id: 1,
    image: "/template/template-1.png",
    name: "Template 01",
    paket: "Silver",
  },
];

const PilihTemplatePage = () => {
  const router = useRouter();
  const [category, setCategory] = useState("Silver");

  const handleKategori = (kategori) => {
    setCategory(kategori);
  };

  const filteredTemplates =
    category === "Silver"
      ? templates.filter((t) => t.paket === "Silver")
      : templates.filter((t) => t.paket !== "Silver");

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#FDF6F0] to-[#F4EDE5] px-6 md:px-24 py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#8B5E3C]">
          Pilih Template Undangan
        </h1>
        <p className="mt-4 text-[#3B3B3B] text-lg">
          Temukan template terbaik untuk hari istimewamu ✨
        </p>

        <div className="flex items-center gap-6 justify-center mt-12">
          {["Silver", "Gold", "Platinum"].map((kategori, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleKategori(kategori)}
              className={`px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-300 ${
                kategori === category
                  ? "bg-[#3B3B3B] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>
      </header>

      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Image wrapper */}
              <div className="relative w-full h-[400px] object-cover overflow-hidden">
                <Image
                  src={template.image}
                  alt={template.name}
                  layout="fill"
                  className="rounded-t-2xl w-full h-[300px] object-contain  transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge paket */}
                <span
                  className={`absolute top-4 left-4 px-4 py-1 text-sm font-semibold rounded-full shadow-md ${
                    template.paket === "Silver"
                      ? "bg-gray-300 text-gray-800"
                      : template.paket === "Gold"
                      ? "bg-yellow-400 text-yellow-900"
                      : "bg-purple-400 text-white"
                  }`}
                >
                  {template.paket}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold text-[#8B5E3C]">
                  {template.name}
                </h2>

                <footer className="flex items-center justify-between gap-5 mt-4 text-sm">
                  <button
                    className="bg-gray-500 hover:bg-[#75482F] text-white px-6 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
                    onClick={() => router.push("/template-undangan/template-1")}
                  >
                    Lihat Demo
                  </button>

                  <button className="bg-[#8B5E3C] hover:bg-[#75482F] text-white px-6 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105">
                    Pesan sekarang
                  </button>
                </footer>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20 text-[#8B5E3C]">
          <p className="text-xl font-medium mt-6">
            Template belum tersedia untuk sekarang 🖐️
          </p>
          <p className="text-[#3B3B3B] mt-2">Silakan cek kembali nanti ya!</p>
        </div>
      )}
    </section>
  );
};

export default PilihTemplatePage;
