import React from 'react';

import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import HeroHome from '../components/HeroHome';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesZigZag from '../components/FeaturesZigzag';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
//import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home() {
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
                <HeroHome />
                <FeaturesBlocks />
                <FeaturesZigZag />
                <Testimonials />
                <Newsletter />
            </main>

            {/*  {/* <Banner /> */}

            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Home;
