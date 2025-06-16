import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-500 text-white font-bold text-lg shadow-lg transition-all duration-300
                ring-2 ring-cyan-400/60 hover:ring-cyan-300/90 hover:bg-cyan-400
                hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.7)] focus:outline-none focus:ring-4 focus:ring-cyan-300/80
                animate-pulse hover:animate-none"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <footer className="mt-10 text-gray-400 text-sm">&copy; 2025 Jasin David Jaya Singh. All rights reserved.</footer>
    </motion.section>
  );
}
