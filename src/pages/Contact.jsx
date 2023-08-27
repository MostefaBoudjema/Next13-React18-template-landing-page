import React from 'react';
import {
    Routes,
    Route    
  } from 'react-router-dom';
import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import Contact_form from '../components/contact/contact_form';

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
                <Contact_form />
            </main>

            {/*  Site footer */}
            {/* <Footer /> */}
        </div>
    );
}

export default Contact;
