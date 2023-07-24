'use client'

import React from 'react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import { TerminalesSliderCard } from './TerminalesSliderCard';
import Image from 'next/image';
import terminales1 from '../../public/media/terminales1.png'
import terminales2 from '../../public/media/terminales2.png'
import terminales3 from '../../public/media/terminales3.png'
import terminales4 from '../../public/media/terminales4.png'

SwiperCore.use([Autoplay, Navigation]);
export const TerminalesSlider = () => {
  return (
    <section className="section pt-100 pt-50 " style={{background: '#fff'}} id='biometricos'>
          <div style={{margin: 'auto'}} className='container'>
              <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  //loop={true}
                  // autoplay={{
                  //   delay: 2500,
                  //     disableOnInteraction: false
                  // }}
                  navigation={{
                      prevEl: ".swiper-button-prev-style-4",
                      nextEl: ".swiper-button-next-style-4",
                  }}
                  className="swiper-wrapper"
              >       
                      <SwiperSlide className="swiper-slide">
                        <div>
                            <div className="row">
                                <div className="col-lg-6">
                                  <Image width={638} height={663} className="image-slider" src={terminales1} alt="Biocloud" />
                                </div>
                                <div className={`col-lg-6 d-flex`}>
                                        <TerminalesSliderCard>
                                            <h4 className='color-grey-900'>Toda la información, en tiempo real</h4>
                                            <h6 className='color-grey-900'>Nueva tecnología de reconocimiento facial en movimiento, sin contacto y completamente higiénico</h6>
                                            <p className='font-md'>Mediante la tecnología basada en la nube, obtenga los datos de los empleados en tiempo real con solo conectarse a internet.</p>
                                            <p className='font-md'>También puede funcionar sin conexión, recopilando todos los datos de los empleados y guardándolos de forma segura cuando vuelva a conectarse.</p>
                                            <p className='font-md'>Las terminales que ofrecemos también permiten ser monitoreados y controlados de manera remota, accediendo de manera instantánea a toda la ingormación de personal.</p>
                                        </TerminalesSliderCard>
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div>
                            <div className="row">
                                <div className="col-lg-6">
                                  <Image width={638} height={663} className="image-slider" src={terminales2} alt="Biocloud" />
                                </div>
                                <div className={`col-lg-6 d-flex`}>
                                        <TerminalesSliderCard>
                                            <h4 className='color-grey-900'>Un lugar de trabajo saludable</h4>
                                            <p className='font-md'>Los empleados podrán marcar entrada y salida con solo mirar la cámara de reconocimiento facial. Incluso con tapabocas.</p>
                                        </TerminalesSliderCard>
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div>
                            <div className="row">
                                <div className="col-lg-6">
                                  <Image width={638} height={663} className="image-slider" src={terminales3} alt="Biocloud" />
                                </div>
                                <div className={`col-lg-6 d-flex`}>
                                        <TerminalesSliderCard>
                                            <h4 className='color-grey-900'>Visible Light</h4>
                                            <h6 className='color-grey-900'>Nueva tecnología de reconocimiento facial en movimiento, sin contacto y completamente higiénico</h6>
                                            <p className='font-md'>La nueva línea de productos Visible Light captura y verifica el rostro humano a 3 metros.</p>
                                            <p className='font-md'>Para combatir los posibles ataques de suplantación de identidad mostrando fotos o videos con rostros humanos frente a la cámara, se introdujo una nueva tecnoloía que realiza una exhaustiva verificación de menos de 1 segundo.</p>
                                        </TerminalesSliderCard>
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div>
                            <div className="row">
                                <div className="col-lg-6">
                                  <Image width={638} height={663} className="image-slider" src={terminales4} alt="Biocloud" />
                                </div>
                                <div className={`col-lg-6 d-flex`}>
                                        <TerminalesSliderCard>
                                            <h4 className='color-grey-900'>Máximo nivel de seguridad con tecnología Anti- Falsificaciones</h4>
                                            <div className="">
                                              <p className='font-lg'>Para combatir los posibles ataques de suplantación de identidad mostrando fotos o videos con rostros humanos frente a la cámara, se introdujo una nueva tecnoloía que realiza una exhaustiva verificación de menos de 1 segundo.</p>
                                            </div>
                                        </TerminalesSliderCard>
                                </div>
                            </div>
                          </div>
                      </SwiperSlide>
              </Swiper>
          </div>
      </section>
  )
}
