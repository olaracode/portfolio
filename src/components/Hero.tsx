import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HeaderT } from "@/config";
export default function Hero({ content }: { content: HeaderT }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gray-100 text-gray-900"
      id="#"
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          backgroundSize: "200px 200px",
        }}
      />

      {/* Minimalist background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-200 rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-300 rounded-tl-full" />
      </div>

      {/* Subtle interactive element */}
      <motion.div
        className="absolute w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply opacity-20"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-6xl sm:text-7xl font-light mb-6 tracking-tight">
          <span className="block">{content.title}</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-md font-light text-gray-600">
          {content.description}
        </p>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
          className="px-8 cursor-pointer py-3 text-lg font-light bg-gray-900 text-gray-100 rounded-sm hover:bg-gray-800 transition-colors"
        >
          {content.button}
        </Link>
      </div>

      {/* Minimalist decorative elements */}
      <div className="absolute bottom-8 left-8 w-16 h-1 bg-gray-400" />
      <div className="absolute top-8 right-8 w-1 h-16 bg-gray-400" />
    </div>
  );
}
