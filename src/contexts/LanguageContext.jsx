import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {}
})

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    localStorage.setItem('language', language)
    document.documentElement.lang = language === 'id' ? 'id' : 'en'
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
