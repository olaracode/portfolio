"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Role {
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Company {
  name: string;
  period: string;
  roles: Role[];
}

const careerExperiences: Company[] = [
  {
    name: "Tripleten",
    period: "2024 - Present",
    roles: [
      {
        title: "Tutor",
        period: "2023 - 2024",
        description:
          "As a Senior Full Stack Developer, I lead the development of cloud-native applications, focusing on scalable and maintainable solutions. I play a key role in architectural decisions and mentoring junior developers.",
        achievements: [
          "Implemented a microservices architecture that improved system scalability by 200%",
          "Led the adoption of Kubernetes, reducing deployment times by 70%",
          "Mentored 5 junior developers, accelerating their growth and productivity",
        ],
      },
    ],
  },
  {
    name: "4Geeks Academy",
    period: "2021 - 2024",
    roles: [
      {
        title: "Senior Tutor",
        period: "2023 - 2024",
        description:
          "As a Senior Full Stack Developer, I lead the development of cloud-native applications, focusing on scalable and maintainable solutions. I play a key role in architectural decisions and mentoring junior developers.",
        achievements: [
          "Implemented a microservices architecture that improved system scalability by 200%",
          "Led the adoption of Kubernetes, reducing deployment times by 70%",
          "Mentored 5 junior developers, accelerating their growth and productivity",
        ],
      },
      {
        title: "Teacher Assistant",
        period: "2021 - 2023",
        description:
          "In this role, I was responsible for developing and maintaining data-driven web applications. I focused on performance optimization and collaborated closely with the data science team to implement machine learning models into our products.",
        achievements: [
          "Optimized database queries, resulting in a 40% reduction in average response time",
          "Developed a real-time analytics dashboard using WebSockets and React",
          "Contributed to the development of an AI-powered recommendation engine",
        ],
      },
    ],
  },
  {
    name: "TechneStudio IT",
    period: "2022 - 2024",
    roles: [
      {
        title: "Frontend Developer",
        period: "2023 - 2024",
        description:
          "At WebFront Creations, I specialized in creating responsive and interactive user interfaces for various client projects. I worked closely with designers to implement pixel-perfect designs and ensure optimal user experiences across devices.",
        achievements: [
          "Developed a component library that increased team efficiency by 30%",
          "Implemented advanced animations using GSAP, enhancing user engagement",
          "Reduced load times by 50% through code splitting and lazy loading techniques",
        ],
      },
      {
        title: "Fullstack Developer",
        period: "2022 - 2022",
        description:
          "At WebFront Creations, I specialized in creating responsive and interactive user interfaces for various client projects. I worked closely with designers to implement pixel-perfect designs and ensure optimal user experiences across devices.",
        achievements: [
          "Developed a component library that increased team efficiency by 30%",
          "Implemented advanced animations using GSAP, enhancing user engagement",
          "Reduced load times by 50% through code splitting and lazy loading techniques",
        ],
      },
    ],
  },
  {
    name: "YOIFirst Wellbeing",
    period: "2022 - 2023",
    roles: [
      {
        title: "Frontend Developer",
        period: "2022 - 2023",
        description:
          "As a Junior Web Developer at CodeCraft Studios, I assisted in the development of websites and web applications. This role provided me with a solid foundation in full-stack development and exposed me to various technologies and best practices.",
        achievements: [
          "Contributed to the development of 10+ client websites",
          "Implemented responsive designs using CSS Grid and Flexbox",
          "Learned and applied SEO best practices to improve client site rankings",
        ],
      },
    ],
  },
];

export default function Career() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(
    careerExperiences[0]
  );
  const [selectedRole, setSelectedRole] = useState<Role | null>(
    careerExperiences[0].roles[0]
  );

  return (
    <section className="w-full bg-gray-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative"
      >
        <h2 className="text-4xl font-light text-gray-900 mb-12 text-center relative z-10">
          My Professional Journey
        </h2>

        <div className="relative z-10 flex flex-col lg:flex-row gap-8">
          {/* Left side - Job list */}
          <div className="lg:w-1/3 space-y-4">
            {careerExperiences.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`bg-white bg-opacity-80 p-4 rounded-lg shadow-md backdrop-filter backdrop-blur-sm cursor-pointer ${
                    selectedCompany?.name === company.name
                      ? "border-l-4 border-gray-800"
                      : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedCompany(company);
                    setSelectedRole(company.roles[0]);
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-500">{company.period}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Job details */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {selectedCompany && (
                <motion.div
                  key={selectedCompany.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm min-h-full"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {selectedCompany.name}
                  </h3>
                  <div className="space-y-6">
                    {selectedCompany.roles.map((role, index) => (
                      <motion.div
                        key={role.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className={`flex items-center cursor-pointer ${
                            selectedRole?.title === role.title
                              ? "text-gray-800"
                              : "text-gray-600"
                          }`}
                          onClick={() => setSelectedRole(role)}
                        >
                          <ChevronRight
                            size={20}
                            className={`mr-2 transition-transform ${
                              selectedRole?.title === role.title
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                          <h4 className="text-xl font-semibold">
                            {role.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-500 ml-7">
                          {role.period}
                        </p>

                        <AnimatePresence>
                          {selectedRole?.title === role.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 ml-7"
                            >
                              <p className="text-gray-600 mb-4">
                                {role.description}
                              </p>
                              <h5 className="text-lg font-semibold text-gray-800 mb-2">
                                Key Achievements:
                              </h5>
                              <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {role.achievements.map(
                                  (achievement, achievementIndex) => (
                                    <li key={achievementIndex}>
                                      {achievement}
                                    </li>
                                  )
                                )}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Abstract background elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-200 to-transparent rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-300 to-transparent rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
