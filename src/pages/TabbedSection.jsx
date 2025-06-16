import React, { useState } from "react";
import Modal from "../components/Modal";

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

const tabContent = [researchPapers, projects, certifications];

export default function TabbedSection() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPdf, setModalPdf] = useState("");

  const openModalWithPdf = (pdfLink) => {
    setModalPdf(encodeURI(pdfLink));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalPdf("");
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActive(idx)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-base
              ${active === idx
                ? "bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white shadow-lg ring-2 ring-fuchsia-400"
                : "bg-black text-cyan-200 border border-cyan-700 hover:bg-cyan-900/40 hover:text-fuchsia-300"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-8 min-h-[220px] shadow-2xl border border-cyan-400/40 w-full flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {tabContent[active].map((item) => (
            <div key={item.name} className="bg-black/80 border border-cyan-700/40 rounded-xl p-4 shadow flex items-center justify-center min-h-[64px]">
              {(active === 0 || active === 2) ? (
                <button
                  onClick={() => openModalWithPdf(item.link)}
                  className="text-cyan-100 hover:underline hover:text-fuchsia-300 transition-colors duration-200 font-medium break-words text-center w-full"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 hover:underline hover:text-fuchsia-300 transition-colors duration-200 font-medium break-words text-center w-full"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <iframe
          src={modalPdf}
          title="Certificate PDF"
          className="w-full h-[80vh] rounded-md"
          frameBorder="0"
        />
      </Modal>
    </div>
  );
}
