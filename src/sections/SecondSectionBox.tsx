import { InfoBox } from '@/layout/Container/InfoBox'
import { StartBtn } from '@/layout/Buttons/StartBtn'
import imgInfoBox2 from '../../public/media/img-infobox.png'
import React from 'react'

export const SecondSectionBox = () => {
  return (
    <>
      <InfoBox
        image={imgInfoBox2}
        customBoxStyle='bg-blue-light'
        subscribe={false}
        width={689}
        height={513}
      >
        <h3 className="mt-15 biocloud-text-color text-card-biocloud">¿Necesitás ayuda para configurar Biocloud?</h3>
        <ul className='list-info-box'>
          <li className='font-md-bold'>Pedal de arranque</li>
          <li className='font-md-bold'>Capacitación</li>
          <li className='font-md-bold'>Soporte</li>
          <li className='font-md-bold'>Mantenimiento</li>
        </ul>
        <div className="">
          <StartBtn customStyles='list-info-box' />
        </div> 
      </InfoBox>
    </>
  )
}
