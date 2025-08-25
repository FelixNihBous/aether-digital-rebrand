import React from 'react'

export default function footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="mailto:busniess@aetherdigital.site" className="hover:text-[#3873f3] transition duration-200">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>business@aetherdigital.site</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/6287809276292" className="hover:text-[#3873f3] transition duration-200">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.995.696l.738 2.062a1 1 0 01-.423 1.144l-1.55 1.15a11.95 11.95 0 006.13 6.13l1.15-1.55a1 1 0 011.144-.423l2.062.738A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1a18.06 18.06 0 01-14-14V5z" />
                                    </svg>
                                    <span>+(62) 878-0927-6292</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Ruko Crown Blok G-15. Green Lake City, Jl. Kresek Raya, Petir, Cipondoh, RT.004/RW.008, Petir, Cipondoh, Tangerang City, Banten 15147</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#3873f3] transition duration-200">Home</a></li>
                        <li><a href="#projects" className="hover:text-[#3873f3] transition duration-200">Project</a></li>
                        <li><a href="#service" className="hover:text-[#3873f3] transition duration-200">Service</a></li>
                        <li><a href="#cnhooseus" className="hover:text-[#3873f3] transition duration-200">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-[#3873f3] transition duration-200">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.63 2H4.37A2.37 2.37 0 002 4.37v15.26A2.37 2.37 0 004.37 22h7.82V14h-2.58v-2.92h2.58V9.82c0-2.55 1.55-3.95 3.84-3.95 1.1 0 2.05.08 2.33.12v2.78h-1.6c-1.25 0-1.49.6-1.49 1.46V14h3.08l-.4 3.08h-2.68V22h5.17A2.37 2.37 0 0022 19.63V4.37A2.37 2.37 0 0019.63 2z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-[#3873f3] transition duration-200">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.16-2.72c-.95.568-2.004.97-3.12 1.18c-1.02-.997-2.47-1.62-4.1-.73c-2.485.6-4.015 2.5-4.1 4.98c-3.1-.15-5.88-1.63-7.73-4.04c-.32.55-.5 1.18-.5 1.85c0 1.28.65 2.45 1.7 3.12a4.93 4.93 0 01-2.22-.6c-.02.01-.04.02-.06.03c0 2.68 1.9 4.9 4.4 5.4a4.93 4.93 0 01-2.23.08c.7 2.18 2.72 3.77 5.1 3.82-1.88 1.48-4.25 2.38-6.82 2.38-.44 0-.88-.02-1.3-.08.62 1.94 2.55 3.3 4.78 3.32a13.92 13.92 0 007.54-2.21 13.91 13.91 0 004.2-4.1c.95-1.12 1.6-2.43 1.9-3.8z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-[#3873f3] transition duration-200">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.432.064 2.115.3 2.775.56a4.4 4.4 0 011.66 1.07c.56.56 1.07 1.66 1.33 2.775.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.064 1.432-.3 2.115-.56 2.775a4.4 4.4 0 01-1.07 1.66c-.56.56-1.66 1.07-2.775 1.33-.8.2-1.16.22-2.32.22s-1.52-.02-4.63-.08c-1.432-.06-2.115-.3-2.775-.56a4.4 4.4 0 01-1.66-1.07c-.56-.56-1.07-1.66-1.33-2.775-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.064-1.432.3-2.115.56-2.775a4.4 4.4 0 011.07-1.66c.56-.56 1.66-1.07 2.775-1.33.8-.2 1.16-.22 2.32-.22zM12 0c-3.59 0-4.044.015-5.464.075C5.044.135 4.38.375 3.7.67A6.4 6.4 0 00.67 3.7C.375 4.38.135 5.044.075 6.536.015 7.956 0 8.41 0 12s.015 4.044.075 5.464c.06 1.492.3 2.156.595 2.835a6.4 6.4 0 003.03 3.03c.679.295 1.343.535 2.835.595 1.42.06 1.874.075 5.464.075s4.044-.015 5.464-.075c1.492-.06 2.156-.3 2.835-.595a6.4 6.4 0 003.03-3.03c.295-.679.535-1.343.595-2.835.06-1.42.075-1.874.075-5.464s-.015-4.044-.075-5.464c-.06-1.492-.3-2.156-.595-2.835a6.4 6.4 0 00-3.03-3.03C19.62 0.375 18.956 0.135 17.464 0.075 16.044 0.015 15.59 0 12 0zm0 4.88c2.164 0 3.916 1.752 3.916 3.916s-1.752 3.916-3.916 3.916-3.916-1.752-3.916-3.916S9.836 4.88 12 4.88zm0 1.958c-1.07 0-1.958.888-1.958 1.958s.888 1.958 1.958 1.958 1.958-.888 1.958-1.958S13.07 6.838 12 6.838zM21.284 3.716a1.275 1.275 0 11-2.55 0 1.275 1.275 0 012.55 0z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                    <form className="flex">
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3873f3]" />
                        <button type="submit" className="px-6 py-2 rounded-r-full bg-[#3873f3] text-white hover:bg-[#2c5ebc] transition duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Aether Digital. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}
