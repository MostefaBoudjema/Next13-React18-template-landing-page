import React from 'react';
import {
    Routes,
    Route    
  } from 'react-router-dom';
import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
// import Footer from '../components/Footer';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import HeroHome from '../components/home/HeroHome';
import FeaturesZigzag from '../components/home/FeaturesZigzag';
import FeaturesBlocks from '../components/home/FeaturesBlocks';
import NotFound from './404';

function Others() {
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

                {/*  Page sections */}
                <Routes>
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/newsletter" element={<><div className="m-20"></div><Newsletter /></>} />
                    <Route path="/hero" element={<HeroHome />} />
                <Route path="/zigzag" element={<FeaturesZigzag />} />
                <Route path="/blocks" element={<FeaturesBlocks />} />
                <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>

            {/*  Site footer */}
            {/* <Footer /> */}
        </div>
    );
}

export default Others;
