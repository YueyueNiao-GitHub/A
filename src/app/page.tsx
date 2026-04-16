import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import WhatIDo from "@/components/sections/WhatIDo";
import HowIThink from "@/components/sections/HowIThink";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 背景网格 */}
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />

      <Nav />

      <main className="relative z-10 pt-24">
        <Hero />
        <SelectedWork />
        <WhatIDo />
        <HowIThink />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
