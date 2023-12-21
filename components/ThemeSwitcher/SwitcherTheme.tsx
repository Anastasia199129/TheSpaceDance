'use client'

// import { useEffect } from 'react'
import Image from 'next/image'
// import { useColorTheme } from '../../store/ThemeContext';
import light from './img/light-theme-icon.svg'
import dark from './img/dark-theme-icon.svg'
import classes from './ThemeSwitcher.module.sass'

interface Props {
  setTheme: (arg: string) => void
  theme: string
}

export default function SwitcherTheme({setTheme, theme}:Props) {

  const onThemeSwitcherClickHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div onClick={onThemeSwitcherClickHandler}>
      <div className={classes.icon}>
        <Image
          src={theme === 'light' ? light : dark}
          alt='Change color theme'
          title='Change color theme'
        />
      </div>
    </div>
  )
}