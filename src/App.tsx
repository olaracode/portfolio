import About from "./components/About";
import Hero from "./components/Hero";
import Career from "./components/Career";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import config from "./config";
function App() {
  const content = config.es;
  return (
    <>
      <Hero content={content.header} />
      <About content={content.about} />
      <Career content={content.career} />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-24">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={`M0,${50 + index * 10} Q50,${50 - index * 10} 100,${
                      50 + index * 10
                    }`}
                    fill="none"
                    stroke={`rgba(107, 114, 128, ${0.2 - index * 0.03})`}
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Showcase content={content.portfolio} />
      <Footer content={content.footer} />
    </>
  );
}

export default App;
