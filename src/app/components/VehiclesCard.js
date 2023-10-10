"use client"
import React, { useState } from 'react'

const VehiclesCard = ({ key, frontContent, backContent }) => {
    const [isBackVisible, setIsBackVisible] = useState(false);

    const toggleCard = () => {
        setIsBackVisible(prevState => !prevState);
    };
    return (

        <div className={`card ${isBackVisible ? 'card-back' : 'card-front'}`}>
            {isBackVisible ?
                <div class="rounded overflow-hidden shadow-lg bg-white border border-1">
                    <div className='flex py-4 px-7 justify-between text-[14px] pt-10'>
                        <div className='w-1/2'>
                            <img className='w-[23px] h-[23px] mb-3' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-lift-capacity.png' alt='maxi' />
                            
                            <p className='font-semibold tracking-widest text-[13px]'>Maximum Lift Capacity(kg)</p>
                            <p className='font-semibold tracking-widest text-[10px] text-[#292524] opacity-80'>12,000</p>
                           
                        </div>
                        <div className='w-1/2'>
                            <img className='w-[23px] h-[23px] mb-3' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-pistons.jpg' alt='tran' />
                            <p className='font-semibold tracking-widest text-[13px]'>Transmission</p>
                            <p className='font-semibold tracking-widest text-[10px] text-[#292524] opacity-80'>Dyna-VT</p>
                        </div>

                    </div>
                    <div className='flex py-4 px-7 justify-between text-[14px]'>
                        <div className='w-1/2'>
                            <img className='w-[23px] h-[23px] mb-3' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-turbo.jpg' alt='maxi' />
                            <p className='font-semibold tracking-widest text-[13px]'>Engine</p>
                            <p className='font-semibold tracking-widest text-[10px] text-[#292524] opacity-80'>All-in-One Stage V</p>
                        </div>
                        <div className='w-1/2'>
                            <img className='w-[23px] h-[23px] mb-3' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-max-horsepower.png' alt='tran' />
                            <p className='font-semibold tracking-widest text-[13px]'>Maximum HP</p>
                            <p className='font-semibold tracking-widest text-[10px] text-[#292524] opacity-80'>400</p>
                        </div>

                    </div>
                    <div class="px-7 pt-4 pb-4">
                        <div className='flex justify-center storebutton'>
                            <button onClick={toggleCard} className="mr-3 text-white font-dmserif text-md one">Close</button>
                            <a href='#' className="text-white font-dmserif text-md two">Discover</a>

                        </div>

                    </div>
                </div>
                :
                <div class="rounded overflow-hidden bg-white">
                    <img class="w-full h-48" src="https://pngimg.com/uploads/tractor/tractor_PNG101301.png" alt="Mountain" />
                    <div class="px-3 text-center">
                        <div class="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
                        <p class="text-gray-700 text-[14px]">
                            High Performance Range of Rakes
                        </p>
                    </div>
                    <div class="px-3 pt-4 pb-4">
                        <div className='flex justify-center storebutton'>
                            <a href='#' className="text-white font-dmserif text-md two">Discover</a>
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
