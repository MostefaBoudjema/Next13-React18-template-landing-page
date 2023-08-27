import React from 'react';
import {
    Routes,
    Route    
  } from 'react-router-dom';
import PageIllustration from '../components/shared/PageIllustration';
// import Footer from '../components/shared/Footer';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import HeroHome from '../components/home/HeroHome';
import FeaturesZigzag from '../components/home/FeaturesZigzag';
import FeaturesBlocks from '../components/home/FeaturesBlocks';
import NotFound from './404';
import config from '../data/config'

function Others() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
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
                    {config.show_testimonials && <Route path="/testimonials" element={<Testimonials />} />}
                    {config.show_newsletter && <Route path="/newsletter" element={<><div className="m-20"></div><Newsletter /></>} />}
                    {config.show_hero && <Route path="/hero" element={<HeroHome />} />}
                    {config.show_zigzag && <Route path="/zigzag" element={<FeaturesZigzag />} />}
                    {/* <Route path="/blocks" element={<FeaturesBlocks />} /> */}
                    {config.show_blocks && <Route path="/blocks" element={<FeaturesBlocks />} />}
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default Others;
