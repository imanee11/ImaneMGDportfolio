import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
    const { darkMode } = useContext(DarkModeContext);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const bgClass = scrolled
        ? darkMode
            ? 'bg-black text-white'
            : 'bg-white text-black shadow-md'
        : 'bg-transparent text-white';

    const borderClass = scrolled
        ? darkMode
            ? 'border-black/50'
            : 'border-black/30'
        : 'border-white/50';

    return (
        <nav className={`fixed top-0 left-0 right-0 pt-8 px-[6vw] z-50 transition-all duration-300 ${bgClass}`}>
            <div className={`flex items-center justify-between font-semibold border-b ${borderClass} transition-all duration-300 px-4 pb-8`}>
                {/* Logo */}
                <div>
                    <p className='text-lg font-bold'>Imane Magada</p>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-[14px]">
                    <a href="#">About</a>
                    <a href="#">Works</a>
                    <a href="#">Photography</a>
                    <a href="#">Videos</a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={`flex flex-col md:hidden gap-4 text-[14px] mt-4 px-4 pb-4 ${borderClass}`}>
                    <a href="#">About</a>
                    <a href="#">Works</a>
                    <a href="#">Photography</a>
                    <a href="#">Videos</a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
