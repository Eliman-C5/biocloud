import React from 'react'
import imgLanding from '../../public/media/landing.png'
import Image from 'next/image'

export const TextWithImage = () => {
  return (
    <section className="section mt-50 mb-30">
        <div className="container">
            <div className="text-center mb-70">
                <h2 className="mb-20" style={{color: '#071920'}}>
                ¡Software para la Fuerza Laboral Moderna de hoy!
                </h2>
                <p 
                  style={{color: '#3D565F', fontSize: '20px', lineHeight: '28px'}}
                >
                  Soluciones probadas de tiempo, asistencia y acceso basado en la web
                </p>
            </div>
            <div className="row mt-50 mb-100 d-flex justify-content-center">
                <div className="col-xl-8 col-lg-7">
                    <Image className='info-image' src={imgLanding} width={932} height={440} alt='' />
                </div>
            </div>  
        </div>
    </section>
  )
}
