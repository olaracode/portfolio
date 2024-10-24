import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, User, Briefcase, Folder, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const navItems = [
  { translationKey: "nav.home", href: "#", icon: Home },
  { translationKey: "nav.about", href: "about", icon: User },
  { translationKey: "nav.career", href: "career", icon: Briefcase },
  { translationKey: "nav.portfolio", href: "portfolio", icon: Folder },
  { translationKey: "nav.contact", href: "contact", icon: Mail },
];

export default function FloatingBottomNav() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useTranslation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    if (currentScrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.nav
      className="fixed bottom-4 left-4 right-4 z-50"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-md mx-auto px-10 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between h-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              spy={true}
              smooth={true}
              duration={500}
              className="flex cursor-pointer flex-col items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-xs mt-1">
                {t(`${item.translationKey}`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
