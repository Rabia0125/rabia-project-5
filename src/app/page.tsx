"use client"

import React, { useEffect } from "react";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  },[]);
  return (
    <main>
      <Home />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
