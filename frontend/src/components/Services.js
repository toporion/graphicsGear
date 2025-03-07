import React from 'react';
import { BsCheck2Square } from "react-icons/bs";

const Services = () => {
    return (
        <div>
            <p className='text-3xl font-bold text-center'>
                Our Best <span className='text-yellow-500'>Services</span>
            </p>
            <p className='w-1/2 text-center mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat
                architecto harum obcaecati odio minus natus quidem eos
            </p>
            <div className='w-full flex flex-col md:flex-row justify-between space-x-3 mt-8'>
                <div className='border w-full h-52 relative overflow-hidden'>
                    <div className='absolute top-0 left-0 w-48 h-48 bg-pink-500 rounded-br-full -ml-24 -mt-24'></div>
                    <span className="absolute text-3xl font-bold text-black -top-1 left-2">1</span>
                    <div className='py-14'><p className='px-2 text-2xl'>Logo Design</p>

                        <p className='px-2 flex gap-1 '><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> Custom, memorable designs to reflect your brand identity.</p>

                        <p className='px-2 flex gap-1'><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> Scalable designs optimized for both digital and print formats.</p>
                    </div>
                </div>
                <div className='border w-full h-52 relative overflow-hidden'>
                    <div className='absolute top-0 left-0 w-48 h-48 bg-yellow-500 rounded-br-full -ml-24 -mt-24'></div>
                    <span className="absolute text-3xl font-bold text-black -top-1 left-2">2</span>
                    <div className='py-14'><p className='px-2 text-2xl'>Business Cards</p>

                        <p className='px-2 flex gap-1 '><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> Professional designs that leave a lasting impression.</p>

                        <p className='px-2 flex gap-1'><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> High-quality layouts ready for print.</p>
                    </div>
                </div>
                <div className='border w-full h-52 relative overflow-hidden'>
                    <div className='absolute top-0 left-0 w-48 h-48 bg-blue-500 rounded-br-full -ml-24 -mt-24'></div>
                    <span className="absolute text-3xl font-bold text-black -top-1 left-2">3</span>
                    <div className='py-14'><p className='px-2 text-2xl'>Infographics</p>

                        <p className='px-2 flex gap-1 '><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> Simplified visuals to present complex data creatively.</p>

                        <p className='px-2 flex gap-1'><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> Designed to boost engagement and shareability.</p>
                    </div>
                </div>
                <div className='border w-full h-52 relative overflow-hidden'>
                    <div className='absolute top-0 left-0 w-48 h-48 bg-green-500 rounded-br-full -ml-24 -mt-24'></div>
                    <span className="absolute text-3xl font-bold text-black -top-1 left-2">4</span>
                    <div className='py-14'><p className='px-2 text-2xl'>Business Cards</p>

                        <p className='px-2 flex gap-1 '><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> Professional designs that leave a lasting impression.</p>

                        <p className='px-2 flex gap-1'><BsCheck2Square className='text-xl text-green-500 font-extrabold' /> High-quality layouts ready for print.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;