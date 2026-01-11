import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur bg-white/10 border-b border-white/10 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow">My Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors px-3 py-1 rounded-lg font-medium hover:bg-cyan-500/20 hover:text-cyan-300 ${location.pathname === item.path ? "bg-cyan-400/20 text-cyan-300" : ""
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/MY%20RESUME%20-FINAL.pdf"
            className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow transition-all duration-300
              ring-2 ring-cyan-400/60 hover:ring-cyan-300/90 hover:bg-cyan-400
              hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.7)] focus:outline-none focus:ring-4 focus:ring-cyan-300/80
              animate-pulse hover:animate-none"
            download="Resume-Jasin-David.pdf"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-cyan-500/20"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-cyan-300 ${location.pathname === item.path ? "text-cyan-400" : "text-cyan-100"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/MY%20RESUME%20-FINAL.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold shadow transition-all duration-300
                        ring-2 ring-cyan-400/60 hover:bg-cyan-400"
                download="Resume-Jasin-David.pdf"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
