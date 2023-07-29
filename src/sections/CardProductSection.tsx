import { CardProduct } from '@/layout/Cards/CardProduct'
import React from 'react'
import cardProduct1 from '../../public/media/cardProduct1.png'
import cardProduct2 from '../../public/media/cardProduct2.png'
import cardProduct3 from '../../public/media/cardProduct3.png'
import cardProduct4 from '../../public/media/cardProduct4.png'
import cardProduct5 from '../../public/media/cardProduct5.png'
import cardProduct6 from '../../public/media/cardProduct6.png'
import cardProduct7 from '../../public/media/cardProduct7.png'

const cards = [
  {
    id: 1,
    src: cardProduct1,
    title: 'Horus TL1 Pro'
  },
  {
    id: 2,
    src: cardProduct2,
    title: 'MB20- VL'
  },
  {
    id: 3,
    src: cardProduct3,
    title: 'FaceKiosk V43'
  },
  {
    id: 4,
    src: cardProduct4,
    title: 'Horus TL1'
  },
  {
    id: 5,
    src: cardProduct5,
    title: 'EFace10'
  },
  {
    id: 6,
    src: cardProduct6,
    title: 'FaceKiosk V32'
  },
  {
    id: 7,
    src: cardProduct7,
    title: 'FaceKiosk H32'
  },
]

export const CardProductSection = () => {
  return (
    <section className='section mt-100 mb-100'>
      <div className='container d-flex flex-wrap justify-content-center justify-content-xl-start' style={{gap: '30px'}}>
      {
        cards.map(card => <CardProduct 
          key={card.id}
          title={card.title}
          cardProductImg={card.src}
        />)
      }
      </div>
    </section>
  )
}
