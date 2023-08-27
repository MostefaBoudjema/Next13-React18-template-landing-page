import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import PageIllustration from '../components/shared/PageIllustration';
import FeaturesBlocks from '../components/home/FeaturesBlocks';

function Service() {
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
                <div className="py-6 md:py-10 "></div>
                <FeaturesBlocks />
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Service;
