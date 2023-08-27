import React from 'react';
import { Routes, Link } from 'react-router-dom';
import PageIllustration from '../components/shared/PageIllustration';

import infos from '../data/infos';
function NotFound() {
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
                <div className="flex justify-center items-center h-screen">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">{infos.page_not_found}</h1>
                            <p className="text-xl text-gray-400 mb-4">
                                {infos.about_desc}
                            </p>
                            <div className="text-gray-400 text-center mt-1">
                                <Link
                                    to="/"
                                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                                >
                                    {infos.page_not_found_back}
                                </Link>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NotFound;
