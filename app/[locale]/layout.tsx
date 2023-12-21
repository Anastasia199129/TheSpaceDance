import { ReactNode } from 'react'

import Container from '@/components/Container/Container'
import Header from '@/components/Header/Header'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import '@/public/styles/globals.sass'
import Providers from '../providers'
import Footer from '@/components/Footer/Footer'

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
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
            <main>
              <Container>
                {children}
              </Container>
            </main>
            <Footer/>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
