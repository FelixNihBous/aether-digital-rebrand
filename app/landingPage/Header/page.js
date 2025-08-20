import Image from 'next/image'
import React from 'react'
import '../css/Header.css'
import Link from 'next/link'

export default function Header() {
  const navBar = [
    {
      name: "Service",
      direct: "/our-service"
    },
    {
      name: "Portofolio",
      direct: "/portfolio"
    },
    {
      name: "About",
      direct: "/about"
    },
    {
      name: "Contact",
      direct: "/contact"
    }
  ]

  return (
    <div className='header-LandingPage'>
      <div className="brandText-Logo">
        <Image src="/Gambar_WhatsApp_2025-08-15_pukul_08.17.55_86843d8c-removebg-preview.png" alt="Aether Digital Logo" width={60} height={60} />
        <p className="brand-text" style={{color: '#64badf'}}>Aether Digital</p>
      </div>
      <div className="navBar">
        {navBar.map((item, index) => (
          <Link key={index} href={item.direct} className="nav-link" style={{color: '#AABBCC'}}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
