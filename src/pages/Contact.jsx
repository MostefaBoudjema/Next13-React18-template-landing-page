import React from 'react';
import {
    Routes,
    Route    
  } from 'react-router-dom';
import Header from '../components/shared/Header';
import PageIllustration from '../components/shared/PageIllustration';
import Contact_form from '../components/contact/contact_form';
import Footer from '../components/shared/Footer'

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
            <Footer />
        </div>
    );
}

export default Contact;
