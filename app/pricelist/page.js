import React from 'react';
import '../mobile-fix.css'
import '../css/PriceList.css'

export default function PriceList() {
    return(
        <>
        <section className="pricelist py-16 relative z-10 flex justify-center items-center pt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-center mb-5 text-white">Price List</h2>
                <div className="border-b-2 border-blue-900 w-24 mx-auto mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                        <div className="text-[#3873f3] mb-4 transition duration-300 hover:scale-110">
                            <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L12 21m0 0l2.25-4M12 21v-3.75m0-3.75H12m0 0v-7.5m0-3.75h-3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 005.25 18h13.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0018.75 3H9.75z"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#64badf] text-center">Basic Package</h3>
                        <p className="text-gray-400 text-center text-sm mb-4">Perfect for small businesses and startups looking to establish an online presence.</p>
                        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                            <li>• Up to 3-5 pages</li>
                            <li>• Responsive design</li>
                            <li>• Basic SEO</li>
                            <li>• 2 revision</li>   
                            <li>• Delivery in 2 or 4 weeks</li>
                        </ul>
                        <div className="text-center mt-27">
                            <span className="text-3xl font-bold text-white">$500</span>
                        </div>
                        <button className="w-full mt-4 bg-[#3873f3] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                            Get Started
                        </button>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl border-2 border-[#3873f3] hover:border-[#2563eb] transition-all duration-300 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3873f3] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                        </div>
                        <div className="text-[#3873f3] mb-4 transition duration-300 hover:scale-110">
                            <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white text-center">Standard Package</h3>
                        <p className="text-gray-400 text-center text-sm mb-4">Ideal for growing businesses that need more features and customization.</p>
                        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                            <li>• Up to 7-10 pages</li>
                            <li>• Responsive design</li>
                            <li>• Advanced SEO</li>
                            <li>• 4 revisions</li>
                            <li>• Blog integration</li>
                            <li>• Contact forms</li>
                            <li>• Delivery in 4 weeks</li>
                        </ul>
                        <div className="text-center mt-13">  
                            <span className="text-3xl font-bold text-white">$1,200</span>
                        </div>
                        <button className="w-full mt-4 bg-[#3873f3] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                            Get Started
                        </button>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                        <div className="text-[#3873f3] mb-4 transition duration-300 hover:scale-110">
                            <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white text-center">Premium Package</h3>
                        <p className="text-gray-400 text-center text-sm mb-4">Complete solution for enterprises requiring advanced functionality and support.</p>
                        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                            <li>• Unlimited pages</li>
                            <li>• Custom design</li>
                            <li>• Advanced SEO + Analytics</li>
                            <li>• Unlimited revisions</li>
                            <li>• E-commerce integration</li>
                            <li>• CMS integration</li>
                            <li>• 6 months support</li>
                            <li>• Delivery in 6 weeks</li>
                        </ul>
                        <div className="text-center mt-6">
                            <span className="text-3xl font-bold text-white">$3,500</span>
                        </div>
                        <button className="w-full mt-4 bg-[#3873f3] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}