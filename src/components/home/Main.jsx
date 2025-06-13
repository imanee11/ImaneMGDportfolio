import React, { useContext } from 'react';
import NavBar from './NavBar';
import { images } from '../../constants';
import { DarkModeContext } from '../../context/DarkModeContext';

import { FiSun, FiMoon } from 'react-icons/fi';

const Main = () => {
    // dark mode 
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <div className=''>
                {/* hero section */}
                <section
                    className="relative h-screen bg-cover bg-center px-[6vw]"
                    style={{ backgroundImage: `url(${images.bg})` }}
                >
                    <NavBar />

                    {/* Hero content */}
                    <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                        <div className='h-[200vh]'>hiii</div>
                    </div>
                </section>



                <section className='fixed bottom-5 right-5 z-50'>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className='bg-white dark:bg-black text-black dark:text-white p-3 rounded-full shadow-md transition-all duration-300'
                    >
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </section>
            </div>
        </>
    );
};

export default Main;

