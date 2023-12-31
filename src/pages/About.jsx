import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import PageIllustration from '../components/shared/PageIllustration';
import infos from '../data/infos';

function About() {
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
                <section>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="py-12 md:py-20 border-t border-gray-800"></div>
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">{infos.about_title}</h1>
                            <p className="text-xl text-gray-400 mb-4">
                                {infos.about_desc}
                            </p>
                        </div>
                        <div className="grid gap-20">
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div
                                    className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${
                                        infos.about_img_left
                                            ? 'md:order-1'
                                            : 'rtl'
                                    }`}
                                    data-aos="fade-up"
                                >
                                    <img
                                        className="max-w-full mx-auto md:max-w-none h-auto"
                                        src={infos.about_img}
                                        width={540}
                                        height={405}
                                        alt={infos.about_title}
                                    />
                                </div>
                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos="fade-right"
                                >
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                            {infos.about_span}
                                        </div> */}

                                        <h3 className="h3 mb-3">
                                            {infos.about_span}
                                        </h3>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            {infos.about_points.map(
                                                (element, index) => (
                                                    <li
                                                        className="flex items-center mb-2"
                                                        key={element.id}
                                                    >
                                                        <svg
                                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                            viewBox="0 0 12 12"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                        </svg>
                                                        <span>
                                                            {element.text}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="py-6 md:py-10 "></div>
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default About;
