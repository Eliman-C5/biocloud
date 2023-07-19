import { Card } from '@/layout/Card'
import { CardRow } from '@/layout/CardRow'
import React from 'react'
import icon1 from '../../public/media/icon-1.svg'
import icon2 from '../../public/media/icon-2.svg'
import icon3 from '../../public/media/icon-3.svg'
import icon4 from '../../public/media/icon-4.svg'
import { StartBtn } from '@/layout/StartBtn'

const cardsInfo = [
  {
    id: 1,
    img: icon1,
    text: 'Control de horas'
  },
  {
    id: 2,
    img: icon2,
    text: 'Asistencia'
  },
  {
    id: 3,
    img: icon3,
    text: 'Seguimiento de personal'
  },
  {
    id: 4,
    img: icon4,
    text: 'Recopilación de información'
  },
]

export const CardsSection = () => {
  return (
    <section className='section mt-50'>
      <div className="container">
        <h2 style={{color: '#071920', textAlign: 'center'}} className='mb-50'>Ayudamos a simplificar las tareas tediosas</h2>
        <CardRow>
          {
            cardsInfo.map(item => <Card key={item.id} img={item.img} text={item.text} />)
          }
        </CardRow>
        <StartBtn customStyles='m-auto' />
      </div>
    </section>
  )
}
