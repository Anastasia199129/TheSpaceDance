import s from './Container.module.sass'
interface Props {
  children: any,
  size?: 'big' | 'middle' | 'small'
}

export default function Container({ children, size = 'big' }: Props) {

  return <div className={`
    ${s.container}
    ${size === 'big' ? s.big : ''}
    ${size === 'middle' ? s.middle : ''}
    ${size === 'small' ? s.small : ''}
  `}>
    {children}
  </div>
}
