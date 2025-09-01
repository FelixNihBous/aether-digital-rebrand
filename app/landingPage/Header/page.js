"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import '../css/Header.css'
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBar = [
    {
      name: "Home",
      direct: "home"
    },
    {
      name: "Service",
      direct: "service"
    },
    {
      name: "Projects",
      direct: "projects"
    },
    {
      name: "About",
      direct: "chooseus"
    },
    {
      name: "Reviews",
      direct: "testimoni"
    },
    {
      name: "Price List",
      direct: "pricelist"
    },
  ]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='header-LandingPage'>
        <div className="brandText-Logo">
          <Image src="/Gambar_WhatsApp_2025-08-15_pukul_08.17.55_86843d8c-removebg-preview.png" alt="Aether Digital Logo" width={60} height={60} />
          <p className="brand-text" style={{ color: '#64badf' }}>Aether Digital</p>
        </div>

        <div className="navBar desktop-nav">
          {navBar.map((item, index) => (
            <a
              key={index}
              className="nav-link"
              style={{ color: '#AABBCC', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => scrollToSection(item.direct)}
              href={`/#${item.direct}`}
          >
          {item.name}
        </a>
        ))}
      </div>

      <div className="mobile-nav">
        <button
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button
            icon={<CloseOutlined />}
            style={{ backgroundColor: '#1a1a2e', borderColor: '#1a1a2e', color: 'white', padding: 0, margin: 0 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></Button>
          <br></br>
          {navBar.map((item, index) => (
            <button
              key={index}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.direct)}
              style={{ paddingLeft: '10px' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div >
    </>
  )
}
