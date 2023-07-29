import { Card } from '@/layout/Cards/Card'
import { CardRow } from '@/layout/Container/CardRow'
import { FeaturesBox } from '@/layout/FeaturesBox'
import { StartBtn } from '@/layout/Buttons/StartBtn'
import tabletImg from '../../public/media/tabletImg.png'
import icon17 from '../../public/media/icon-17.svg'
import icon18 from '../../public/media/icon-18.svg'
import icon19 from '../../public/media/icon-19.svg'
import icon20 from '../../public/media/icon-20.svg'
import Image from 'next/image'
import React from 'react'

const cardsInfo = [
  {
    id: 1,
    img: icon17,
    title: 'App Fichaje',
    text: 'Fichaje de entrada y salida con un solo clic, a través de la APP.'
  },
  {
    id: 2,
    img: icon18,
    title: 'Tablet',
    text: 'Convierte cualquier tablet en un punto de acceso con la appp de Biocloud.'
  },
  {
    id: 3,
    img: icon19,
    title: 'Quién está trabajando',
    text: 'Comprueba, en una sola vista, quién está trabajando desde cualquier lugar.'
  },
  {
    id: 4,
    img: icon20,
    title: 'Informes',
    text: 'Informes y estadísticas de fichajes para optimizar el tiempo de tu equipo.'
  },
]

export const FeaturesSection = () => {
  return (
    <>
      <FeaturesBox
        image={tabletImg}
        width={686}
        height={472}
      >
        <h2 className='font-bold-800 text-card-biocloud'>Tablet fichaje</h2>
        <Image className='info-image d-block d-lg-none' alt='' width={686} height={472} src={tabletImg} />
        <CardRow wrap='flex-wrap'>
          {
            cardsInfo.map(item => <Card 
              key={item.id} 
              text={item.title} 
              paragraph={item.text} 
              img={item.img}  
              cardStyle='col-sm-6 col-11'
            />)
          }
        </CardRow>
        <div className="">
          <StartBtn customStyles='bg-brand-1 start-btn-margin' />
        </div>
        
      </FeaturesBox>
    </>
  )
}
