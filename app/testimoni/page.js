"use client"

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../swiper/style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Image } from 'antd';

export default function Testimoni() {
    const testimonialsData = [
        {
            name: "Jane Doe",
            title: "CEO, InnovateTech",
            quote: "AetherDigital brought our vision to life with incredible speed and attention to detail. The new website has completely transformed our online presence!",
            avatar: "https://placehold.co/100x100/3873f3/ffffff?text=JD"
        },
        {
            name: "John Smith",
            title: "Founder, GreenLeaf Co.",
            quote: "The SEO and design work from AetherDigital has been a game-changer for our business. Our organic traffic has doubled, and the new design has received incredible feedback from our customers.",
            avatar: "https://placehold.co/100x100/3873f3/ffffff?text=JS"
        },
        {
            name: "Emily Chen",
            title: "Creative Director, Studio X",
            quote: "We needed a partner who could translate our creative vision into a functional web application, and AetherDigital did just that. Their technical expertise is unmatched.",
            avatar: "https://placehold.co/100x100/3873f3/ffffff?text=EC"
        },
        {
            name: "David Lee",
            title: "Marketing Manager, Global Corp",
            quote: "Our marketing campaigns are much more effective now, thanks to the stunning landing pages built by AetherDigital. They are a reliable and innovative team.",
            avatar: "https://placehold.co/100x100/3873f3/ffffff?text=DL"
        },
        {
            name: "Sarah Miller",
            title: "Entrepreneur",
            quote: "I've worked with several developers, but none have matched the quality and efficiency of AetherDigital. Highly recommended for anyone looking to build a professional web presence.",
            avatar: "https://placehold.co/100x100/3873f3/ffffff?text=SM"
        },
        {
            name: "Michael Brown",
            title: "Product Lead, Alpha Corp",
            quote: "The team at AetherDigital is professional and highly skilled. They delivered a product that exceeded our expectations on time and on budget.",
            avatar: "https://placehold.co/100x100/3873f3/ffffff?text=MB"
        },
    ];
    const swiperRef = useRef(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', overflow: 'hidden' }}>
            <h1 className="font=bold" style={{ fontSize: '50px' }}>Our Projects</h1>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={30}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                // Add this breakpoints prop to make it responsive
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
            >
                {testimonialsData.map((testiomomoal, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#101828', borderRadius: '20px', padding: '20px', gap: '10px' }}>
                        <Image src={testiomomoal.avatar} alt={testiomomoal.title} style={{ borderRadius: '20px' }} />
                        <h2 className="" style={{color: 'white', fontSize: '14px' }}><strong>{testiomomoal.name}</strong></h2>
                        <p className="" style={{color: 'white', fontSize: '12px'}}><strong>{testiomomoal.title}</strong></p>
                        <p className="" style={{color: 'white', fontSize: '12px'}}>{testiomomoal.quote}</p>
                    </SwiperSlide>
                ))}

                <div className="swiper-pagination"></div>
                <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 10 }}>
                    <div className="swiper-button-prev" style={{ position: 'static', cursor: 'pointer' }} onClick={() => swiperRef.current.slidePrev()}></div>
                    <div className="swiper-button-next" style={{ position: 'static', cursor: 'pointer' }} onClick={() => swiperRef.current.slideNext()}></div>
                </div>
            </Swiper>
            <div className="" style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <button style={{
                    marginTop: '40px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    backgroundColor: '#101828',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    width: '100px',
                    transition: 'background-color 0.3s ease',
                }} onClick={() => swiperRef.current.slidePrev()}>
                    <LeftOutlined />
                </button>
                <button style={{
                    marginTop: '40px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    backgroundColor: '#101828',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    width: '100px',
                    transition: 'background-color 0.3s ease',
                }} onClick={() => swiperRef.current.slideNext()}>
                    <RightOutlined />
                </button>
            </div>
        </div>
    );
}

