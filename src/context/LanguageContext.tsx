import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (enText: string, arText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'en';
  }

  try {
    const candidateLanguages =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];

    for (const rawLang of candidateLanguages) {
      if (!rawLang) continue;
      const lang = rawLang.toLowerCase();
      if (lang.startsWith('ar')) {
        return 'ar';
      }
      if (lang.startsWith('en')) {
        return 'en';
      }
    }
  } catch {
    // fallback if navigator is restricted
  }

  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('nadia_portfolio_lang') as Language | null;
        if (saved === 'en' || saved === 'ar') return saved;
      } catch {
        // ignore localStorage access error
      }
    }
    return getSystemLanguage();
  });

  const isRTL = language === 'ar';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('nadia_portfolio_lang', lang);
      } catch {
        // ignore localStorage access error
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      if (isRTL) {
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.classList.remove('rtl');
      }
    }
  }, [language, isRTL]);

  // Helper function to return translation if provided, otherwise fallback to English
  const t = (enText: string, arText?: string): string => {
    if (language === 'ar' && arText) {
      return arText;
    }
    return enText;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
