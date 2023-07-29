import { startBtn } from '@/types/types'
import React from 'react'

export const StartBtn = ({customStyles, text = 'Comenzar'}: startBtn) => {
  return (
    <button 
      className={`btn btn-brand-1 hover-up ${customStyles}`} 
      style={{
      }}
    >
        {text}
    </button>
  )
}
