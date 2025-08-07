"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, LogOut, CheckCircle2, XCircle } from "lucide-react";

const DashboardAdminPage = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [undanganList, setUndanganList] = useState([
    {
      id: 1,
      nama: "Rina & Budi",
      tanggal: "10 Sep 2025",
      status: "Menunggu Persetujuan",
      paket: "Premium",
    },
    {
      id: 2,
      nama: "Dina & Bayu",
      tanggal: "15 Okt 2025",
      status: "Aktif",
      paket: "Basic",
    },
  ]);

  const handleApprove = (id) => {
    setUndanganList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Aktif" } : item))
    );
  };

  const handleReject = (id) => {
    setUndanganList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Ditolak" } : item
      )
    );
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-white'>
      {/* Mobile Header */}
      <div className='md:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-sm'>
        <h1 className='text-xl font-bold text-gray-800'>Admin Panel</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 bottom-0 min-h-screen w-64 bg-black text-white z-30 transform transition-transform duration-300 flex flex-col justify-between ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}>
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-6'>Admin Panel</h2>
          <nav className='flex flex-col gap-4 text-sm font-medium'>
            <a
              href='#'
              className='hover:text-gray-300'>
              Dashboard
            </a>
            <a
              href='#'
              className='hover:text-gray-300'>
              Pengguna Undangan
            </a>
          </nav>
        </div>
        <div className='p-6 border-t border-gray-700'>
          <button
            onClick={handleLogout}
            className='flex items-center gap-2 text-sm hover:text-rose-500 duration-300 cursor-pointer'>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay mobile */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden'
          onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Main content */}
      <main className='flex-1 mt-16 md:mt-0 p-6 overflow-y-auto'>
        <header className='mb-6'>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
          <p className='text-sm text-gray-500'>Selamat datang kembali 👋</p>
        </header>

        {/* Statistik */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          <div className='bg-gray-100 p-5 rounded-xl shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-800 mb-1'>
              Total Undangan
            </h3>
            <p className='text-3xl font-bold'>{undanganList.length}</p>
          </div>
          <div className='bg-gray-100 p-5 rounded-xl shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-800 mb-1'>
              Pengguna Aktif
            </h3>
            <p className='text-3xl font-bold'>
              {undanganList.filter((u) => u.status === "Aktif").length}
            </p>
          </div>
          <div className='bg-gray-100 p-5 rounded-xl shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-800 mb-1'>
              Menunggu Persetujuan
            </h3>
            <p className='text-3xl font-bold'>
              {
                undanganList.filter((u) => u.status === "Menunggu Persetujuan")
                  .length
              }
            </p>
          </div>
        </section>

        {/* Tabel Undangan */}
        <section className='bg-gray-100 p-6 rounded-xl shadow-sm overflow-x-auto'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Daftar Undangan
          </h2>
          <table className='min-w-full text-sm text-left whitespace-nowrap'>
            <thead className='bg-gray-200 text-gray-700'>
              <tr>
                <th className='py-3 px-4'>Nama</th>
                <th className='py-3 px-4'>Tanggal Acara</th>
                <th className='py-3 px-4'>Paket</th>
                <th className='py-3 px-4'>Status</th>
                <th className='py-3 px-4 text-center'>Aksi</th>
              </tr>
            </thead>
            <tbody className='text-gray-800'>
              {undanganList.map((item) => (
                <tr
                  key={item.id}
                  className='border-t border-gray-300 hover:bg-gray-50'>
                  <td className='py-3 px-4'>{item.nama}</td>
                  <td className='py-3 px-4'>{item.tanggal}</td>
                  <td className='py-3 px-4'>{item.paket}</td>
                  <td className='py-3 px-4'>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Aktif"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Ditolak"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className='py-3 px-4 text-center space-x-2'>
                    {item.status === "Menunggu Persetujuan" ? (
                      <>
                        <button
                          onClick={() => handleApprove(item.id)}
                          className='text-green-600 hover:underline inline-flex items-center gap-1'>
                          <CheckCircle2 size={16} />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className='text-red-600 hover:underline inline-flex items-center gap-1'>
                          <XCircle size={16} />
                          Tolak
                        </button>
                      </>
                    ) : (
                      <span className='text-gray-400'>Tidak Ada Aksi</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default DashboardAdminPage;
