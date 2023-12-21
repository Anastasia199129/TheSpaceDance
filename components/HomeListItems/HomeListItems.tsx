'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

import s from './HomeListItems.module.sass'

interface Props {
  data: {
    id: string
    name: string
    link: string
  }[]
}

export default function HomeListItems({ data }: Props) {

  const cardHover = useRef(false)
  const t = useTranslations('Index')
  const links = useTranslations('IndexLinks')

  const { theme } = useTheme()


  const onMouseEnter = () => {
    cardHover.current = true
    console.log(true);
    
  }

  const onMouseLeave = () => {
    cardHover.current = false
    console.log(false);
    
  }

  console.log('rerender');
  

  return (
    <ul className={`${s.list} ${theme === 'dark' ? s.dark : s.light} ${cardHover.current? 'hover': 'noHover'}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      {data?.map(({ id, name, link }) => (
        <li className={s.item} key={id}>
          <Link className={s.link} href={link}>
            <Image
              src='/img/img.jpg'
              height={200}
              width={1000}
              alt='alt'
            />
            <div className={s.absolute}>
              <h3>{links(name)}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}