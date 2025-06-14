import React, { useContext } from 'react';
import NavBar from './NavBar';
import { images } from '../../constants';
import { DarkModeContext } from '../../context/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import ShinyText from '../animation/ShinyText';

const Main = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <>
            <div>
                {/* Hero Section */}
                <section
                    className="relative h-screen bg-cover bg-center px-[6vw]"
                    style={{ backgroundImage: `url(${images.bg})` }}
                >
                    <NavBar />

                    {/* Hero Text */}
                    <div className="absolute bottom-[10%] left-[6vw] text-white max-w-[90%]">
                        <div>
                            <p className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight">
                                _Hello! I'm
                            </p>
                            <p className="font-bold uppercase text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
                                imane magada_
                            </p>
                            {/* <p className="text-[12px] sm:text-[14px] text-right mt-2">
                                I create visuals that bring moments and emotions to life.
                            </p> */}
                            <p className="text-[12px] sm:text-[14px] text-right mt-2">
                                <ShinyText text="I create visuals that bring moments and emotions to life." disabled={false} speed={3} className='custom-class' />
                            </p>
                        </div>
                    </div>
                </section>

                {/* Dark Mode Toggle */}
                <section className="fixed bottom-5 right-5 z-50">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="bg-white dark:bg-black text-black dark:text-white p-3 rounded-full shadow-md transition-all duration-300"
                    >
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </section>
            </div>
        </>
    );
};

export default Main;
