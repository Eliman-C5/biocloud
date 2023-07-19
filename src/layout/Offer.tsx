'use client'

import React from 'react';
import SwiperCore from "swiper"
// import Autoplay from 'swiper'
// import Navigation from 'swiper'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';

SwiperCore.use([Autoplay, Navigation]);
const Offer = () => {

    const data = [
        {
            title: "Mobile APP",
            text: 'Colaboradores y administradores usan Biocloud APP cada día para registrar su jornada, pedir vacaciones o comunicarse con su empresa.',
            img: "Group1.png",
        },
        {
            title: "Tablet fichaje",
            text: 'Una gran alternativa a los sistemas de marcación tradicionales, más económica y lista para utilizar en minutos.',
            img: "Group2.png",
        },
        {
            title: "Terminales Multi Biométricas",
            text: 'Terminales con Bioseguridad sincroniza la información de extremo a extremo sin intervención de usuarios, evita la suplantación y la pérdida de datos, evitando el absentismo.',
            img: "Group3.png",
        },
        {
            title: "Portal Web",
            text: 'Registra las entradas y salidas, obtén informes en tiempo real, edita marcaciones y gestiona tus equipos. Todo a través de una plataforma cloud',
            img: "Group4.png",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className={`swiper-slide`} key={i}>
                        <div className="card-offer-style-3">
                            <div className="card-head">
                                <div className="card-image">
                                  <img src={`media/${item.img}`} alt="iori" />
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="carrd-title">
                                    <h4 style={{color: '#122830'}}>{item.title}</h4>
                                </div>
                                <p className="font-sm color-grey-500 mb-15">
                                {item.text}
                                </p>
                                <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 hover-up" style={{color: '#071920'}}>Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>

        </>
    );
};

export default Offer;
