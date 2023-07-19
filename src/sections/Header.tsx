import { SubscribeComponent } from '@/components/SubscribeComponent'
import Image from 'next/image'
import React from 'react'
import imgHeader from '../../public/media/img-header.png'

export const Header = () => {
  return (
    <section className="section" style={{background: '#E0F1F4'}}>
        <div className="container-fluid" style={{padding: '0'}}>
            <div className='banner-1'>
              <div className="">
                <div className="row align-items-center biocloud-header">
                    <div className="col-lg-6 d-none d-lg-block" style={{paddingLeft: '0'}}>
                        <Image 
                          src={imgHeader} 
                          className=''
                          alt='' 
                          width={1150}
                          height={600}
                        />
                    </div>
                    <div className="col-lg-6 d-flex flex-column">
                        <p 
                          style={{
                            color: '#2C2A2E',
                            //fontFamily: 'Poppins',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '52px',
                            textTransform: 'uppercase',
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center'
                          }}>
                            <span style={{
                              width: '48px',
                              height: '1px',
                              background: '#2C2A2E',
                              display: 'block'
                                        }}></span>
                            Bienvenidos a Biocloud
                          </p>
                        <h1 className="biocloud-text-color mb-20 text-header">Automatiza tu empresa</h1>
                        <SubscribeComponent customStyles='w-75' />
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
