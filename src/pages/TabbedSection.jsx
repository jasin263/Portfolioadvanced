import React, { useState } from "react";
import Modal from "../components/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { Award, FileText, ExternalLink, Eye, ChevronRight, ChevronLeft } from "lucide-react";

const tabs = ["Research Papers", "Projects", "Certifications"];

const researchPapers = [
  { name: "Machine Learning Model (1)", link: "/RESEARCH_PAPERS/Machine_Learning_Model (1).pdf" },
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

export default function TabbedSection() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPdf, setModalPdf] = useState("");

  // Carousel State
  const [currentCert, setCurrentCert] = useState(0);
  const [direction, setDirection] = useState(0);

  const openModalWithPdf = (pdfLink) => {
    setModalPdf(encodeURI(pdfLink));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalPdf("");
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentCert((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = certifications.length - 1;
      if (nextIndex >= certifications.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        rotateY: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActive(idx)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base tracking-wide
              ${active === idx
                ? "bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white shadow-[0_0_15px_rgba(232,121,249,0.5)] ring-2 ring-fuchsia-400"
                : "bg-black/50 backdrop-blur-sm text-cyan-200 border border-cyan-800 hover:bg-cyan-900/30 hover:text-fuchsia-300 hover:border-fuchsia-500/50"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 min-h-[300px] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-cyan-500/20 w-full relative overflow-hidden group flex flex-col items-center justify-center">
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]" />

        {/* Dynamic Content */}
        {active === 2 ? (
          // CERTIFICATES CAROUSEL
          <div className="w-full relative flex flex-col items-center justify-center h-[220px]">
            {/* Nav Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 z-20 p-2 bg-black/50 hover:bg-cyan-900/80 rounded-full border border-cyan-500/30 text-cyan-200 transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 z-20 p-2 bg-black/50 hover:bg-cyan-900/80 rounded-full border border-cyan-500/30 text-cyan-200 transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentCert}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full max-w-sm"
                onClick={() => openModalWithPdf(certifications[currentCert].link)}
              >
                <div className="relative bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/30 rounded-2xl p-6 cursor-pointer group/card overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(232,121,249,0.2)] transition-colors duration-500">
                  {/* Glossy sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 ring-1 ring-cyan-400/30 group-hover/card:ring-fuchsia-400/50 transition-all duration-500">
                      <Award className="text-cyan-300 group-hover/card:text-fuchsia-300 transition-colors" size={32} />
                    </div>
                    <div>
                      <h4 className="text-cyan-50 font-semibold text-lg leading-tight group-hover/card:text-white transition-colors">
                        {certifications[currentCert].name}
                      </h4>
                      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-cyan-400/70 uppercase tracking-widest font-bold group-hover/card:text-fuchsia-300/90 transition-colors">
                        <Eye size={12} />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute -bottom-10 flex gap-2">
              {certifications.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentCert ? 1 : -1);
                    setCurrentCert(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentCert === idx ? "w-6 bg-fuchsia-500 shadow-[0_0_8px_rgba(232,121,249,0.8)]" : "w-1.5 bg-cyan-900/50 hover:bg-cyan-700"}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // RESEARCH PAPERS & PROJECTS LAYOUT (Grid)
          <div className="grid grid-cols-1 gap-4 w-full">
            {(active === 0 ? researchPapers : projects).map((item) => (
              <div key={item.name} className="relative group/item w-full">
                {active === 0 ? (
                  <button
                    onClick={() => openModalWithPdf(item.link)}
                    className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all duration-300 group-hover/item:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-left"
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="text-cyan-400 group-hover/item:text-fuchsia-300 transition-colors" size={24} />
                      <span className="text-cyan-100 font-medium text-lg tracking-wide group-hover/item:text-white transition-colors">{item.name}</span>
                    </div>
                    <ChevronRight className="text-cyan-500/50 group-hover/item:text-fuchsia-400 group-hover/item:translate-x-1 transition-all" size={20} />
                  </button>
                ) : (
                  <a
                    href={item.link}
                    className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all duration-300 group-hover/item:shadow-[0_0_15px_rgba(6,182,212,0.1)] text-left"
                  >
                    <div className="flex items-center gap-4">
                      <ExternalLink className="text-cyan-400 group-hover/item:text-fuchsia-300 transition-colors" size={24} />
                      <span className="text-cyan-100 font-medium text-lg tracking-wide group-hover/item:text-white transition-colors">{item.name}</span>
                    </div>
                    <ChevronRight className="text-cyan-500/50 group-hover/item:text-fuchsia-400 group-hover/item:translate-x-1 transition-all" size={20} />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <iframe
          src={modalPdf}
          title="Document Viewer"
          className="w-full h-full rounded-lg bg-white"
          frameBorder="0"
        />
      </Modal>
    </div>
  );
}
