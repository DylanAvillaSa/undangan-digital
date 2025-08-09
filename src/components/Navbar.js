"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // sembunyikan navbar di halaman tertentu
  const isHiddenPage =
    pathname === "/dashboard-admin" ||
    pathname === "/auth" ||
    pathname === "/template-undangan/template-1";
  if (isHiddenPage) return null;

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-20 bg-[#FDF6F0] text-[#3B3B3B] px-6 md:px-24 py-5 shadow-md transition-all">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-[#8B5E3C]"
        >
          Hystoria
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center font-medium">
          {[
            { label: "Home", href: "/" },
            { label: "Pilih Template", href: "/pilih-template" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className={`hover:text-[#8B5E3C] transition-colors duration-200 ${
                  pathname === item.href ? "underline" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => router.push("/pemesanan")}
              className="bg-[#8B5E3C] text-white font-semibold px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Pesan Sekarang
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          className="md:hidden text-3xl text-[#8B5E3C] cursor-pointer z-30"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-[#F4EDE5] text-[#3B3B3B] flex flex-col items-center gap-6 py-24 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {[
          { label: "Home", href: "/" },
          { label: "Pilih Template", href: "/pilih-template" },
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={`text-lg font-medium hover:text-[#8B5E3C] transition-colors ${
              pathname === item.href ? "underline" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        <button
          onClick={() => router.push("/pemesanan")}
          className="bg-[#8B5E3C] text-white font-semibold px-5 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
