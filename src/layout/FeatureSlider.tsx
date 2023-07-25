'use client'

import React from 'react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import { FeatureSliderCard } from './FeatureSliderCard';
import mobile1 from '../../public/media/mobileApp1.png'
import mobile2 from '../../public/media/mobileApp2.png'
import mobile3 from '../../public/media/mobileApp3.png'

const items = [
  {
    id: 1,
    text: 'Fácil Operación'
  },
  {
    id: 2,
    text: 'Registro de Asistencia en Tiempo Real con detalles de ubicación geográfica'
  },
  {
    id: 3,
    text: 'Envío de fotografía del lugar de trabajo'
  },
  {
    id: 4,
    text: 'Notificaciones y Actualizaciones'
  },
  {
    id: 5,
    text: 'Solicitud online de permisos'
  },
  {
    id: 6,
    text: 'Aprobación/Rechazo de solicitudes por el Administrador o Aprobador'
  },
  {
    id: 7,
    text: 'Modo Reloj de Fichajel'
  },
  {
    id: 8,
    text: 'Visualización de horarios y turnos• Mensajes Públicos y Privados'
  },
  {
    id: 9,
    text: 'Disponible en iOS y Android'
  },
]

SwiperCore.use([Autoplay, Navigation]);
export const FeatureSlider = () => {
  return (
    <section className="section pt-100 pt-50 pb-100" style={{background: '#fff'}} id='app'>
          <div style={{margin: 'auto'}} className='container'>
              <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                      disableOnInteraction: false
                  }}
                  navigation={{
                      prevEl: ".swiper-button-prev-style-3",
                      nextEl: ".swiper-button-next-style-3",
                  }}
                  className="swiper-wrapper"
              >
                      <SwiperSlide className="swiper-slide">
                          <div> 
                            <div className="d-block d-lg-none">
                                  <h3 className='text-card-biocloud color-grey-900'>Mobile App</h3>
                                  <h5 className='text-card-biocloud color-grey-900'>Herramienta de Gestión de Aistencia Móvil</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center d-lg-none">
                                  <Image width={399} height={662} className="d-block info-image-feature mx-auto" src={mobile1} alt="iori" />
                                </div>
                                <div className={`col-lg-6 d-flex`}>
                                        <FeatureSliderCard>
                                          <div className="">
                                            <h4 className='color-grey-900 mb-40'>Movilidad y flexibilidad horaria: <span style={{color: '#28A7E6'}}>clave del éxito</span></h4>
                                            <p className='font-lg mb-40'>Darle al colaborador todas las herramientas para que alcance el máximo rendimiento desde cualquier lugar. El Smart Working ha llegado para quedarse.</p>
                                            <p className='font-lg'>Biocloud te permite decidir desde dónde quieres trabajar, desde tu casa, desde el despacho o desde una cafetería. Biocloud es el sistema perfecto para que te atrevas a implantar en tu empresa sistemas de smart working.</p>
                                          </div>
                                        </FeatureSliderCard>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block">
                                  <Image width={399} height={662} className="d-block info-image-feature mx-auto" src={mobile1} alt="iori" />
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div>
                            <div className="d-block d-lg-none">
                                <h3 className='text-card-biocloud color-grey-900'>Mobile App</h3>
                                <h5 className='text-card-biocloud color-grey-900'>Herramienta de Gestión de Aistencia Móvil</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center d-lg-none">
                                  <Image width={399} height={662} className="d-block info-image-feature mx-auto" src={mobile2} alt="iori" />
                                </div>
                                <div className={`col-lg-6 d-flex terminales-text`}>
                                        <FeatureSliderCard>
                                            <h4 className='color-grey-900 mb-20'>Hecha para la <span style={{color: '#28A7E6'}}>gestión de asistencia</span> en cualquier empresa</h4>
                                            <div className="">
                                              <p className='font-lg mb-40'>La APP Biocloud ofrece una solución conveniente para la gestión de asistencia en cualquier tipo de empresa o industria con empleados siempre en movimiento.</p>
                                              <p className='font-lg'>El personal que asista frecuentemente a entrenamientos, juntas de negocios, ventas puerta a puerta o visitas en sitio, podrá reportar su asistencia en tiempo real desde cualquier lugar mediante la ubicación GPS, Geo-Cerca y cámara de sus smartphones. En combinación con los software web de gestión centralizado BIOCLOUD Pro, la App Mobile le permite operar como Colaborador o como Administrador, ofreciendo funciones adicionales de monitoreo, gestión de solicitudes, visualización del historial de asistencia, entre otras características.</p>
                                            </div>
                                        </FeatureSliderCard>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block">
                                  <Image width={399} height={662} className="d-block info-image-feature mx-auto" src={mobile2} alt="iori" />
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div>
                            <div className="d-block d-lg-none terminales-text">
                              <h3 className='text-card-biocloud color-grey-900'>Mobile App</h3>
                              <h5 className='text-card-biocloud color-grey-900'>Herramienta de Gestión de Aistencia Móvil</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center d-lg-none">
                                  <Image width={399} height={662} className="d-block info-image-feature mx-auto" src={mobile3} alt="iori" />
                                </div>
                                <div className={`col-lg-6 d-flex terminales-text`}>
                                        <FeatureSliderCard>
                                          <div className="">
                                            <h4 className='color-grey-900 mb-10'>Características</h4>
                                            <ul className='d-flex flex-column' style={{gap: '10px'}}>
                                              <li>
                                              {
                                                items.map((item) => <div className="font-md" key={item.id}>
                                                  <svg className="w-6 h-6" style={{color: '#28A7E6', height: '16px', marginRight: '5px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                  </svg>{item.text}
                                                </div>)
                                              }
                                              </li>
                                            </ul>
                                          </div>
                                        </FeatureSliderCard>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block">
                                  <Image width={399} height={662} className="d-block info-image-feature mx-auto" src={mobile3} alt="iori" />
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
              </Swiper>
          </div>
      </section>
      
  )
}
