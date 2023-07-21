import Image from 'next/image'
import React from 'react'
import frame1 from '../../public/media/pantalla1.png'
import frame2 from '../../public/media/pantalla2.png'

const frames = [
  {
    id: 1,
    src: frame1
  },
  {
    id: 2,
    src: frame2
  },
]

export const FramesSection = () => {
  return (
    <section className='section mt-100'>
      <div className="container" style={{padding: '0'}}>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{gap: '30px'}}>
          {
            frames.map(frame => <Image 
              src={frame.src} 
              key={frame.id} 
              alt='pantalla' 
              className='flex-shrink' 
              style={{height: 'auto', width: 'auto'}}
              width={673} 
              height={376} 
            />)
          }
        </div>
      </div>
    </section>
  )
}
