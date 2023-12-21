import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'

import s from './LanguageSwitcher.module.sass'

function LanguageSwitcher() {
  
  const pathName = usePathname()

  return (
    <div>
      <Link href={pathName.replace('/en', '/es')} locale='en'>
        <Image alt='es' width={25} height={25} src='/img/es.svg' />
      </Link>
      <Link href={pathName.replace('/es', '/en')} locale='es'>
        <Image alt='en' width={25} height={25} src='/img/en.svg' />
      </Link>
    </div>
  )
}

export default LanguageSwitcher
