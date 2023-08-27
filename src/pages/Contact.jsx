import React from 'react';
import {
    Routes,
    Route    
  } from 'react-router-dom';
import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';

function Contact() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div
                    className="relative max-w-6xl mx-auto h-0 pointer-events-none"
                    aria-hidden="true"
                >
                    <PageIllustration />
                </div>
                Contact
                {/*  Page sections */}
                <Routes>
                    {/* <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/newsletter" element={<><div className="m-20"></div><Newsletter /></>} />
                    <Route path="/hero" element={<HeroHome />} />
                    <Route path="/zigzag" element={<FeaturesZigzag />} /> */}
                </Routes>
            </main>

            {/*  Site footer */}
            {/* <Footer /> */}
        </div>
    );
}

export default Contact;