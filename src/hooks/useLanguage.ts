import { useEffect, useState } from "react";
import { translations } from "../data/translations";
import type { Language } from "../data/translations";

const DEFAULT_LANGUAGE: Language = "pt";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage && savedLanguage in translations) {
      return savedLanguage;
    }

    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}
