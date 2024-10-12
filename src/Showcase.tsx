"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application that uses machine learning to prioritize and categorize tasks, improving productivity and workflow efficiency.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
  },
  {
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology, ensuring the integrity and immutability of election results.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
  },
  {
    title: "AR Interior Design App",
    description:
      "An augmented reality application that allows users to visualize furniture and decor in their space before making a purchase.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "ARKit", "ARCore", "Three.js"],
  },
  {
    title: "Eco-Friendly Smart Home Hub",
    description:
      "An IoT platform that integrates various smart home devices with a focus on energy efficiency and sustainability.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Raspberry Pi", "MQTT", "React"],
  },
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        target.scrollLeft += event.deltaY;
      };
      target.addEventListener("wheel", handleWheel, { passive: false });
      return () => target.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <section ref={targetRef} className="bg-gray-100 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
          Portfolio Showcase
        </h2>

        <motion.div style={{ x }} className="flex space-x-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[600px] bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-gray-200 to-transparent rounded-full mix-blend-multiply"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-gray-300 to-transparent rounded-full mix-blend-multiply"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
