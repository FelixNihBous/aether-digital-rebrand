import Image from 'next/image'
import React, { useState } from 'react'
import '../css/Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navBar = [
    {
      name: "Service",
      direct: "service"
    },
    {
      name: "Portfolio",
      direct: "portfolio"
    },
    {
      name: "About",
      direct: "about"
    },
    {
      name: "Contact",
      direct: "contact"
    }
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
    <div className='header-LandingPage'>
      <div className="brandText-Logo">
        <Image src="/Gambar_WhatsApp_2025-08-15_pukul_08.17.55_86843d8c-removebg-preview.png" alt="Aether Digital Logo" width={60} height={60} />
        <p className="brand-text" style={{color: '#64badf'}}>Aether Digital</p>
      </div>
      
      {/* Desktop Navigation */}
      <div className="navBar desktop-nav">
        {navBar.map((item, index) => (
          <button
            key={index}
            className="nav-link"
            style={{color: '#AABBCC', background: 'none', border: 'none', cursor: 'pointer'}}
            onClick={() => scrollToSection(item.direct)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Burger Menu */}
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
        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navBar.map((item, index) => (
            <button
              key={index}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.direct)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
