// import '@/public/styles/globals.sass'

import { unstable_setRequestLocale } from 'next-intl/server'

import dynamic from 'next/dynamic'


import { useTranslations } from 'next-intl'

// import Hero from '@/components/Hero/Hero'
// import SocialIcons from '@/components/SocialIcons/SocialIcons'
import Address from '@/components/Address/Address'
import Schedules from '@/components/Schedules/Schedules'
// import ChacraForm from '@/components/Form/ChacraForm'
// import VideoPage from '@/components/VideosList/VideosList'

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
