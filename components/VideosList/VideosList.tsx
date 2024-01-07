import Container from '../Container/Container'
import s from './VideosList.module.sass'

import data from '@/data/Home/videoList.json'
import { FaVideo } from "react-icons/fa6"

const VideoPage = () => {
  return (
    <section>
      <Container>
        <h2 className={s.title}>
          <FaVideo/>
          Videos</h2>
        <div className={s.videoListContainer}>
          {data?.map(({ id, src, title }) => (
            <div key={id}>
            {/* <p>{title}</p> */}
              <p>{title}</p>
              <iframe
                src={src}
                title='YouTube Video'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              >
              </iframe>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default VideoPage
