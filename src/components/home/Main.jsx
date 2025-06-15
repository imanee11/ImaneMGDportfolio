import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import { images } from '../../constants';
import { DarkModeContext } from '../../context/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import ShinyText from '../animation/ShinyText';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../animation/Carousel';


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

                {/* about */}
                <section className='px-[6vw] pt-[5vh] md:pt-[10vh] text-black dark:text-white'>
                    <p className='font-bold text-center uppercase text-[23px] sm:text-[60px] md:text-[25px] leading-tight pb-7'>About me</p>
                    <p className='text-center md:w-[60vw] mx-auto'>Hi, I’m <span className='font-semibold italic text-[#5c9fa0]'>Imane Magada</span>, a passionate photographer and videographer who loves capturing life’s special moments. Through my lens, I create visuals that tell stories and leave lasting impressions. Whether it’s a beautiful landscape or a memorable event, I focus on authenticity and emotion. When I’m not behind the camera, I’m exploring new creative ideas and perfecting my craft. Let’s create something unforgettable together!</p>
                </section>


                {/* gallery */}
                <section className="pt-[5vh] md:pt-[15vh] text-black dark:text-white overflow-x-hidden">
                    <p className="text-center font-bold uppercase text-[30px] sm:text-[60px] md:text-[50px] leading-tight pb-10">
                        MY GALLERY
                    </p>
                    <div className='pl-[6vw] '>
                        <div className="flex justify-between items-center pb-4 text-sm md:text-base font-medium">
                            <p>2021–2022</p>
                            {/* <p className="text-blue-600 cursor-pointer hover:underline">VIEW ALL →</p> */}
                        </div>
                        <Carousel />
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
