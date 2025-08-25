"use client"

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../swiper/style.css';

import '../css/Project.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Image } from 'antd';


const projectsData = [
    {
        title: "Individual Portofolio",
        description: "A complete design of a Portofolio Website",
        imageUrl: "https://i.ibb.co.com/jPFRFYrK/image.png",
        projectUrl: "https://github.com/FelixNihBous/Portofolio"
    },
    {
        title: "Recipe Book Library Website",
        description: "A Website that shows us a lot of food recipe from all of the world",
        imageUrl: "https://iili.io/FyDkSVa.md.png",
        projectUrl: "https://github.com/FelixNihBous/recipe-book"
    },
    {
        title: "Dessert Shop Website",
        description: "A prototype for a food order app, including user flows, UI/UX design, and a functional front-end (Chekout and Add to cart).",
        imageUrl: "https://iili.io/FyDt8zJ.md.png",
        projectUrl: "https://github.com/FelixNihBous/dessertshop-assignment"
    },
    {
        title: "Data Visualization Dashboard",
        description: "An interactive dashboard built with D3.js to visualize complex data sets in a clear and engaging way.",
        imageUrl: "https://placehold.co/400x200/38f38c/ffffff?text=Project+4",
        projectUrl: "#"
    },
    {
        title: "SaaS Marketing Page",
        description: "A high-converting landing page for a new software-as-a-service product, designed to capture leads and showcase key features.",
        imageUrl: "https://placehold.co/400x200/f33838/ffffff?text=Project+5",
        projectUrl: "#"
    },
    {
        title: "Blog Platform",
        description: "A custom blog platform with a powerful content management system and a responsive, minimalist design.",
        imageUrl: "https://placehold.co/400x200/38c2f3/ffffff?text=Project+6",
        projectUrl: "#"
    },
];

export default function SwiperProjects() {
    const swiperRef = useRef(null);

    return (
        <div className='ourProjectContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', overflow: 'hidden' }}>
            <h1 className="ourProjectTitle">Our Projects</h1>
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
                        spaceBetween: 10,
                    },
                }}
            >
                {projectsData.map((project, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#101828', borderRadius: '20px', padding: '20px', gap: '10px' }}>
                        <Image src={project.imageUrl} alt={project.title} style={{ borderRadius: '20px' }} />
                        <h2 className="">{project.title}</h2>
                        <p className="" style={{ fontSize: '12px' }}>{project.description}</p>
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