import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className='bg-slate-200 py-2 px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center text-sm md:text-base'>
                <div className='flex gap-8'>
                <div className="mb-2 md:mb-0">info@graphicsgear.com</div>
                <div className="mb-2 md:mb-0">Banani,Dhaka</div>
                </div>
                <div className='flex items-center gap-x-2 md:gap-x-4 text-blue-700'>
                    <p className="hidden sm:block">Follow us on:</p>
                    <FaFacebookSquare />
                    <FaYoutube />
                    <FaLinkedin />
                    <FaInstagram />
                    <FaPinterest />
                    <FaTwitter />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
