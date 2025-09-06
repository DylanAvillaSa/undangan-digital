"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.1, // kecepatan scroll
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}>
      {children}
    </div>
  );
}
