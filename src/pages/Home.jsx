import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import TabbedSection from "./TabbedSection";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  { name: "Python", level: 85 },
  { name: "R Programming", level: 75 },
  { name: "C/C++", level: 60 },
  { name: "Machine Learning", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Tableau", level: 60 },
  { name: "HTML/CSS", level: 45 },
];

const researchPapers = [
  { name: "Machine Learning Model (1)", link: "/Machine_Learning_Model (1).pdf" },
];
const projects = [
  { name: "View Projects", link: "/about#projects" },
];
const certifications = [
  { name: "Business Analysis and Process Management", link: "/CERTIFICATES- JASIN DAVID/Business Analysis and Process Management.pdf" },
  { name: "Introduction to Data Analysis using Microsoft Excel", link: "/CERTIFICATES- JASIN DAVID/Introduction to Data Analysis using Microsoft Excel.pdf" },
  { name: "Letter of Recommendation - Prodidgy Infotech", link: "/CERTIFICATES- JASIN DAVID/Letter of Recommendation - Prodidgy Infotech.pdf" },
  { name: "Prodigy Certificate", link: "/CERTIFICATES- JASIN DAVID/Prodigy Certificate.pdf" },
  { name: "Using Basic Formulas and Functions in Microsoft Excel", link: "/CERTIFICATES- JASIN DAVID/Using Basic Formulas and Functions in Microsoft Excel.pdf" },
];

import { useState } from "react";

export default function Home() {
  const [showRole, setShowRole] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-2 font-[Inter,sans-serif]"
    >
      {/* Glassy neon frame */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-8 rounded-3xl border-4 border-cyan-400/80 shadow-[0_0_120px_40px_rgba(34,211,238,0.45)]" style={{boxShadow:'0 0 240px 0 #a21cafcc, 0 0 0 8px #000'}}></div>
      </div>
      <div className="flex justify-center w-full mb-10 z-10">
        <div className="bg-black/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-cyan-400/60 w-full max-w-2xl flex flex-col items-center">
          <img src={profileImg} alt="Profile" className="w-36 h-36 rounded-2xl border-4 border-cyan-400 shadow-2xl shadow-fuchsia-400/60 bg-black/90 backdrop-blur mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_2px_32px_rgba(168,85,247,0.45)] tracking-tight text-center">
            Welcome to my portfolio!
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow text-center">
            <Typewriter
              words={["I Am Jasin David"]}
              cursor
              cursorStyle="|"
              typeSpeed={45}
              deleteSpeed={30}
              delaySpeed={1200}
              loop={1}
              onLoopDone={() => setShowRole(true)}
            />
          </h2>
          <h3 className="text-xl md:text-2xl mb-6 text-center text-fuchsia-400 font-semibold min-h-[32px]">
            {showRole && (
              <Typewriter
                words={["Data Science Student"]}
                cursor
                cursorStyle="_"
                typeSpeed={45}
                deleteSpeed={30}
                delaySpeed={1200}
                loop={1}
              />
            )}
          </h3>
          <a
            href="/about"
            className="inline-block px-8 py-3 rounded-xl bg-black text-cyan-200 font-bold shadow-xl transition-all duration-300 text-lg
              border-2 border-cyan-400/80 hover:border-fuchsia-400/90 hover:text-fuchsia-300
              hover:shadow-[0_0_48px_12px_rgba(236,72,153,0.55)] focus:outline-none focus:ring-4 focus:ring-fuchsia-400/60"
          >
            Learn More About Me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center mb-12 z-10">
        <div className="w-full max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 tracking-tight text-center">Research Paper, Projects & Certifications</h3>
          <TabbedSection />
        </div>
      </div>
      <footer className="mt-10 text-cyan-100 text-sm z-10">&copy; 2025 Jasin David Jaya Singh. All rights reserved.</footer>
    </motion.section>
  );
}
