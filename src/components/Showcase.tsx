"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "AI Task Manager",
    description: "Smart task prioritization using machine learning algorithms.",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    link: "https://ai-task-manager.example.com",
  },
  {
    title: "Blockchain Voting",
    description: "Secure and transparent voting system built on blockchain.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    link: "https://blockchain-voting.example.com",
  },
  {
    title: "AR Interior Design",
    description: "Visualize furniture in your space with augmented reality.",
    technologies: ["React Native", "ARKit", "ARCore", "Three.js"],
    link: "https://ar-interior-design.example.com",
  },
  {
    title: "Smart Home Hub",
    description: "IoT platform for energy-efficient home automation.",
    technologies: ["Python", "Raspberry Pi", "MQTT", "React"],
    link: "https://eco-smart-home.example.com",
  },
];

export default function NeonMinimalistPortfolioShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full min-h-screen bg-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">
          Portfolio Showcase
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <span className="mr-2">View Details</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
