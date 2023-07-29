import { InfoBox } from '@/layout/Container/InfoBox'
import imgInfoFluid from '../../public/media/infoImgFluid.png'
import React from 'react'

export const FifthSectionBox = () => {
  return (
    <>
      <InfoBox
        customBoxStyle='bg-7'
        containerStyle='container-fluid px-0'
        imageStyle={{objectFit: 'cover'}}
        image={imgInfoFluid}
        width={945}
        height={738}
        section='tablet'
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud text-card-biocloud">Tablet como reloj de personal</h3>
        <p className='font-2xl-bold color-gray-500 text-card-biocloud d-none d-lg-block'>Adapta tu empresa a los nuevos tiempos</p>
        <p className='font-xl-bold color-gray-500 text-card-biocloud d-none d-lg-block'>Gestiona el teletrabajo junto a Biocloud</p>
        <p className='font-md color-gray-500 text-card-biocloud d-lg-none'>Adapta tu empresa a los nuevos tiempos</p>
        <p className='font-md color-gray-500 text-card-biocloud d-lg-none'>Gestiona el teletrabajo junto a Biocloud</p>
      </InfoBox>
    </>
  )
}
