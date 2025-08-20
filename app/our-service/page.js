import React from 'react';

export default function page() {
  return (
    <section className="ourService py-16 relative z-10" style={{}}>
        <div className="max-w-7xl mx-auto px-6" style={{}}>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div className="bg-gray-900 p-8 rounded-2xl border-gray-800">
                    <div className="text-[#3873f3] mb-4 transition duration-300 hover:scale-110">
                        <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L12 21m0 0l2.25-4M12 21v-3.75m0-3.75H12m0 0v-7.5m0-3.75h-3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 005.25 18h13.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0018.75 3H9.75z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#64badf] text-center">Web Development</h3>
                    <p className="text-gray-400 text-center text-sm">We build fast, secure, and responsive websites that perform flawlessly on all devices.</p>
                </div>

                <div className="bg-gray-900 p-8 rounded-2xl border-gray-800">
                    <div className="text-[#3873f3] mb-4 transition duration-300 hover:scale-110">
                        <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white text-center">UI/UX Design</h3>
                    <p className="text-gray-400 text-center text-sm">Creating intuitive and beautiful user interfaces that provide a seamless experience.</p>
                </div>

                <div className="bg-gray-900 p-8 rounded-2xl border-gray-800">
                    <div className="text-[#3873f3] mb-4 transition duration-300 hover:scale-110">
                        <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white text-center">SEO Optimization</h3>
                    <p className="text-gray-400 text-center text-sm">Helping you rank higher on search engines to reach a wider audience organically.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
