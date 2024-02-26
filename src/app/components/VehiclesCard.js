"use client"
import React, { useState } from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";
import { WiTime3 } from "react-icons/wi";
import { MdCarRental } from "react-icons/md";

const VehiclesCard = () => {
    const [isBackVisible, setIsBackVisible] = useState(false);

    const toggleCard = () => {
        setIsBackVisible(prevState => !prevState);
    };
    return (

        <div className={`card ${isBackVisible ? 'card-back' : 'card-front'}`}>
            {isBackVisible ?
                <div class="rounded overflow-hidden shadow-lg bg-white border border-1">
                    <div className="pt-5 px-7">
                        <div className="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
                    </div>
                    <div className='flex py-4 px-7 justify-between text-[14px] pt-10'>
                        <div className='w-1/2 text-black '>
                            <div className='flex'>
                                <GiSteeringWheel className='mb-2 text-xl text-blue-600' />
                            </div>
                            John Deere  

                        </div>
                        <div className='w-1/2 text-black '>
                            <div className='flex'>
                                <MdCarRental className='mb-2 text-xl text-yellow-600' />
                            </div>
                            $30 / day
                        </div>

                    </div>
                    <div className='flex py-4 px-7 justify-between text-[14px]'>
                        <div className='w-1/2 text-black '>
                            <div className='flex'>
                                <WiTime3 className='mb-2 text-xl text-red-600' />
                            </div>
                            6 days
                        </div>
                        <div className='w-1/2 text-black '>
                            <div className='flex'>
                                <FaGasPump className='mb-2 text-xl text-green-600' />
                            </div>
                            30 Gallons
                        </div>

                    </div>
                    <div class="px-7 pt-4 pb-4">
                        <div className='flex justify-center storebutton'>
                            <button onClick={toggleCard} className="mr-3 text-white font-dmserif text-md one">Close</button>
                            <a href='/vehicels/123' className="text-white font-dmserif text-md two">Discover</a>

                        </div>

                    </div>
                </div>
                :
                <div class="rounded overflow-hidden shadow-lg bg-slate-200">
                    <div className="px-5 pt-4">
                        <div className="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
                    </div>
                    <img class="w-full h-48" src="vehicel.png" alt="Mountain" />

                    <div class="px-3 pt-4 pb-4">
                        <div className='flex justify-center storebutton'>
                            <a href='/vehicels/123' className="text-white font-dmserif text-md two">Discover</a>
                            <button onClick={toggleCard} className="text-white font-dmserif text-md one">Quick View</button>
                        </div>
                    </div>
                </div>
            }
            {/* {isBackVisible ? backContent : frontContent} */}
            {/* <button onClick={toggleCard} className='absolute top-0 z-30 bg-white'>Toggle Card</button> */}
        </div>


    )
}

export default VehiclesCard
