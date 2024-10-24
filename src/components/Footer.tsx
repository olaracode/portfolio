"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { FooterT } from "@/config";
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

export default function Footer({ content }: { content: FooterT }) {
  return (
    <footer className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light mb-6">{content.subtitle}</h3>
            <p className="mb-6 text-gray-300">{content.description}</p>
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
        </div>
        <motion.div
          className="mt-16 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Octavio Lara. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
