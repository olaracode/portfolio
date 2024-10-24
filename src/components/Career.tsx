import { CareerT } from "@/config";
import { motion } from "framer-motion";

export default function AnimatedWorkExperience({
  content,
}: {
  content: CareerT;
}) {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-light text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>

        <div className="space-y-12">
          {content.experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                {experience.position}
              </h3>
              <p className="text-lg text-gray-600 mb-2">{experience.company}</p>
              <p className="text-sm text-gray-500 mb-4">{experience.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + itemIndex * 0.05,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
