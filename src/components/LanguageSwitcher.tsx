import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "ca", label: "CA", flag: "🇦🇩" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mr-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-2 py-1 rounded text-xs font-semibold 
                bg-indigo-200 dark:bg-indigo-600 
                text-gray-800 dark:text-gray-200 
                hover:bg-indigo-100 dark:hover:bg-indigo-800 
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 
                flex items-center gap-1"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span>{languages.find((l) => l.code === currentLang)?.flag}</span>
        <span>
          {languages.find((l) => l.code === currentLang)?.label ||
            currentLang.toUpperCase()}
        </span>
        <span className="ml-1">▼</span>
      </button>
      {open && (
        <ul
          className="absolute left-0 mt-1 w-24 
                bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700 
                rounded shadow-lg z-50"
          role="listbox"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 text-left px-3 py-1 text-xs font-semibold rounded transition-colors duration-200 focus:outline-none
                  ${
                    currentLang === lang.code
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-100 dark:hover:bg-indigo-700 text-gray-800 dark:text-gray-200"
                  }
                `}
                role="option"
                aria-selected={currentLang === lang.code}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
