import { unstable_setRequestLocale } from 'next-intl/server'

import dynamic from 'next/dynamic'

import { useTranslations } from 'next-intl'

import Address from '@/components/Address/Address'
import Schedules from '@/components/Schedules/Schedules'

const Hero = dynamic(() => import('@/components/Hero/Hero'))
const SocialIcons = dynamic(() => import('@/components/SocialIcons/SocialIcons'))
const ChacraForm = dynamic(() => import('@/components/Form/ChacraForm'), { ssr: false })
const VideoPage = dynamic(() => import('@/components/VideosList/VideosList'), { ssr: false })


interface IndexPageProps {
  params: {
    locale: string
  }
}

export default function IndexPage({ params: { locale } }: IndexPageProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')

  return (
    <>
      <h1>{t('title')}</h1>
      <Hero title='Home' backgroundImage='/img/Hero/dance.jpg' />
      <SocialIcons />
      <Schedules />
      <VideoPage/>
      <Address />
      <ChacraForm/>
    </>
  )
}
