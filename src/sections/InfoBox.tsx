import { SubscribeComponent } from '@/components/SubscribeComponent'
import { infoBoxTypes } from '@/types/types'
import Image from 'next/image'
import React from 'react'

export const InfoBox = ({
  image, 
  customBoxStyle, 
  children, 
  subscribe = true, 
  width,
  height, 
  imageStyle = null, 
  childrenBoxStyle = {gap: '20px'},
  boxInfo = '',
  containerStyle = 'container',
  rowReverse = ''
  }: infoBoxTypes) => {
  return (
    <section className="section mt-50 pt-50 pb-40" style={{background: '#fff'}}>
          <div className={containerStyle} >
              <div className={`box-cover-border ${customBoxStyle}`}>
                <div className={`row align-items-center ${rowReverse}`}>
                    <div className="col-lg-5 mt-xxl-auto">
                      <Image className="info-image" style={imageStyle} src={image} width={width} height={height} alt="iori" />
                    </div>
                    <div className={`col-lg-7 d-flex`}>
                        <div className={`box-info-video flex-column d-flex ${boxInfo}`} style={childrenBoxStyle}>
                            {children}
                            {
                              subscribe && <SubscribeComponent />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}
