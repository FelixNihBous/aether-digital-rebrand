"use client"

import React from 'react'
import Header from './Header/page'
import Body from './Body/page'
import ChooseUs from '../choose-us/page'
import OurService from '../our-service/page'

export default function landingPage() {
  return (
    <>
      <Header />
      
      <section id="home">
        <Body />
      </section>
      
      <section id="service" className= 'ourSercice-Sect' style={{ padding: '80px 0'}}>
        <OurService />
      </section>

      <section id="chooseus" style={{ padding: '80px 0'}}>
        <ChooseUs />
      </section>
    </>
  )
}
