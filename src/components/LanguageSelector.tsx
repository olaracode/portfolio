import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type LanguageOptionsT = "en" | "es";
interface Language {
  code: LanguageOptionsT;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "EN" },
  { code: "es", name: "ES" },
];

export default function LanguageSelectorButtonGroup() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: LanguageOptionsT) => {
    i18n.changeLanguage(lng);
  };

  // Here you would typically update the app's language context or state

  return (
    <div className="inline-flex rounded-md shadow-sm mb-6" role="group">
      {languages.map((language) => (
        <motion.button
          key={language.code}
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            i18n.language === language.code
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:outline-none`}
          onClick={() => changeLanguage(language.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language.name}
        </motion.button>
      ))}
    </div>
  );
}
