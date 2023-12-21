'use client'

import links from '@/data/header.json'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

import s from './Header.module.sass'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

import { useTheme } from 'next-themes'
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Container from '../Container/Container'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { json } from 'stream/consumers'

export default function Header() {
  const t = useTranslations('header')
  const { theme } = useTheme()
  const path = usePathname()
  const trimmedPath = path.replace(/^\/[a-z]{2}/, '')

  const params: Params = useParams()

  // console.log(params);

  console.log(trimmedPath)

  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <div className={s.absolute}>
            <LanguageSwitcher />
          </div>
          <div className={s.absoluteThemeSwitcher}>
            <ThemeSwitcher />
          </div>
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
          </ul>
        </div>
      </Container>
    </header>
  )
}
