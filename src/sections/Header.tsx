import { SubscribeComponent } from '@/components/SubscribeComponent'
import Image from 'next/image'
import React from 'react'
import imgHeader from '../../public/media/img-header.png'
import imgHeaderMobile from '../../public/media/img-header-mobile.png'

export const Header = () => {
  return (
    <section className="section" style={{background: '#E0F1F4'}}>
        <div className="container-fluid" style={{padding: '0'}}>
            <div className='banner-1'>
              <div className="">
                <div className="row align-items-center biocloud-header">
                    <div className="col-lg-6" style={{padding: '0'}}>
                        <Image 
                          src={imgHeader} 
                          className='info-image d-none d-sm-block'
                          alt='' 
                          width={1150}
                          height={600}
                        />
                        <Image 
                          src={imgHeaderMobile} 
                          className='info-image d-sm-none'
                          alt='' 
                          width={347}
                          height={341}
                        />
                    </div>
                    <div className="col-lg-6 d-flex flex-column biocloud-header-col">
                        <p 
                          className='font-small-header'  
                        >
                            <span style={{
                              width: '48px',
                              height: '1px',
                              background: '#2C2A2E',
                              display: 'block'
                                        }}></span>
                            Bienvenidos a Biocloud
                          </p>
                        <h1 className="biocloud-text-color mb-20 text-header">Automatiza tu empresa</h1>
                        <SubscribeComponent customStyles='biocloud-header-subscribe' />
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
