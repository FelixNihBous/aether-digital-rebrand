"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../swiper/style.css';

import '../css/Project.css'


import { Pagination, Navigation } from 'swiper/modules';
import { Image } from 'antd';


const projectsData = [
    {
        title: "Individual Portfolio",
        description: "A complete design of a Portfolio Website",
        imageUrl: "https://i.ibb.co.com/jPFRFYrK/image.png",
        projectUrl: "https://github.com/FelixNihBous/Portofolio",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Recipe Book Library Website",
        description: "A Website that shows us a lot of food recipe from all of the world",
        imageUrl: "https://iili.io/FyDkSVa.md.png",
        projectUrl: "https://github.com/FelixNihBous/recipe-book",
        tech: ["React", "CSS", "API Integration"]
    },
    {
        title: "Dessert Shop Website",
        description: "A prototype for a food order app, including user flows, UI/UX design, and a functional front-end (Checkout and Add to cart).",
        imageUrl: "https://iili.io/FyDt8zJ.md.png",
        projectUrl: "https://github.com/FelixNihBous/dessertshop-assignment",
        tech: ["React", "JavaScript", "CSS"]
    },
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard built with Next.js.",
        imageUrl: "https://placehold.co/400x200/38f38c/ffffff?text=Next.js+E-Commerce",
        projectUrl: "#",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"]
    },
    {
        title: "Real Estate Listing App",
        description: "A modern real estate platform with advanced search, map integration, and property management features using Next.js and MongoDB.",
        imageUrl: "https://placehold.co/400x200/f39c12/ffffff?text=Real+Estate+App",
        projectUrl: "#",
        tech: ["Next.js", "MongoDB", "Tailwind CSS", "Mapbox API"]
    },
    {
        title: "Social Media Dashboard",
        description: "A comprehensive social media management tool with analytics, scheduling, and multi-platform integration built with Next.js.",
        imageUrl: "https://placehold.co/400x200/9b59b6/ffffff?text=Social+Dashboard",
        projectUrl: "#",
        tech: ["Next.js", "Redis", "Chart.js", "Social APIs"]
    },
    {
        title: "Task Management System",
        description: "A collaborative project management tool with real-time updates, team collaboration, and advanced filtering capabilities.",
        imageUrl: "https://placehold.co/400x200/e74c3c/ffffff?text=Task+Manager",
        projectUrl: "#",
        tech: ["React", "Node.js", "Socket.io", "MySQL"]
    },
    {
        title: "Weather Forecast App",
        description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using Next.js.",
        imageUrl: "https://placehold.co/400x200/3498db/ffffff?text=Weather+App",
        projectUrl: "#",
        tech: ["Next.js", "TypeScript", "Weather API", "Geolocation"]
    },
    {
        title: "Learning Management System",
        description: "An educational platform with course creation, student progress tracking, and interactive learning modules built with Next.js.",
        imageUrl: "https://placehold.co/400x200/27ae60/ffffff?text=LMS+Platform",
        projectUrl: "#",
        tech: ["Next.js", "Firebase", "Tailwind CSS", "Video.js"]
    },
    {
        title: "Cryptocurrency Tracker",
        description: "A real-time crypto portfolio tracker with price alerts, news integration, and advanced charting features.",
        imageUrl: "https://placehold.co/400x200/f1c40f/ffffff?text=Crypto+Tracker",
        projectUrl: "#",
        tech: ["React", "Redux", "CoinGecko API", "Chart.js"]
    },
    {
        title: "AI Chat Application",
        description: "An intelligent chat application with AI integration, real-time messaging, and smart conversation features using Next.js.",
        imageUrl: "https://placehold.co/400x200/8e44ad/ffffff?text=AI+Chat+App",
        projectUrl: "#",
        tech: ["Next.js", "OpenAI API", "Socket.io", "Tailwind CSS"]
    },
    {
        title: "Fitness Tracking App",
        description: "A comprehensive fitness application with workout plans, progress tracking, and nutrition monitoring built with React Native.",
        imageUrl: "https://placehold.co/400x200/e67e22/ffffff?text=Fitness+Tracker",
        projectUrl: "#",
        tech: ["React Native", "Firebase", "Redux", "Health APIs"]
    }
];

export default function SwiperProjects() {
    const swiperRef = useRef(null);

    return (
        <div className='ourProjectContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', overflow: 'hidden' }}>
            <h1 className="ourProjectTitle">Our Projects</h1>
            <div className="border-b-2 border-blue-900 w-24 mx-auto mb-8" />
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
                        <p className="" style={{ fontSize: '12px', marginBottom: '10px' }}>{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                            {project.tech.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    style={{ 
                                        backgroundColor: '#374151', 
                                        color: '#ffffff', 
                                        padding: '4px 8px', 
                                        borderRadius: '12px', 
                                        fontSize: '10px',
                                        fontWeight: '500'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
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