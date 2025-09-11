"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
const SmoothScroll = dynamic(
  () => import("@/components/scroller/SmoothScroll"),
  {
    ssr: false,
  }
);
import {
  Inter,
  Great_Vibes,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["200", "400"],
  display: "swap",
  subsets: ["latin"],
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <SmoothScroll>
          <div className="font-container">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}

export const fonts = { inter, greatVibes, playfair, poppins };
