import { Form } from '@/layout/Form'
import { MapBiocloud } from '@/layout/MapBiocloud'
import React from 'react'

// Comentario
export const ContactSection = () => {
  return (
    <section id='contact' className='section margin-mobile'>
      <div className="container">
        <div className="row contact-row">
          <div className="col-lg-6">
            <Form />
          </div>
          <div className="col-lg-6">
            <MapBiocloud />
          </div>
        </div>
      </div>
    </section>
  )
}
