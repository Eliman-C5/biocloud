'use client'

import React from 'react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";

type testimonialType = {
  id: number,
  name: string,
  text: string,
  img: string
}

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = ({data}: any) => {

    return (
        <>
            <Swiper
                slidesPerView={3}
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
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item: testimonialType, i: any) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                        <div className="card-testimonial-grid">
                            <div className="box-author mb-10">
                                <a href="#">
                                  <img src={`media/${item.img}`} alt="iori" />
                                </a>
                                <div className="author-info"><a href="#"><span className="font-md-bold color-gray-900 author-name">{item.name}</span></a><span className="font-xs color-grey-500 department">Bank of America</span></div>
                            </div>
                            <p className="font-md color-grey-500">{item.text}</p>
                            <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                <div className="rating text-end">
                                  <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                  <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                  <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                  <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                  <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Testimonial;