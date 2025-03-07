import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <img
                src={banner}
                alt="Banner"
                className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform translate-x-[8%] -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-left">
                <p className=" font-bold text-2xl text-white shojumaru-regular sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                    Complete Graphics <br /> Solution
                </p>
                <p className="text-sm sm:text-base md:text-lg w-3/4 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos beatae sed dolorem nam vitae. Aliquam, eligendi facere autem,
                    accusantium fuga.
                </p>
            </div>
        </div>
    );
};

export default Banner;