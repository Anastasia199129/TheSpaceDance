import { ReactNode } from 'react'


import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ToastContainer } from 'react-toastify'

import Providers from '../providers'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import 'react-toastify/dist/ReactToastify.css'
import '@/public/styles/globals.sass'

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function LocaleLayout({ children, params }:LocaleLayoutProps) {

  const {locale} = params
  let messages

  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <title>TheSpaceDance</title>
      <body suppressHydrationWarning={true}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
            <main>
                <ToastContainer autoClose={2000} />
                {children}
            </main>
            <Footer/>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
