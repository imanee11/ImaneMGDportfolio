import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import { images } from '../../constants';
import { DarkModeContext } from '../../context/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import ShinyText from '../animation/ShinyText';

const Main = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark', 'bg-[#020f17]');
        } else {
            document.body.classList.remove('dark', 'bg-[#020f17]');
        }
    }, [darkMode]);

    return (
        <>
            <div className="">
                {/* hero Section */}
                <section className="relative h-screen bg-cover bg-center px-[6vw]" style={{ backgroundImage: `url(${images.bg})` }}>
                    <NavBar />

                    <div className="absolute bottom-[10%] left-[6vw] text-white max-w-[90%]">
                        <div>
                            <p className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight">_Hello! I'm</p>
                            <p className="font-bold uppercase text-[40px] sm:text-[60px] md:text-[80px] leading-tight">imane magada_</p>
                            <p className="text-[12px] sm:text-[14px] text-right mt-2">
                                <ShinyText text="I create visuals that bring moments and emotions to life." disabled={false} speed={3} className="custom-class" />
                            </p>
                        </div>
                    </div>
                </section>

                {/* My Works */}
                <section className="px-[6vw] pt-[5vh] md:pt-[10vh] text-black dark:text-white">
                    <p className="font-bold uppercase text-[30px] sm:text-[60px] md:text-[50px] leading-tight pb-10">My works</p>
                    <div className="flex flex-col md:flex-row gap-2  md:h-[65vh] w-full">
                        <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                        <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                        <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                        <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                    </div>
                </section>

                {/* Toggle Button */}
                <section className="fixed bottom-5 right-5 z-50">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="bg-[#5c9fa0] text-white p-3 rounded-full shadow-md transition-all duration-300"
                    >
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </section>
            </div>
        </>
    );
};

export default Main;
