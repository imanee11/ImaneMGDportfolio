import React from "react";
import Slider from "react-slick";
import { images } from "../../constants";



const image = [
    {
        src: images.bg,
        title: "NATURE AND VICE VERSA",
        location: "Lofoten Islands, Norway",
        hasButton: true,
    },
    {
        src: images.bg,
        title: "WAITING FOR THE STORM",
        location: "Lofoten Islands, Norway",
        hasButton: false,
    },
    {
        src: images.bg,
        title: "FINDING PURE ENERGY",
        location: "Northern California",
        hasButton: false,
    },
    {
        src: images.bg,
        title: "FINDING PURE ENERGY",
        location: "Northern California",
        hasButton: false,
    },
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        appendDots: dots => (
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <ul className="inline-block">{dots}</ul>
            </div>
        ),
        customPaging: i => <div className="w-2 h-2 bg-gray-400 rounded-full"></div>,
    };

    return (
        <div className="overflow-hidden pb-4">
            <Slider {...settings}>
                {image.map((img, index) => (
                    <div key={index} className="pr-2 pb-3">
                        <div className="relative w-full h-[70vh] overflow-hidden">
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
                                <h3 className="font-semibold text-sm md:text-lg">{img.title}</h3>
                                <p className="text-xs md:text-sm">{img.location}</p>
                                {img.hasButton && (
                                    <button className="mt-2 px-4 py-1 border border-white text-white text-xs rounded-full hover:bg-white hover:text-black transition">
                                        See Details
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
