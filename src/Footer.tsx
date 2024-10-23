"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon size={28} />
  </motion.a>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white bg-opacity-10 rounded-full"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-light mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light mb-6">Get in Touch</h3>
            <p className="mb-6 text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="flex space-x-6">
              <SocialLink
                href="https://github.com"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:example@email.com"
                icon={Mail}
                label="Email"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light mb-6">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 px-6 py-1 rounded-full bg-white text-gray-900 font-medium hover:bg-opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
