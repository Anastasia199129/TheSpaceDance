'use client'

import Link from 'next/link'

import { useTheme } from 'next-themes'

import Location from './img/Location'
import Email from './img/Email'
import Phone from './img/Phone'

import s from './Address.module.sass'

export default function Address() {
  const { theme } = useTheme()

  return (
    <address>
      <ul
        className={`${s.list} ${theme === 'light' ? s.listLight : s.listDark}`}
      >
        <li>
          <Link
            target='blank'
            href='https://www.google.com/maps/place/The+Space+Dance+Studios/@36.70821,-4.4537749,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76426ba3425:0xb2660d28c4172760!8m2!3d36.70821!4d-4.4512!16s%2Fg%2F11kc9ch8wc?entry=ttu'
          >
            <Location />
            Location
          </Link>
        </li>
        <li>
          <Link href='tel:+34611720791'>
            <Phone />
            +34 611 720 791
          </Link>
        </li>
        <li>
          <Link href='mailto:escuelajorgesafer@gmail.com'>
            <Email />
            escuelajorgesafer@gmail.com
          </Link>
        </li>
      </ul>
    </address>
  )
}
