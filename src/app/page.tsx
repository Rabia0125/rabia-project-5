import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Hero() {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
