import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const NavBar = () => {
    const { darkMode } = useContext(DarkModeContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Background & text color after scroll
    const bgClass = scrolled
        ? darkMode
            ? 'bg-black text-white'
            : 'bg-white text-black shadow-md'
        : 'bg-transparent text-white';

    // Border color logic
    const borderClass = scrolled
        ? darkMode
            ? 'border-black/50' // ✅ Dark mode after scroll
            : 'border-black/30' // ✅ Light mode after scroll
        : 'border-white/50';   // ✅ Default at top

    return (
        <nav className={`fixed top-0 left-0 right-0 pt-8 px-[6vw] z-50 transition-all duration-300 ${bgClass}`}>
            <div className={`flex items-center justify-between font-semibold border-b ${borderClass} transition-all duration-300 px-4 pb-8`}>
                {/* left */}
                <div className='flex gap-6'>
                    <a href="#" className='text-[14px]'>About</a>
                    <a href="#" className='text-[14px]'>Works</a>
                </div>

                {/* middle */}
                <div>
                    <p>Imane Magada</p>
                </div>

                {/* right */}
                <div className='flex gap-6'>
                    <a href="#" className='text-[14px]'>Photography</a>
                    <a href="#" className='text-[14px]'>Videos</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
