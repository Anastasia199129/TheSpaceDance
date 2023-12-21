import {useTranslations} from 'next-intl'
import {getTranslator} from 'next-intl/server'
import { title } from 'process';

 export async function generatoMetadata(){
  const t = useTranslations('contacto');
return {
  title: t('tab-title-contacto'),
}
 }


export default function page() {
  const t = useTranslations('contacto');

  return (
    <div>{t('title')}</div>
  )
}
