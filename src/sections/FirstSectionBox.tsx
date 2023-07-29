import { InfoBox } from '@/layout/Container/InfoBox'
import imgInfoBox1 from '../../public/media/frame1.png'
import React from 'react'

export const FirstSectionBox = () => {
  return (
    <>
      <InfoBox 
        image={imgInfoBox1}
        width={660}
        height={490}
        section='software'
      >
        <h3 className="biocloud-text-color">
          Digitalice los procesos de su empresa en RRHH sin importar el rubro y la calidad personal
        </h3>
        <p className="font-md" style={{color: '#3D565F'}}>
        <span style={{fontWeight: '700'}}>Biocloud</span> es el software web centralizado para la Gestión de <span style={{fontWeight: '700'}}>Tiempo & Asistencia y Cálculo de novedades de Pre- Nómina.</span>
        </p>
        <p className="font-md" style={{color: '#3D565F'}}>Además permite guardar documentación, generar reportes y exportar estadísticas de tus colaboradores, entre otras herramientas que transforman la experiencia laboral.</p>
        <h4 style={{color: '#2C2A2E'}} className=''>¿Quieres ver Biocloud en acción?</h4>
      </InfoBox>
    </>
  )
}
