"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-20 bg-gradient-to-br from-blue-900 via-blue-950 to-white shadow-md text-white px-6 md:px-24 py-5 transition-all'>
      <div className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-3xl font-bold tracking-tight'>
          Hystoria
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-10 items-center font-medium text-white'>
          {[
            { label: "Home", href: "/" },
            { label: "Pilih Template", href: "/pilih-template" },
            { label: "Harga", href: "/harga" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className={`hover:text-blue-300 transition-colors duration-200 ${
                  pathname === item.href ? "underline" : ""
                }`}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => router.push("/pemesanan")}
              className='bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition'>
              Pesan Sekarang
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          className='md:hidden text-3xl cursor-pointer z-30'
          onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-blue-950 flex flex-col items-center gap-6 py-24 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        {[
          { label: "Home", href: "/" },
          { label: "Pilih Template", href: "/pilih-template" },
          { label: "Harga", href: "/harga" },
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={`text-lg font-medium hover:text-blue-300 transition-colors ${
              pathname === item.href ? "underline" : ""
            }`}>
            {item.label}
          </Link>
        ))}
        <button
          onClick={() => router.push("/pemesanan")}
          className='bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition'>
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
