import { biocloudBannerType } from '@/types/types'
import React from 'react'

export const BiocloudBanner = ({title, children, col = 'col-lg-7'}: biocloudBannerType) => {
  return (
    <section className="section mt-50 mb-50">
        <div className="container-fluid position-relative" style={{background: '#E0F1F4', padding: '0', overflow: 'hidden'}}>
            <div className="box-newsletter d-flex flex-column m-auto" style={{maxWidth: '1450px'}}>
                <div className="row align-items-center justify-content-center">
                    <div className={`${col} col-md-12`} style={{zIndex: '10'}}>
                        <h2 className="mb-15 mt-5" style={{color: '#071920', textAlign: 'center'}}>{title}</h2>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
