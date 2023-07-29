import Image from 'next/image'
import React from 'react'
import logo from '../../public/media/logo.png'
import { StartBtn } from './Buttons/StartBtn'

export const Footer = () => {
  return (
    <div className="container-fluid" style={{padding: '0', background: '#E0F1F4'}}>
        <div className='container justify-content-between pb-50 pt-50 px-5 mx-auto mt-50 mb-50 d-flex flex-column flex-sm-row'>
          <Image src={logo} alt='logo' width={165} height={52} className='mb-10 mb-sm-0' />
          <StartBtn text='Prueba gratuita' customStyles='d-none d-sm-flex' />
        </div>
    </div> 
  )
}
