'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

import SwitcherTheme from '@/components/ThemeSwitcher/SwitcherTheme'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Проверка, есть ли значение темы в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Если нет, установите значение по умолчанию (например, светлая тема)
      setTheme('light');
    }
  }, [setTheme]);

  if (!mounted) {
    return null
  }

  return (
    <div>
      <SwitcherTheme theme={theme} setTheme={setTheme} />
    </div>
  )
}
