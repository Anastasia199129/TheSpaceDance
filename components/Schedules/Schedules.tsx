'use client'

import { useTranslations } from 'next-intl'

import s from './Schedules.module.sass'

export default function Schedules() {
  const t = useTranslations('schedule')

  return (
    <ul className={s.list}>
      <li>
        <p>{t('weekend')}</p>
      </li>
      <li>
        <p>{t('workDays')}</p>
      </li>
    </ul>
  )
}
