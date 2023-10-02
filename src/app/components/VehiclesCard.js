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
                <div class="rounded overflow-hidden shadow-lg">

                    <div class="px-7 py-4 bg-[#f4f1f1]">
                        <div class="font-bold text-xl my-2">MF 8700 S</div>
                    </div>
                    <div className='flex py-4 px-7 text-[14px]'>
                        <div className='w-1/2'>
                            <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-lift-capacity.png' alt='maxi' />
                            <p className='font-bold tracking-widest young-font'>Maximum Lift Capacity(kg)</p>
                            <p className='font-semibold tracking-widest text-[11px] opacity-80'>12,000</p>
                        </div>
                        <div className='w-1/2'>
                            <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-pistons.jpg' alt='tran' />
                            <p className='font-bold tracking-widest'>Transmission</p>
                            <p className='font-semibold tracking-widest text-[11px] opacity-80'>Dyna-VT</p>
                        </div>

                    </div>
                    <div className='flex py-4 px-7 text-[14px]'>
                        <div className='w-1/2'>
                            <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-turbo.jpg' alt='maxi' />
                            <p className='font-bold tracking-widest'>Engine</p>
                            <p className='font-semibold tracking-widest text-[11px] opacity-80'>All-in-One Stage V</p>
                        </div>
                        <div className='w-1/2'>
                            <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-max-horsepower.png' alt='tran' />
                            <p className='font-bold tracking-widest '>Maximum HP</p>
                            <p className='font-semibold tracking-widest text-[11px] opacity-80'>400</p>
                        </div>

                    </div>
                    <div class="px-7 pt-4 pb-4">
                        <div className='flex storebutton'>
                            <button onClick={toggleCard} className="mr-3 text-white font-dmserif text-md one">Close</button>
                            <a href='#' className="text-white font-dmserif text-md two">Discover</a>

                        </div>

                    </div>
                </div>
                :
                <div class="rounded overflow-hidden">
                    <img class="w-full h-48 p-6" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                    <div class="px-3 py-4">
                        <div class="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
                        <p class="text-gray-700 text-[14px]">
                            High Performance Range of Rakes
                        </p>
                    </div>
                    <div class="px-3 pt-4 pb-4">
                        <div className='flex storebutton'>
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
