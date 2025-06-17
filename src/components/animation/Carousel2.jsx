import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { images } from "../../constants";

// Import your video files
// import video1 from "../../assets/video1.mp4";
// import video2 from "../../assets/video2.mp4";
// import video3 from "../../assets/video3.mp4";

// Add more if needed
const videos = [images.bg, images.bg, images.bg];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer bg-black/50 hover:bg-black/80 p-2 rounded-full text-white"
    >
        <FaArrowRight />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer bg-black/50 hover:bg-black/80 p-2 rounded-full text-white"
    >
        <FaArrowLeft />
    </div>
);

function Carousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // one video per slide
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <ul className="inline-block">{dots}</ul>
            </div>
        ),
        customPaging: () => <div className="w-2 h-2 bg-gray-400 rounded-full"></div>,
    };

    return (
        <div className="relative overflow-hidden pb-4">
            <Slider {...settings}>
                {videos.map((videoSrc, index) => (
                    <div key={index} className="px-2 pb-3">
                        <div className="w-full h-[70vh] overflow-hidden ">
                            {/* <video
                                className="w-full h-full object-cover"
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                            /> */}
                            <img src={videoSrc} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
