import { InfoBox } from '@/layout/Container/InfoBox'
import imgInfoBox3 from '../../public/media/img.png'
import React from 'react'

export const ThirdSectionBox = () => {
  return (
    <>
      <InfoBox
        customBoxStyle='bg-7'
        image={imgInfoBox3}
        height={658}
        width={689}
        boxInfo='info-box-style'
        imageStyle={{objectFit: 'cover'}}
        columnReverse='flex-column-reverse'
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">Trabajo en la oficina, en casa o en movimiento...</h3>
        <p className='font-lg color-gray-500 text-card-biocloud'>Adapta tu empresa a los nuevos tiempos, Gestiona el teletrabajo junto a Biocloud</p>
      </InfoBox>
    </>
  )
}
