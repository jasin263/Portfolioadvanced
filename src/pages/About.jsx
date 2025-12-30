import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

// Lucide icons or simple SVG replacements if lucide is not installed
const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);

const PROJECTS = [
  {
    title: "Student Performance Analysis and Prediction",
    details: [
      "Duration: June – August 2024",
      "Objective: The primary objective of this project is to analyze and predict student performance based on various data points such as test scores, attendance, and extracurricular activities.",
      "Tools or techniques used: Python, Pandas, MySQL, Scikit-learn, Tkinter",
      "Outcome: Enhanced personalized support through targeted interventions, Improved academic outcomes by addressing issues early."
    ]
  },
  {
    title: "Brain Tumour Classification from MRI Images",
    details: [
      "Classified brain MRI images into tumor types using preprocessing and ML models like Random Forest and SVM.",
      "Developed a machine learning pipeline to classify brain MRI images into categories like glioma, meningioma, pituitary, and no tumor.",
      "Used: Image preprocessing (grayscale conversion, histogram equalization, edge detection), feature extraction, and classifiers like Random Forest and SVM."
    ]
  },
  {
    title: "Automated Backup & File Transfer System",
    details: [
      "A web based backup tool that automates the process of backing up in real time.",
      "Developed a robust, scalable system using Django to automate secure data backup and file synchronization across multiple servers.",
      "Integrated user authentication, server configuration, and real-time monitoring with intuitive dashboards and flexible scheduling.",
      "Enabled automated file discovery, concurrent transfers with retry logic, and cron-based custom backup scheduling.",
      "Leveraged Django ORM and Python concurrency to deliver efficient, maintainable, and enterprise-ready backup operations."
    ]
  },
  {
    title: "Self-Driving Car Simulator (Reinforcement Learning)",
    details: [
      "An RL-based autonomous driving simulator featuring 2D and 3D environments, where a DQN agent (Stable-Baselines3) learns lane switching and obstacle avoidance through sensor-based perception.",
      "Key Highlights: 🚗 2D & 3D Simulations: Pygame (top-down) and Ursina (immersive 3D), 🧠 Reinforcement Learning, 📊 Real-time Visualization, 🛣️ Lane Switching."
    ]
  },
  {
    title: "Face Mask Detection Using Deep Learning (YOLO)",
    details: [
      "Real-time face mask detection system using the YOLO (You Only Look Once) deep learning model.",
      "YOLO efficiently detects faces and classifies them as mask or no mask in a single forward pass, enabling fast and accurate performance on images and live video streams.",
      "System is trained on labeled face-mask datasets and is suitable for real-world surveillance, public safety, and access-control applications."
    ]
  }
];

export default function About() {
  const [tabIdx, setTab] = useState(0);
  const location = useLocation();

  // Project Carousel State
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (location.hash === "#projects") {
      setTab(1);
    }
  }, [location]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    // Use modulo for cycling
    let nextIndex = currentProject + newDirection;
    if (nextIndex < 0) nextIndex = PROJECTS.length - 1;
    if (nextIndex >= PROJECTS.length) nextIndex = 0;
    setCurrentProject(nextIndex);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto mt-10 p-4 md:p-8 rounded-2xl mb-24"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-200 text-center">About Me</h2>

      {/* Intro Card */}
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-cyan-400/40 mb-8">
        <p className="text-lg text-cyan-100 mb-0 text-center">
          A passionate and enthusiastic person curious about harnessing the power of data to drive insights and innovation. My academic journey has equipped me with a foundation in data analysis, Python, SQL, Data Visualization and Machine Learning.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {['Education', 'Project', 'Internships'].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setTab(idx)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 text-base
                ${tabIdx === idx
                  ? "bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white shadow-lg ring-2 ring-fuchsia-400"
                  : "bg-black text-cyan-200 border border-cyan-700 hover:bg-cyan-900/40 hover:text-fuchsia-300"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full relative min-h-[550px]">
          <AnimatePresence mode="wait">

            {/* Education Tab */}
            {tabIdx === 0 && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-black/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-cyan-400/30 flex flex-col gap-6 h-full"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center gap-2">🎓 Education</h3>
                <ol className="relative border-l-4 border-cyan-400/40 ml-4 space-y-8">
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">1</span>
                    <h4 className="font-semibold text-cyan-100">Integrated M.Sc. Data Science</h4>
                    <p className="text-cyan-100">Amrita Vishwa Vidyapeetham (2022-2027)</p>
                    <p className="text-cyan-100">CGPA: 8.27/10</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">2</span>
                    <h4 className="font-semibold text-cyan-100">Higher Secondary Education</h4>
                    <p className="text-cyan-100">NVLS Higher Secondary School (2020-2022)</p>
                    <p className="text-cyan-100">Subjects: Physics, Chemistry, Mathematics, English, Computer Science</p>
                    <p className="text-cyan-100">Marks / Grade: 87.2% (CBSE)</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">3</span>
                    <h4 className="font-semibold text-cyan-100">Secondary Education</h4>
                    <p className="text-cyan-100">Noble International School (2018-2020)</p>
                    <p className="text-cyan-100">Marks / Grade: 90.4% (CBSE)</p>
                  </li>
                </ol>
              </motion.div>
            )}

            {/* Projects Tab - CAROUSEL MODE */}
            {tabIdx === 1 && (
              <motion.div
                key="project"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-black/90 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-cyan-400/30 flex flex-col h-full relative overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center gap-2">📁 Projects</h3>

                {/* Carousel Container */}
                <div className="flex-1 flex flex-col items-center justify-center relative min-h-[400px]">

                  {/* Left Button */}
                  <button
                    onClick={() => paginate(-1)}
                    className="absolute left-0 z-10 p-2 bg-cyan-900/50 rounded-full hover:bg-cyan-700 transition-colors md:-ml-4 text-cyan-100"
                  >
                    <IconArrowLeft />
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={() => paginate(1)}
                    className="absolute right-0 z-10 p-2 bg-cyan-900/50 rounded-full hover:bg-cyan-700 transition-colors md:-mr-4 text-cyan-100"
                  >
                    <IconArrowRight />
                  </button>

                  <div className="w-full max-w-2xl overflow-visible px-8 relative h-[360px]">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={currentProject}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex flex-col gap-4 w-full absolute top-0 left-0 right-0 mx-auto"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex items-center justify-center w-8 h-8 bg-cyan-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/50">
                            {currentProject + 1}
                          </span>
                          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-fuchsia-300">
                            {PROJECTS[currentProject].title}
                          </h4>
                        </div>

                        <div className="text-cyan-100/90 text-[15px] space-y-3 leading-relaxed">
                          {PROJECTS[currentProject].details.map((point, i) => (
                            <p key={i} className="border-l-2 border-cyan-500/40 pl-3">
                              {point}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {PROJECTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentProject ? 1 : -1);
                        setCurrentProject(idx);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 
                        ${currentProject === idx ? "bg-cyan-400 w-8 shadow-[0_0_8px_cyan]" : "bg-cyan-900/60 hover:bg-cyan-700"}
                      `}
                    />
                  ))}
                </div>

              </motion.div>
            )}

            {/* Internships Tab */}
            {tabIdx === 2 && (
              <motion.div
                key="internships"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-black/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-cyan-400/30 flex flex-col gap-6 h-full"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center gap-2">💼 Internships</h3>
                <ol className="relative border-l-4 border-fuchsia-400/40 ml-4 space-y-8">
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-fuchsia-700 rounded-full ring-4 ring-black text-white font-bold">1</span>
                    <h4 className="font-semibold text-cyan-100">Data Visualization Intern</h4>
                    <p className="text-cyan-100">Prodigy InfoTech (online) - June 2024 – July 2024</p>
                    <p className="text-cyan-100">Objective: Data Visualization</p>
                    <p className="text-cyan-100">Tools or techniques used: Python, Google Collab, Pandas, Seaborn, Numpy, Matplotlib</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-fuchsia-700 rounded-full ring-4 ring-black text-white font-bold">2</span>
                    <h4 className="font-semibold text-cyan-100">Data Preprocessing & Data Visualization Intern</h4>
                    <p className="text-cyan-100">Cognifyz Technologies (online) - July 2024 – August 2024</p>
                    <p className="text-cyan-100">Objective: Data Preprocessing & Data Visualization</p>
                    <p className="text-cyan-100">Tools or techniques used: Python, Google Collab, Pandas, Seaborn, Numpy, Matplotlib</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-fuchsia-700 rounded-full ring-4 ring-black text-white font-bold">3</span>
                    <h4 className="font-semibold text-cyan-100">Web Development Intern</h4>
                    <p className="text-cyan-100">B2E Technologies (on-site) – April 2025 – June 2025</p>
                    <p className="text-cyan-100">Objective: Backup and File Transfer System Development</p>
                    <p className="text-cyan-100">Technologies: Django, Python, ORM, Concurrency, Cron Jobs</p>
                    <p className="text-cyan-100">Developing scalable backup systems, automating file discovery, and implementing retry logic with robust logging.</p>
                  </li>
                </ol>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
      <footer className="mt-10 text-cyan-100 text-sm text-center">&copy; 2025 Jasin David Jaya Singh. All rights reserved.</footer>
    </motion.section>
  );
}
