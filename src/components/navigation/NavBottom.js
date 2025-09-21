"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, Grid, UserCheck, X } from "lucide-react";

export default function BottomNavigation() {
  const [open, setOpen] = useState(false); // navigasi default terbuka
  const [active, setActive] = useState("home");

  // Variants untuk animasi buka/tutup
  const navVariants = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    visible: {
      width: "auto",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-rose-800/90 px-6 py-2 rounded-full flex items-center gap-6 shadow-lg relative overflow-hidden">
        {/* Navigasi */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex items-center gap-6"
            >
              <motion.button
                variants={itemVariants}
                onClick={() => setActive("love")}
                className={`p-2 rounded-full transition ${
                  active === "love" ? "text-rose-400" : "text-rose-100"
                }`}
              >
                <Heart className="w-6 h-6" />
              </motion.button>

              <motion.button
                variants={itemVariants}
                onClick={() => setActive("calendar")}
                className={`p-2 rounded-full transition ${
                  active === "calendar" ? "text-rose-400" : "text-rose-100"
                }`}
              >
                <Calendar className="w-6 h-6" />
              </motion.button>

              <motion.button
                variants={itemVariants}
                onClick={() => setActive("gallery")}
                className={`p-2 rounded-full transition ${
                  active === "gallery" ? "text-rose-400" : "text-rose-100"
                }`}
              >
                <Grid className="w-6 h-6" />
              </motion.button>

              <motion.button
                variants={itemVariants}
                onClick={() => setActive("rsvp")}
                className={`p-2 rounded-full transition ${
                  active === "rsvp" ? "text-rose-400" : "text-rose-100"
                }`}
              >
                <UserCheck className="w-6 h-6" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tombol tengah */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center shadow-xl cursor-pointer">
          <button className="w-full h-full flex items-center justify-center rounded-full">
            <span className="text-4xl font-bold text-gray-700">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}
