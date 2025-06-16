import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 85 },
  { name: "R Programming", level: 75 },
  { name: "C/C++", level: 60 },
  { name: "Machine Learning", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Tableau", level: 60 },
  { name: "HTML/CSS", level: 45 },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 backdrop-blur shadow-xl border border-white/10"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-300">Skills</h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-lg text-gray-200 font-semibold">{skill.name}</span>
              <span className="text-cyan-300 font-bold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-10 text-gray-400 text-sm">&copy; 2025 Jasin David Jaya Singh. All rights reserved.</footer>
    </motion.section>
  );
}
