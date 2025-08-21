"use client"

import { Image } from 'antd';
import React, { useState } from 'react';
function TestimonialCard({ name, title, quote, avatar }) {
    return ( 
        <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 flex flex-col items-center text-center">
                <Image
                    src={avatar}
                    alt={`${name}'s avatar`}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#3873f3]"
                />
                <p className="text-gray-300 italic mb-4">&quot;{quote}&quot;</p>
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-gray-400 text-sm">{title}</p>
            </div>
        </div>
    );
}

// Sample data for the testimonials. You can replace this with your own client data.
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

export default function TestimonialSlider() {
    // State to track the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Calculate the total number of slides
    const totalSlides = testimonialsData.length;

    // Handle moving to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    // Handle moving to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <section id="testimonials-section" className="py-16 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Client Testimonials</h2>
                
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100 / 3}%)` }} // 100 / number of slides
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                title={testimonial.title}
                                quote={testimonial.quote}
                                avatar={testimonial.avatar}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-gray-800 text-[#3873f3] hover:bg-gray-700 transition"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-gray-800 text-[#3873f3] hover:bg-gray-700 transition"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
