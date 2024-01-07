'use client'

import links from '@/data/header.json'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'

import { useTranslations } from 'next-intl'
import { useState, useEffect, useRef } from 'react'

import s from './Header.module.sass'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

import { useTheme } from 'next-themes'
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Container from '../Container/Container'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import useWindowWidth from '../../helpers/windiwWidthHandler'
import { link } from 'fs'

export default function Header() {
  const t = useTranslations('header')
  const { theme } = useTheme()
  const path = usePathname()
  const trimmedPath = path.replace(/^\/[a-z]{2}/, '')

  const windowWidth = useWindowWidth()

  const [active, setActive] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const params: Params = useParams()

  useEffect(() => {
    const onOutsideMenuClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowMenu(false)
        setActive(false)
      }
    }
    document.addEventListener('click', onOutsideMenuClick)

    return () => {
      document.removeEventListener('click', onOutsideMenuClick)
    }
  }, [])

  const getActiveLink = (link: string) => {
    if (link === trimmedPath || link === '/') {
      return true
    } else return false
  }

  const onToggleMenuClick = () => {
    setActive(!active)
    setShowMenu(!showMenu)
  }

  return (
    <header className={s.header}>
      <Container>
        {/* 
          <ul className={`${s.list} ${theme === 'dark' ? s.dark : s.light}`}>
            {links.map(({ id, name, link }) => (
              <li
                className={`${
                  (trimmedPath && link === trimmedPath) ||
                  (!trimmedPath && link === '/')
                    ? s.active
                    : s.not
                }`}
                key={id}
              >
                <Link className={s.link} href={link}>
                  {t(name)}
                </Link>
              </li>
            ))}
          </ul> */}

        {windowWidth >= 992 ? (
          <>
            <div className={s.wrapper}>
              <div className={s.absolute}>
                <LanguageSwitcher />
              </div>
              <div className={s.absoluteThemeSwitcher}>
                <ThemeSwitcher />
              </div>
              <ul className={`${s.list} ${theme === 'dark' ? s.dark : s.light}`}>
              {links?.map(({ id, name, link }) => (
                <li
                  className={`${
                    (trimmedPath && link === trimmedPath) ||
                    (!trimmedPath && link === '/')
                      ? s.active
                      : s.not
                  }`}
                  key={id}
                >
                  <Link className={s.link} href={`${link}`}>{t(name)}</Link>
                </li>
              ))}
            </ul>
            </div>
          
          </>
        ) : (
          <>
            <div className={`${s.wrapper}`} >
              <div className={s.absolute}>
                <LanguageSwitcher />
              </div>
              <div className={s.absoluteThemeSwitcher}>
                <ThemeSwitcher />
              </div>
              <div className={`${s.burgerWrapper}`}>
              <button
                ref={buttonRef}
                onClick={onToggleMenuClick}
                className={`${s.burger} ${active ? s.active : ''}`}
              ></button>
              {showMenu && (
                <ul
                  className={`${s.menu} ${theme === 'dark' ? s.dark : s.light}`}
                >
                  {links?.map(({ id, name, link }) => (
                    <li
                      className={`${
                        (trimmedPath && link === trimmedPath) ||
                        (!trimmedPath && link === '/')
                          ? s.active
                          : s.not
                      }`}
                      key={id}
                    >
                      <Link className={s.link} href={`${link}`}>{t(name)}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            </div>
          
          </>
        )}
      </Container>
    </header>
  )
}
