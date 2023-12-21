'use client'

import Link from 'next/link'
import s from './SocialIcons.module.sass'
import YouTube from './img/YouTube'
import Facebook from './img/Facebook'
import TikTok from './img/TikTok'
import Instagram from './img/Instagram'

import { useTheme } from 'next-themes'

interface Props {
  type?: string
}

const SocialIcons = ({type}:Props) => {
  const { theme } = useTheme()

  return (
    <div className={`${s.container} ${type === 'footer' ? s.footerContainer : s.verticalContainer}`}>
      <Link
        href='ссылка на ваш Facebook'
        target='_blank'
        rel='noopener noreferrer'
      >
        <YouTube />
      </Link>

      <Link
        href='ссылка на ваш Twitter'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Facebook />
      </Link>

      <Link
        href='ссылка на ваш Instagram'
        target='_blank'
        rel='noopener noreferrer'
        className={`${theme === 'dark' ? s.dark : ''}`}
      >
        <TikTok />
      </Link>

      <Link
        href='ссылка на ваш Instagram'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Instagram />
      </Link>
    </div>
  )
}

export default SocialIcons
