import React from 'react'
import Image from 'next/image'

export default function ChooseUs() {
  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <section className="py-16 bg-[#1a1a2e] relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-white">Why Choose AetherDigital?</h2>
                <p className="text-gray-400 mb-6 max-w-md">
                    We&apos;re not just developers; we&apos;re partners in your digital journey. We combine creative design with technical excellence to deliver exceptional results.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#3873f3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-gray-300">Customized Solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#3873f3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-gray-300">Expert Team</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#3873f3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-gray-300">Client-Centric Approach</span>
                    </li>
                </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
                <Image src="/WeblogoNew.png" alt="Why Choose Us" className="rounded-xl shadow-lg w-full max-w-md md:max-w-none" width={300} height={300} />
            </div>
        </div>
    </section>
    </div>
  )
}
