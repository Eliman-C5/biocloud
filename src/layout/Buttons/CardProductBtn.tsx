import { startBtn } from '@/types/types'
import React from 'react'

export const CardProductBtn = ({customStyles}: startBtn) => {
  return (
    <a
      className={`btn btn-brand-1 hover-up ${customStyles}`} 
      style={{
        width: '40%',
      }}
      href='#'
    >
        Ver más
    </a>
  )
}
