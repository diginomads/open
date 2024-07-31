// src/app/components/HeroSection.tsx
import React from 'react';

export default function HeroSection() {
    return (

        <div className="bg-gray-100">
            <div className="max-w-3xl ml-40 py-20 px-4 sm:px-6 lg:px-8 text-left pt-4">
                {/* <img src="/path/to/logo.png" alt="Cal.com Logo" className="mb-6" /> */}
                <h3 className="text-4xl font-bold text-gray-900 sm:text-3xl md:text-3xl">
                    Cal.com®
                </h3>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mt-14">
                    <span className="block">The most</span>
                    <span className="block"><span className="underline">public</span> private</span>
                    <span className="block">company.</span>
                </h1>
                <p className="mt-5 text-lg text-gray-600 mt-10">
                    <strong>Cal.com, Inc.</strong> is an <a href="#" className="text-gray-600 underline">Open Startup</a>, which means it operates fully transparent and shares its salaries and core metrics.
                </p>
                <p className="mt-3 text-lg text-gray-600 mt-6">
                    All metrics are tracked and verified by <a href="#" className="text-gray-600 underline">jitsu.com</a>, the open source segment alternative.
                </p>
                <p className="mt-3 text-lg text-gray-600 mt-6">
                    All source code is open-source on <a href="#" className="text-gray-600 underline">GitHub</a>.
                </p>
                <p className="mt-3 text-lg text-gray-600 mt-6">
                    Our company <a href="#" className="text-gray-600 underline">handbook</a> is open.
                </p>
            </div>
        </div>
    );
};


