import Testimonial from '@/components/Testimonial'
import React from 'react'

const testimonialInfo = [
  {
    id: 1,
    name: 'Guy Hawkins',
    text: 'Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.',
    img: 'author1.png'
  },
  {
    id: 2,
    name: 'Bessie Cooper',
    text: 'Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis',
    img: 'author2.png'
  },
  {
    id: 3,
    name: 'Esther Howard',
    text: 'Vivamus venenatis turpis at elit aliquam, in mattis felis ullamcorper. Donec vel elit at diam suscipit volutpat. Donec rhoncus, magna vitae gravida condimentum, massa mauris fermentum est, vitae euismod leo magna vestibulum nunc',
    img: 'author3.png'
  },
  {
    id: 4,
    name: 'Albert Flores',
    text: 'Vivamus hendrerit molestie mi, a volutpat ipsum volutpat sit amet. Aenean sed metus pulvinar, efficitur lectus sit amet, consectetur nisl. Vivamus hendrerit moles Maecenas lobortis risus Maecenas lobortis risus',
    img: 'author4.png'
  },
]

export const TestimonialSection = () => {
  return (
    <section className="section mt-50">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-lg-8 col-md-8">
                    <h2 className="mb-20">¡Ellos se <span style={{color: '#28A7E6'}}>digitalizaron</span> con nosotros!</h2>
                    <p className="font-lg mb-20" style={{color: '#2C2A2E'}}>¿Estás listo para llevar la gestión de tus recursos humanos al siguiente nivel?</p>
                    <p className="font-lg" style={{color: '#2C2A2E'}}>¡Únete a Biocloud y sé parte de la revolución del futuro del trabajo!</p>
                </div>
                <div className="col-lg-4 col-md-4 text-md-end text-start d-none d-lg-block"><a className="btn btn-default font-sm-bold pl-0">View All
                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg></a></div>
            </div>
            <div className="mt-50">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-3">
                        <Testimonial 
                            data={testimonialInfo}
                        />
                        <div className="swiper-pagination swiper-pagination-2 swiper-pagination-group-3" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
