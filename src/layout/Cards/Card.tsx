import Image from 'next/image'
import React from 'react'

type cardType = {
  img: string,
  text: string,
  paragraph?: string | boolean,
  cardStyle?: string
}

export const Card = ({text, img, paragraph = false, cardStyle = "col-lg-3 col-md-4 col-sm-6 col-11"}: cardType) => {
  return (
    <div className={cardStyle}>
        <div className="card-small">
            <div className="card-image d-flex">
                <div className="box-image">
                  <Image src={img} alt={text} width={32} height={32} />
                </div>
            </div>
            <div className="card-info">
                <p style={{color: '#2C2A2E'}} className='font-md-bold text-card-biocloud'>{text}</p>
                {
                  paragraph && <p className='font-md text-card-biocloud'>{paragraph}</p>
                }
            </div>
        </div>
    </div>
  )
}
