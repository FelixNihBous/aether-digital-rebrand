"use client"

import { Button } from 'antd'
import React from 'react'

export default function Body() {
  return (
    <div 
      className='bodyContainer flex justify-center items-center relative' 
      style={{ 
        height: '90vh',
        backgroundImage: 'url(/high-rise-buildings-daytime.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
        }}
      ></div>
      
      <div className="bodyText text-center flex flex-col gap-5 justify-center items-center px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
          Crafting Digital <br className="hidden sm:block" /> Experiences That <span className="text-blue-500">Inspire</span>.
        </h2>
        <p className="font-bold py-4 px-4 text-[#64badf] max-w-2xl">
          We build stunning, responsive web sites and web applications tailored to your business needs.
        </p>
        <Button 
          className="items-center justify-center px-8 py-4 font-sans font-semibold"
          style={{
            fontSize: '15px', 
            width: '200px', 
            height: '50px', 
            borderRadius: '20px', 
            background: '#3873f3', 
            border: 'none', 
            color: 'white',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(56, 115, 243, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          onClick={() => document.getElementById('service').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Services
        </Button>
      </div>
    </div>
  )
}