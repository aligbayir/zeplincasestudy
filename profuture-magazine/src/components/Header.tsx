import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="relative w-full z-50 bg-white shadow-md lg:shadow-none">
            <div className="max-w-[1728px] mx-auto relative flex flex-col lg:flex-row min-h-[120px]">

                {/* Left Side: Logo Area with Blue Curve */}
                <div className="relative z-20 w-full lg:w-[400px] flex-shrink-0 h-[80px] lg:h-auto overflow-hidden lg:overflow-visible">
                    {/* Blue Shape Background - Desktop */}
                    <div className="absolute top-0 left-0 w-full h-full bg-primary-blue lg:rounded-br-[80px] z-10"></div>

                    {/* Content */}
                    <div className="relative z-20 flex items-center h-full px-5 lg:pl-[100px] lg:pr-10 justify-between lg:justify-start">
                        <img
                            src="/images/5b567b228e5295a8957232ea803b1fdb5e54604d.png"
                            alt="ProFuture Logo"
                            className="h-[40px] lg:h-[60px] w-auto brightness-0 invert"
                        />
                        {/* Mobile Menu Toggle (Visual Placeholder) */}
                        <button className="lg:hidden text-white p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                    </div>
                </div>

                {/* Right Side: content */}
                <div className="flex-1 flex flex-col z-10 hidden lg:flex">

                    {/* Top Bar: Info & Stats */}
                    <div className="min-h-[50px] bg-primary-navy w-full flex flex-wrap items-center justify-between pl-5 lg:pl-12 pr-5 lg:pr-[100px] py-2 lg:py-0 text-white text-sm font-light gap-4">
                        {/* Contact Info */}
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span>profuture@gmail.com</span>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4 lg:gap-8 flex-wrap">
                            <div>
                                <span className="opacity-80 mr-1">ISSN:</span>
                                <span className="font-bold">345-255</span>
                            </div>
                            <div>
                                <span className="opacity-80 mr-1">Başlangıç</span>
                                <span className="font-bold">2025</span>
                            </div>
                            <div>
                                <span className="opacity-80 mr-1">Periyot:</span>
                                <span className="font-bold">Yılda 2 Sayı</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar: Navigation & Actions */}
                    <div className="flex-1 bg-white flex flex-wrap items-center justify-between pl-5 lg:pl-12 pr-5 lg:pr-[100px] py-4 lg:py-0 shadow-sm gap-4">

                        {/* Navigation Links */}
                        <nav className="flex items-center gap-4 lg:gap-6 overflow-x-auto no-scrollbar">
                            {/* Home Icon */}
                            <a href="#" className="text-primary-green hover:text-primary-navy transition-colors shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </a>

                            <a href="#" className="text-text-dark hover:text-primary-blue font-medium transition-colors whitespace-nowrap">Amaç ve Kapsam</a>
                            <a href="#" className="text-text-dark hover:text-primary-blue font-medium transition-colors whitespace-nowrap">Etik İlkeler ve Yayın Politikası</a>
                            <a href="#" className="text-text-dark hover:text-primary-blue font-medium transition-colors whitespace-nowrap">Makale Çağrıları</a>
                            <a href="#" className="text-text-dark hover:text-primary-blue font-medium transition-colors whitespace-nowrap">Sayılar</a>
                            <a href="#" className="text-text-dark hover:text-primary-blue font-medium transition-colors whitespace-nowrap">İletişim</a>
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 shrink-0">
                            <button className="btn btn-blue px-4 lg:px-5 py-2 text-sm whitespace-nowrap">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span className="hidden xl:inline">Dergi Kurulu</span>
                                <span className="xl:hidden">Kurul</span>
                            </button>

                            <button className="btn btn-green px-4 lg:px-5 py-2 text-sm whitespace-nowrap">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                </svg>
                                <span className="hidden xl:inline">Yazar Rehberi</span>
                                <span className="xl:hidden">Rehber</span>
                            </button>

                            <button className="btn-icon btn-icon-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
