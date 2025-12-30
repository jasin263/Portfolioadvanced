import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 backdrop-blur shadow-xl border border-white/10"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-300">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4 text-left">
          <p><span className="font-bold text-cyan-300">Address:</span><br />13/13 SHAKTHI MURUGAN NAGAR- CBE</p>
          <p><span className="font-bold text-cyan-300">Phone:</span><br />+91 8807639586</p>
          <p><span className="font-bold text-cyan-300">E-Mail:</span><br />davidjasin60@gmail.com</p>
          <p><span className="font-bold text-cyan-300">Social Media:</span><br />
            <a href="https://www.linkedin.com/in/jasin-david-1356b6186" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mr-4">LinkedIn</a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">GitHub</a>
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* You can add your contact image here if available in assets */}
          {/* <img src={require("../assets/contact-me.png")} alt="Contact" className="w-40 h-40 object-contain" /> */}
        </div>
      </div>
      <div className="mt-10">
        {submitted ? (
          <div className="text-xl text-cyan-300 font-semibold text-center py-8">
            Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        )}
      </div>
      <footer className="mt-10 text-gray-400 text-sm">&copy; 2025 Jasin David Jaya Singh. All rights reserved.</footer>
    </motion.section>
  );
}
