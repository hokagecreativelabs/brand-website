"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Ensure client-only rendering
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    if (!isClient) return null;  // Prevent SSR rendering

    return (
        <nav className="w-full h-[104px] px-6 md:px-24 flex items-center justify-center bg-white fixed top-0 z-50">
            <div className="w-full max-w-[1248px] h-full flex items-center justify-between gap-10">
                <div className="flex items-center justify-center">
                    <img
                        src="/assets/images/LOGO.webp"
                        alt="Logo"
                        className="h-[40px] object-contain"
                        style={{ width: "auto" }}
                    />
                </div>

                <div className="hidden md:flex items-center justify-center gap-8 bg-[#F0F2F5] w-[318px] h-[55px] py-4 px-10 rounded-full">
                    <a href="#" className="font-nohemi text-[#101928] text-base font-medium">About</a>
                    <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Services</a>
                    <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Projects</a>
                </div>

                <button className="hidden md:flex font-medium tracking-relaxed font-nohemi items-center justify-center gap-2 bg-purple text-white w-[150px] h-[56px] px-4 py-4 rounded-full">
                    <span>Book a Call</span>
                </button>

                <div className="flex md:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl text-gray-800">
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden w-full bg-white shadow-md absolute top-[100px] left-0 p-6 z-50">
                    <div className="flex flex-col gap-6">
                        <a href="#" className="font-nohemi text-[#101928] text-base font-medium">About</a>
                        <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Services</a>
                        <a href="#" className="font-nohemi text-[#101928] text-base font-medium">Projects</a>
                        <button className="font-medium tracking-relaxed font-nohemi flex items-center gap-2 bg-purple text-white w-full h-[56px] px-4 py-4 rounded-full">
                            <span>Book a Call</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
