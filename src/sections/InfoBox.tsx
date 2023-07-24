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
  rowReverse = '',
  section=''
  }: infoBoxTypes) => {
  return (
    <section className="section mt-50 pt-50 pb-40" style={{background: '#fff'}} id={section}>
        <div className={`${containerStyle} d-none d-lg-block`} >
              <div className={`box-cover-border ${customBoxStyle}`}>
                <div className={`row align-items-center ${rowReverse}`}>
                    <div className="col-lg-6 col-xxl-5 mt-xxl-auto">
                      <Image className="d-block d-lg-none info-image" style={imageStyle} src={image} width={width} height={height} alt="iori" />
                      <Image className="d-none d-lg-block" style={imageStyle} src={image} width={width} height={height} alt="iori" />
                    </div>
                    <div className={`col-lg-6 col-xxl-7 d-flex`}>
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
        <div className='container d-lg-none' style={{maxWidth: '540px'}}>
              <div className={`box-cover-border ${customBoxStyle}`}>
                <div className={`row align-items-center ${rowReverse}`}>
                    <div className="col-lg-6 col-xxl-5 mt-xxl-auto">
                      <Image className="d-block d-lg-none info-image" style={imageStyle} src={image} width={width} height={height} alt="iori" />
                      <Image className="d-none d-lg-block" style={imageStyle} src={image} width={width} height={height} alt="iori" />
                    </div>
                    <div className={`col-lg-6 col-xxl-7 d-flex`} style={{padding: '40px 20px'}}>
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
