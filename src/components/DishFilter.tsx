import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./../styles/DishFilter.css"

export default function DishFilter() {
    return <div>
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >

            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="https://img.jamja.vn/jamja-prod/pizza-610398.jpg?cache=1" className="slide-item-img mb-2" />
                        <p className="m-0 small">Pizza</p>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="https://vcdn1-dulich.vnecdn.net/2020/03/04/7174177733-6c0af1a0b2-b-4778-1583317457.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=W5Ll2-T9398seyb0orXqFA" className="slide-item-img mb-2" />
                        <p className="m-0 small">Phở</p>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="https://cdn.tgdd.vn/Files/2017/04/12/971481/cach-lam-bun-cha-ha-noi-truyen-thong-202112211431417496.jpg" className="slide-item-img mb-2" />
                        <p className="m-0 small">Bún chả</p>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="http://cdn.tgdd.vn/Files/2020/05/20/1256908/troi-mua-thu-lam-banh-xeo-kieu-mien-bac-gion-ngon-it-dau-mo-202005201034115966.jpg" className="slide-item-img mb-2" />
                        <p className="m-0 small">Bánh xèo</p>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="https://media.foody.vn/res/g5/42120/prof/s/foody-upload-api-foody-mobile-banhmi-200715112206.jpg" className="slide-item-img mb-2" />
                        <p className="m-0 small">Bánh mỳ</p>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="https://nld.mediacdn.vn/2020/9/19/intro-1594766282-1600504778592231123885.jpg" className="slide-item-img mb-2" />
                        <p className="m-0 small">Cà phê</p>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="https://caogam.vn/sites/default/files/anh_bai_viet/tac-dung-nuoc-ep-trai-cay.jpg" className="slide-item-img mb-2" />
                        <p className="m-0 small">Nước ép</p>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-item">
                    <a className="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                        <img style={{ width: 99, height: 77 }} src="http://cdn.tgdd.vn/Files/2021/08/10/1374160/hoc-cach-pha-tra-sua-o-long-dai-loan-thom-ngon-chuan-vi-ai-cung-me-202108100039248020.jpg" className="slide-item-img mb-2" />
                        <p className="m-0 small">Trà sữa</p>
                    </a>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
}