import { CardRow } from '@/layout/CardRow'
import React from 'react'
import icon5 from '../../public/media/icon-5.svg'
import icon6 from '../../public/media/icon-6.svg'
import icon7 from '../../public/media/icon-7.svg'
import icon8 from '../../public/media/icon-8.svg'
import icon9 from '../../public/media/icon-9.svg'
import icon10 from '../../public/media/icon-10.svg'
import icon11 from '../../public/media/icon-11.svg'
import icon12 from '../../public/media/icon-12.svg'
import icon13 from '../../public/media/icon-13.svg'
import icon14 from '../../public/media/icon-14.svg'
import icon15 from '../../public/media/icon-15.svg'
import icon16 from '../../public/media/icon-16.svg'
import { Card } from '@/layout/Card'

const cardsInfo = [
  {
    id: 5,
    img: icon5,
    text: 'Acceso desde cualquier dispositivo'
  },
  {
    id: 6,
    img: icon6,
    text: 'Programación de turnos flexibles'
  },
  {
    id: 7,
    img: icon7,
    text: 'Control de acceso simple y eficaz'
  },
  {
    id: 8,
    img: icon8,
    text: 'Incidencias y Justificaciones'
  },
  {
    id: 9,
    img: icon9,
    text: 'Transmisión de datos en vivo'
  },
  {
    id: 10,
    img: icon10,
    text: 'Administradores múltiples '
  },
  {
    id: 11,
    img: icon11,
    text: 'Notificaciones automáticas vía email '
  },
  {
    id: 12,
    img: icon12,
    text: 'Cálculo y Reportes de Asistencia'
  },
  {
    id: 13,
    img: icon13,
    text: 'Reglas para contabilizar las horas extras y Presentismo'
  },
  {
    id: 14,
    img: icon14,
    text: 'APP mobile colaboradores en movimiento '
  },
  {
    id: 15,
    img: icon15,
    text: 'Planificación calendarios permisos, licencias, ausencias, feriados, etc.'
  },
  {
    id: 16,
    img: icon16,
    text: 'Time tracking libertad para fichar desde cualquier lugar y dispositivo.'
  },
  
]

export const MultipleRowsSection = () => {
  return (
    <section className='section mt-50 mb-100'>
      <div className="container">
        <h2 style={{color: '#071920', textAlign: 'center'}} className='mb-50'>¿Por qué elegirnos?</h2>
        <p style={{color: '#3D565F', maxWidth: '942px', margin: 'auto', textAlign: 'center'}} className='font-xl'>
        Biocloud dispone de funciones y herramientas avanzadas de Tiempo Asistencia y Acceso para todo tipo empresa, con la finalidad de aumentar la eficiencia, mejorar el absentismo y el rendimiento de los colaboradores.
        </p>
        <div className="mt-40 mb-40">
          <CardRow>
            {
              cardsInfo.map(item => item.id < 9 && <Card key={item.id} img={item.img} text={item.text} />)
            } 
          </CardRow>
          <CardRow>
            {
              cardsInfo.map(item => (item.id > 8 && item.id < 13) && <Card key={item.id} img={item.img} text={item.text} />)
            }
          </CardRow>
          <CardRow>
            {
              cardsInfo.map(item => item.id > 12 && <Card key={item.id} img={item.img} text={item.text} />)
            }
          </CardRow>
        </div>
        <p style={{color: '#2C2A2E', maxWidth: '942px', margin: 'auto', textAlign: 'center'}} className='font-xl'>Biocloud consolida la información de Sucursales, Terminales Biométricas, Dispositivos Móviles y Funcionarios, accesible las 24 horas los 7 días de la semana, desde cualquier lugar y dispositivo a través de cualquier navegador de internet.</p>
      </div>
    </section>
  )
}
