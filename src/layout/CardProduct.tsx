import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { CardProductBtn } from './Buttons/CardProductBtn'

type cardProduct = {
  cardProductImg: StaticImageData,
  title: string
}

export const CardProduct = ({cardProductImg, title}: cardProduct) => {
  return (
    <div className="card col-sm-4 col-lg-3" style={{width: '19rem'}}>
        <div className="card-body d-flex flex-column" style={{gap: '20px'}}>
          <div className="">
            <Image src={cardProductImg} className="card-img-top" alt="" />
            <h6 className="card-title mt-10">{title}</h6>
          </div>
          <CardProductBtn />
        </div>
    </div>
  )
}
