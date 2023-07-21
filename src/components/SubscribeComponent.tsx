'use client'

import { StartBtn } from '@/layout/StartBtn';
import React from 'react'

export const SubscribeComponent = ({customStyles}: any) => {

  const onSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className={`subscribe d-flex ${customStyles}`} style={{gap: '15px'}}>
      <input 
        type='text' 
        className='subscribe-mail btn-placeholder'
        placeholder='Correo eléctronico'
      />
      <button className='btn btn-brand-1 hover up'>
      Prueba gratis
      </button>
    </form>
  )
}
