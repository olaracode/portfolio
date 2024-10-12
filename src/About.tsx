"use client";

import { motion } from "framer-motion";

export default function About() {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  return (
    <section className="w-full bg-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Abstract background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />

        <h2 className="text-4xl font-light text-gray-900 mb-12 text-center relative z-10">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Who I Am
            </h3>
            <p className="text-gray-600 mb-4">
              I'm Jane Smith, a full-stack developer crafting elegant, efficient
              web solutions. With 5+ years in tech, I blend creativity and
              technical expertise to build user-centric applications that push
              web boundaries.
            </p>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Education
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                MSc Computer Science, Stanford University
              </li>
              <li className="text-gray-600">BSc Software Engineering, MIT</li>
              <li className="text-gray-600">
                Full-Stack Web Development, Hack Reactor
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                whileHover={{ scale: 1.1, backgroundColor: "#e2e8f0" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
