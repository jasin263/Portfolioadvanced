import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [tabIdx, setTab] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto mt-10 p-4 md:p-8 rounded-2xl"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-200 text-center">About Me</h2>
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-cyan-400/40 mb-8">
        <p className="text-lg text-cyan-100 mb-0 text-center">
          A passionate and enthusiastic person curious about harnessing the power of data to drive insights and innovation. My academic journey has equipped me with a foundation in data analysis, Python, SQL, Data Visualization and Machine Learning.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-center gap-4 mb-6">
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
        <div className="w-full">
          <AnimatePresence mode="wait">
            {tabIdx === 0 && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-black/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-cyan-400/30 flex flex-col gap-6 min-h-[520px]"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center gap-2">🎓 Education</h3>
                <ol className="relative border-l-4 border-cyan-400/40 ml-4">
                  <li className="mb-8 ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">1</span>
                    <h4 className="font-semibold text-cyan-100">Integrated M.Sc. Data Science</h4>
                    <p className="text-cyan-100">Amrita Vishwa Vidyapeetham (2022-2027)</p>
                    <p className="text-cyan-100">CGPA: 8.27/10</p>
                  </li>
                  <li className="mb-8 ml-6">
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
{tabIdx === 1 && (
              <motion.div
                key="project"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-black/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-cyan-400/30 flex flex-col min-h-[520px]"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center gap-2">📁 Projects</h3>
                <ol className="relative border-l-4 border-cyan-400/40 ml-4">
                  <li className="mb-8 ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">1</span>
                    <h4 className="font-semibold text-cyan-100">Student Performance Analysis and Prediction</h4>
                    <p className="text-cyan-100">Duration: June – August 2024</p>
                    <p className="text-cyan-100">Objective: The primary objective of this project is to analyze and predict student performance based on various data points such as test scores, attendance, and extracurricular activities.</p>
                    <p className="text-cyan-100">Tools or techniques used: Python, Pandas, MySQL, Scikit-learn, Tkinter</p>
                    <p className="text-cyan-100">Outcome: Enhanced personalized support through targeted interventions, Improved academic outcomes by addressing issues early.</p>
                  </li>
                  <li className="mb-8 ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">2</span>
                    <h4 className="font-semibold text-cyan-100">Brain Tumour Classification from MRI Images</h4>
                    <p className="text-cyan-100">Classified brain MRI images into tumor types using preprocessing and ML models like Random Forest and SVM.</p>
                    <p className="text-cyan-100">Developed a machine learning pipeline to classify brain MRI images into categories like glioma, meningioma, pituitary, and no tumor.</p>
                    <p className="text-cyan-100">Used: Image preprocessing (grayscale conversion, histogram equalization, edge detection), feature extraction, and classifiers like Random Forest and SVM.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-black text-white font-bold">3</span>
                    <h4 className="font-semibold text-cyan-100">Automated Backup & File Transfer System</h4>
                    <p className="text-cyan-100">A web based backup tool that automates the process of backing up in real time.</p>
                    <p className="text-cyan-100">Developed a robust, scalable system using Django to automate secure data backup and file synchronization across multiple servers.</p>
                    <p className="text-cyan-100">Integrated user authentication, server configuration, and real-time monitoring with intuitive dashboards and flexible scheduling.</p>
                    <p className="text-cyan-100">Enabled automated file discovery, concurrent transfers with retry logic, and cron-based custom backup scheduling.</p>
                    <p className="text-cyan-100">Leveraged Django ORM and Python concurrency to deliver efficient, maintainable, and enterprise-ready backup operations.</p>
                  </li>
                </ol>
              </motion.div>
            )}
{tabIdx === 2 && (
              <motion.div
                key="internships"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-black/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-cyan-400/30 flex flex-col min-h-[520px]"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center gap-2">💼 Internships</h3>
                <ol className="relative border-l-4 border-fuchsia-400/40 ml-4">
                  <li className="mb-8 ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-fuchsia-700 rounded-full ring-4 ring-black text-white font-bold">1</span>
                    <h4 className="font-semibold text-cyan-100">Data Visualization Intern</h4>
                    <p className="text-cyan-100">Prodigy InfoTech (online) - June 2024 – July 2024</p>
                    <p className="text-cyan-100">Objective: Data Visualization</p>
                    <p className="text-cyan-100">Tools or techniques used: Python, Google Collab</p>
                    <p className="text-cyan-100">Enhanced knowledge in python modules like Pandas, Seaborn, Numpy, Matplotlib</p>
                  </li>
                  <li className="mb-8 ml-6">
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-fuchsia-700 rounded-full ring-4 ring-black text-white font-bold">2</span>
                    <h4 className="font-semibold text-cyan-100">Data Preprocessing & Data Visualization Intern</h4>
                    <p className="text-cyan-100">Cognifyz Technologies (online) - July 2024 – August 2024</p>
                    <p className="text-cyan-100">Objective: Data Preprocessing & Data Visualization</p>
                    <p className="text-cyan-100">Tools or techniques used: Python, Google Collab</p>
                    <p className="text-cyan-100">Enhanced knowledge in python modules like Pandas, Seaborn, Numpy, Matplotlib</p>
                  </li>
<li className="ml-6">
  <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-fuchsia-700 rounded-full ring-4 ring-black text-white font-bold">3</span>
  <h4 className="font-semibold text-cyan-100">Web Development Intern</h4>
  <p className="text-cyan-100">B2E Technologies (on-site) – April 2025 – June 2025</p>
  <p className="text-cyan-100">Objective: Backup and File Transfer System Development</p>
  <p className="text-cyan-100">Tools or techniques used: Django, Python, Django ORM, Concurrency, Cron Jobs</p>
  <p className="text-cyan-100">Developed a scalable backup and file transfer system using Django for secure data synchronization across multiple servers.</p>
  <p className="text-cyan-100">Implemented user authentication, server configuration dashboards, and automated file discovery.</p>
  <p className="text-cyan-100">Integrated concurrent file transfer with retry logic and detailed logging for improved reliability.</p>
  <p className="text-cyan-100">Enabled flexible backup scheduling using custom intervals and cron expressions, along with real-time monitoring and notifications.</p>
  <p className="text-cyan-100">Leveraged Django ORM and Python concurrency for maintainability and enterprise-grade scalability.</p>
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
