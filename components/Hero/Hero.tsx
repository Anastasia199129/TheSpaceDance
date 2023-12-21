import { useTranslations } from 'next-intl'

import s from './Hero.module.sass'

interface Props {
  backgroundImage: string
  title: string
}

export default function Hero({ backgroundImage, title}:Props) {

  const trTitle = useTranslations('heroTitle')
  const trSubtitle = useTranslations('heroSubtitle')

  return (
    <div className={s.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={s.content}>
      <h2>{trTitle(title)}</h2>
      <p>{trSubtitle(title)}</p>
    </div>
  </div>
  )
}
