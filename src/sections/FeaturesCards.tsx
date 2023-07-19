'use client'

import Offer from '@/layout/Offer'
import React from 'react'

export const FeaturesCards = () => {
  return (
    <section className="section mt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="mb-20 color-grey-900">4 formas muy simples de Marcar el tiempo</h2>
                </div>
            </div>
            <div className="mt-50">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-4">
                        <Offer />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
