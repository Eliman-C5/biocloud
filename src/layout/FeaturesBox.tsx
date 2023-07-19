import { infoBoxTypes } from '@/types/types'
import Image from 'next/image'
import React from 'react'

export const FeaturesBox = ({children, image, width, height, imageStyle}: infoBoxTypes) => {
  return (
    <section className="section mt-100 pt-50 pb-100" style={{background: '#fff'}}>
          <div className='container' >
              <div>
                <div className="row">
                    <div className={`col-lg-6 d-flex`}>
                        <div className="flex-column d-flex" style={{gap: '20px'}}>
                            {children}
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <Image className="info-image d-none d-lg-block" style={imageStyle} src={image} width={width} height={height} alt="iori" />
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}
