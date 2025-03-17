"use client"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="border w-full h-[104px] px-6 md:px-24 flex items-center justify-center bg-white fixed top-0 z-50">
            <div className="w-full max-w-[1248px] h-full flex items-center justify-between gap-10">
                {/* Logo */}
                <div className="w-[128px] h-[40px] flex items-center justify-center object-contain">
                    <img src="/assets/images/LOGO.png" alt="Logo" />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center justify-center gap-8 bg-[#F0F2F5] w-[318px] h-[55px] py-4 px-10 rounded-full">
                    <a href="#" className="font-nohemi text-[#101928] text-base font-medium">About</a>
                    <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Services</a>
                    <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Projects</a>
                </div>

                {/* CTA Button */}
                <button className="hidden md:flex font-medium tracking-relaxed font-nohemi items-center justify-center gap-2 bg-purple text-white w-[150px] h-[56px] px-4 py-4 rounded-full">
                    <span>Book a Call</span>
                    <img src="/assets/images/call-icon.png" className='w-[24px] h-[24px]' alt="Call Icon" />
                </button>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl text-gray-800">
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full bg-white shadow-md absolute top-[45px] left-0 p-6 z-50">
                    <div className="flex flex-col gap-6">
                        <a href="#" className="font-nohemi text-[#101928] text-base font-medium">About</a>
                        <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Services</a>
                        <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Projects</a>
                        <button className="font-medium tracking-relaxed font-nohemi flex items-center gap-2 bg-purple text-white w-full h-[56px] px-4 py-4 rounded-full">
                            <span>Book a Call</span>
                            <img src="/assets/images/call-icon.png" className='w-[24px] h-[24px]' alt="Call Icon" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
