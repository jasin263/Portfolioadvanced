import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="backdrop-blur bg-white/10 border-b border-white/10 shadow-lg sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow">My Portfolio</div>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition-colors px-3 py-1 rounded-lg font-medium hover:bg-cyan-500/20 hover:text-cyan-300 ${
                  location.pathname === item.path ? "bg-cyan-400/20 text-cyan-300" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://drive.google.com/uc?export=download&id=1Hf-7CV05U4grhgusu1XGV6gI7OVvsRlD"
          className="ml-6 px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow transition-all duration-300
            ring-2 ring-cyan-400/60 hover:ring-cyan-300/90 hover:bg-cyan-400
            hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.7)] focus:outline-none focus:ring-4 focus:ring-cyan-300/80
            animate-pulse hover:animate-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
