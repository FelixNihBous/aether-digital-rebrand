"use client"

import React from 'react'
import Header from './Header/page'
import Body from './Body/page'
import ChooseUs from '../choose-us/page'
import PriceList from '../pricelist/page'
import OurService from '../our-service/page'
import Testimoni from '../testimoni/page'
import Projects from '../projects/page'
import Footer from '../footer/page'

export default function landingPage() {
  return (
    <>
      <Header />

      <section id="home">
        <Body />
      </section>

      <section id="service" className='ourSercice-Sect' style={{ padding: '80px' }}>
        <OurService />
      </section>

      <section id="projects" style={{ padding: '80px' }}>
        <Projects />
      </section>

      <section id="chooseus" style={{ padding: '80px' }}>
        <ChooseUs />
      </section>

      <section id="pricelist" style={{ padding: '80px' }}>
        <PriceList />
      </section>

      <section id="testimoni" style={{ padding: '80px' }}>
        <Testimoni />
      </section>
      <Footer />
    </>
  )
}
