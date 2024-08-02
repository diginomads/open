'use client'
import React, { useState } from 'react';
// import { FaHeart, FaFileAlt, FaExchangeAlt, FaDatabase, FaRocket, FaShieldAlt, FaStar, FaBriefcase } from 'react-icons/fa'; // Add all used icons
import Image from 'next/image';
import logo from '/public/images/logo.png';
import { FaUser, FaBuilding, FaLayerGroup, FaLock, FaRocket, FaSync, FaHeart, FaFileAlt, FaExchangeAlt, FaDatabase, FaShieldAlt, FaHandshake, FaUniversity, FaHandHoldingUsd, FaBriefcase, FaStar, FaRegNewspaper, FaInfoCircle, FaBook, FaRoad, FaGithub, FaClipboardList, FaBlog } from 'react-icons/fa';


const NavBar = () => {
    const [activeTab, setActiveTab] = useState('');
    const [hoveredItem, setHoveredItem] = useState('');

    const handleMouseEnter = (tab: string) => {
        setActiveTab(tab);
    };

    const handleMouseLeave = () => {
        setActiveTab('');
        setHoveredItem('');
    };

    const dropdownMenus = {
        PRODUCT: (
            <div className="absolute top-full mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-300 ease-out">
                <div className="py-4 px-6 grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-800">FP&A Intelligence</h4>
                        <div className="mt-4">
                            {[
                                { icon: FaHeart, title: 'Wealth Health Platform', description: 'Sustainable growth of your business' },
                                { icon: FaFileAlt, title: 'Generative Insight Reports', description: 'Practical, actionable insights for SMBs' },
                                { icon: FaExchangeAlt, title: 'Integrations', description: 'Seamless integration with popular tools and platforms' },
                                { icon: FaDatabase, title: 'Financial Data Lake', description: 'A centralized repository for all your financial data' },
                                { icon: FaRocket, title: 'Marketplace', description: 'Explore SMBs' },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start mb-4"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem('')}
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon className="text-gray-600 text-2xl" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-md font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">Why Nomad?</h4>
                        <div className="mt-4">
                            {[
                                { icon: FaShieldAlt, title: 'Security', description: 'Essentials for home grown businesses' },
                                { icon: FaRocket, title: 'Traditional vs Us', description: 'Experts in managing business finances' },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start mb-4"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem('')}
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon className="text-gray-600 text-2xl" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-md font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),


        SOLUTIONS: (
            <div className="absolute top-full mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-300 ease-out">
                <div className="py-4 px-6 grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-800">Explore</h4>
                        <div className="mt-4">
                            {[
                                { icon: FaStar, title: 'Solutions', description: 'An automated valuation model for SMBs' },
                                { icon: FaBriefcase, title: 'Case Studies', description: 'Real world business driven models' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 mb-4"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem('')}
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon className="text-gray-600 text-2xl" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-md font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">By Industry</h4>
                        <div className="mt-4">
                            {[
                                { icon: FaBuilding, title: 'Small Business Owners', description: 'Essentials for home grown businesses' },
                                { icon: FaHandHoldingUsd, title: 'Financial Advisors', description: 'Experts in managing business finances' },
                                { icon: FaUniversity, title: 'Banking', description: 'Comprehensive financial services for businesses growth' },
                                { icon: FaHandshake, title: 'M&A', description: 'Strategic guidance in merging and acquiring SMBs' },
                                { icon: FaLayerGroup, title: 'Private Equity', description: 'Seamless operations for financials' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 mb-4"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem('')}
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon className="text-gray-600 text-2xl" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-md font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        COMPANY: (
            <div className="absolute top-full mt-2 w-[600px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-300 ease-out">
                <div className="py-6 px-6 flex h-auto">
                    <div className="bg-gray-200 p-6 rounded-lg text-black mr-4 w-1/2">
                        <h4 className="font-semibold">Nomad AI</h4>
                        <p>Your personalized digital business brokers, providing data driven business solutions</p>
                    </div>
                    <div className="w-1/2">
                        {[
                            {
                                icon: FaRegNewspaper,
                                title: 'Open Startup',
                                description: 'Subscribe to our future updates'
                            },
                            {
                                icon: FaInfoCircle,
                                title: 'About Us',
                                description: 'Learn more about Nomad AI'
                            },
                            {
                                icon: FaHandshake,
                                title: 'Partnerships',
                                description: 'Interested in working together?'
                            },
                            {
                                icon: FaBriefcase,
                                title: 'Careers',
                                description: 'Join us!'
                            }
                        ].map((item, index) => (
                            <div key={index} className="mb-6 flex items-start">
                                <div className="flex-shrink-0">
                                    <item.icon className="text-gray-600 text-2xl" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        
        

        RESOURCES: (
            <div className="absolute top-full mt-2 w-[500px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-300 ease-out">
                <div className="py-4 px-6 grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-800">Dev & Client</h4>
                        <div className="mt-4">
                            {[
                                { icon: FaBook, title: 'Documentations', description: 'APIs and Integrations' },
                                { icon: FaRoad, title: 'Roadmap', description: 'Future plans & User Feedback' },
                                { icon: FaGithub, title: 'Github', description: 'Explore our open-source projects' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 mb-4"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem('')}
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon className="text-gray-600 text-2xl" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-md font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">Community</h4>
                        <div className="mt-4">
                            {[
                                { icon: FaClipboardList, title: 'Change Log', description: 'Join our community discussions' },
                                { icon: FaBlog, title: 'Blog', description: 'Stay updated with our latest articles' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 mb-4"
                                    onMouseEnter={() => setHoveredItem(item.title)}
                                    onMouseLeave={() => setHoveredItem('')}
                                >
                                    <div className="flex-shrink-0">
                                        <item.icon className="text-gray-600 text-2xl" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-md font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),


    };

    return (
        <div className="relative flex justify-between items-center py-4  bg-gray-100 px-8">
            <div className="flex items-center space-x-4" style={{ marginLeft: '10%' }}>
                <Image src={logo} alt="Nomad AI Logo" width={30} height={30} />
                <div className="text-2xl font-bold">Nomad AI</div>
                <div className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">HIRING</div>
            </div>
            <nav className="absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex space-x-4 rounded-full border-2 border-black p-1">
                    {['PRODUCT', 'SOLUTIONS', 'COMPANY', 'RESOURCES', 'PRICING'].map((tab) => (
                        <li
                            key={tab}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(tab)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`py-2 px-4 rounded-full font-semibold transition duration-300 ease-out ${activeTab === tab
                                    ? 'bg-black text-white'
                                    : 'bg-transparent text-black'
                                    }`}
                            >
                                {tab}
                            </button>
                            {activeTab === tab && dropdownMenus[tab]}
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="bg-black text-white rounded-full py-2 px-4" style={{ marginRight: '10%' }}>Try out Demo</button>
        </div>
    );
};

export default function HeroSection() {
    return (
        <div className="bg-gray-100">
            <NavBar />
            <div className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-left pt-4">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">The most</span>
                    <span className="block">
                        <span className="underline">public</span> private
                    </span>
                    <span className="block">company.</span>
                </h1>
                <p className="mt-5 text-lg text-gray-600 mt-10">
                    <strong>Cal.com, Inc.</strong> is an{' '}
                    <a href="#" className="text-gray-600 underline">
                        Open Startup
                    </a>
                    , which means it operates fully transparent and shares its salaries
                    and core metrics.
                </p>
                <p className="mt-3 text-lg text-gray-600 mt-6">
                    All metrics are tracked and verified by{' '}
                    <a href="#" className="text-gray-600 underline">
                        jitsu.com
                    </a>
                    , the open source segment alternative.
                </p>
                <p className="mt-3 text-lg text-gray-600 mt-6">
                    All source code is open-source on{' '}
                    <a href="#" className="text-gray-600 underline">
                        GitHub
                    </a>
                    .
                </p>
                <p className="mt-3 text-lg text-gray-600 mt-6">
                    Our company{' '}
                    <a href="#" className="text-gray-600 underline">
                        handbook
                    </a>{' '}
                    is open.
                </p>
            </div>
        </div>
    );
}
