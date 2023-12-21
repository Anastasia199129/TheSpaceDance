import Container from '../Container/Container'
import SocialIcons from '../SocialIcons/SocialIcons'

import s from './Footer.module.sass'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>
          <SocialIcons type="footer"/>
        </div>
      </Container>
    </footer>
  )
}
