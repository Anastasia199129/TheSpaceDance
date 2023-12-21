'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

const ColorThemeContext = createContext()

export function useColorTheme() {
  return useContext(ColorThemeContext)
}

export function ColorThemeProvider({ children }) {
  const isClient = typeof window !== 'undefined'
  const storedTheme = isClient ? localStorage.getItem('theme') : null
  const [theme, setTheme] = useState(storedTheme || 'light')

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <ColorThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ColorThemeContext.Provider>
  )
}
