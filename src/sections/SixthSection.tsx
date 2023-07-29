import { InfoBox } from '@/layout/Container/InfoBox'
import imgInfoBox5 from '../../public/media/infoImg5.png'
import React from 'react'

export const SixthSection = () => {
  return (
    <>
      <InfoBox
        customBoxStyle='bg-blue-light'
        image={imgInfoBox5}
        width={689}
        height={513}
        subscribe={false}
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">Biocloud Tablet registra asistencia, código de trabajo, solicita licencias y envía notificaciones</h3>
        <p className='font-md color-gray-500 text-card-biocloud'>Con Biocloud tablet convierte cualquier tablet en un punto de marcación de asistencia</p>
      </InfoBox>
    </>
  )
}
