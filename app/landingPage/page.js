"use client"

import React from 'react'
import Header from './Header/page'
import Body from './Body/page'
import OurService from '../our-service/page'
import ChooseUs from '../choose-us/page'


export default function landingPage() {
  return (
    <>
      <Header />
      <Body />

      <section id="service" style={{ background: '#1a1a2e' }}>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <OurService />
        </div>
      </section>

      <section id="chooseus" style={{ background: '#1a1a2e' }}>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <ChooseUs />
        </div>
      </section>
    </>
  )
}
