import Image from 'next/image'
import React from 'react'
import frame1 from '../../public/media/pantalla5.png'
import frame2 from '../../public/media/pantalla6.png'
import frame3 from '../../public/media/pantalla2.png'
import frame4 from '../../public/media/pantalla4.png'

const frames = [
  {
    id: 1,
    src: frame1
  },
  {
    id: 2,
    src: frame2
  },
  {
    id: 3,
    src: frame3
  },
  {
    id: 4,
    src: frame4
  },
]

export const FramesSection = () => {
  return (
    <section className='section mt-100'>
      <div className="container-fluid" style={{padding: '0'}}>
        <div className="d-none d-lg-flex overflow-hidden justify-content-center" style={{gap: '30px'}}>
          {
            frames.map(frame => <Image src={frame.src} key={frame.id} alt='pantalla' className='flex-shrink' width={488} height={235} />)
          }
        </div>
      </div>
    </section>
  )
}
