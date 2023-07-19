import { childrenProp } from '@/types/types'
import React from 'react'

export const FeatureSliderCard = ({children}: childrenProp) => {
  return (
    <div className='d-flex flex-column' style={{gap: '20px', justifyContent: 'space-around', height: '100%'}}>
      <div className="d-none d-lg-block">
        <h3 className='color-grey-900'>Mobile App</h3>
        <h5 className='color-grey-900'>Herramienta de Gestión de Aistencia Móvil</h5>
      </div>
      {children}
      <div className="box-button-slider-bottom">
          <div className="swiper-button-prev swiper-button-prev-group-4 swiper-button-prev-style-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                <path d="M10.973 15.6938L4.29383 9L10.973 2.30625L8.91675 0.25L0.166748 9L8.91675 17.75L10.973 15.6938Z" fill="white"/>
            </svg>
          </div>
          <div className="swiper-button-next swiper-button-next-group-4 swiper-button-next-style-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
              <path d="M0.0270023 15.6938L6.70617 9L0.0270023 2.30625L2.08325 0.25L10.8333 9L2.08325 17.75L0.0270023 15.6938Z" fill="white"/>
            </svg>
          </div>
        </div>
    </div>
  )
}
