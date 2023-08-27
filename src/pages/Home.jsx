import React from 'react';

import Header from '../components/shared/Header';
import PageIllustration from '../components/shared/PageIllustration';
import HeroHome from '../components/home/HeroHome';
import FeaturesBlocks from '../components/home/FeaturesBlocks';
import FeaturesZigZag from '../components/home/FeaturesZigzag';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
//import Banner from '../components/Banner';
import Footer from '../components/shared/Footer';

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
