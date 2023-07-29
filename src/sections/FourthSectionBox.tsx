import { InfoBox } from '@/layout/Container/InfoBox'
import React from 'react'
import imgInfoBox4 from '../../public/media/infoImg4.png'

export const FourthSectionBox = () => {
  return (
    <>
      <InfoBox
        customBoxStyle='bg-blue-light'
        image={imgInfoBox4}
        width={620}
        height={470}
        subscribe={false}
        rowReverse='flex-row-reverse'
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">Conoce el estado de tu equipo en cualquier momento y en el lugar que se encuentre</h3>
        <p className='font-lg color-gray-500 text-card-biocloud'>Biocloud APP, software adaptado al teletrabajo</p>
      </InfoBox>
    </>
  )
}
