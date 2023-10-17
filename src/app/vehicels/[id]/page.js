import React from 'react'
import VehicleForm from '../components/VehicleForm'

const page = () => {
    return (
        <div className='vehicels_details'>
            <div className='w-[90%] mx-auto teko'>
                <div className='relative w-full h-[95vh]'>
                    <img className='w-full h-full' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/tractors/mf-8700-s/MF8700S-Hero.jpg' alt='details' />
                    <div className='absolute flex-wrap w-full text-center top-12'>
                        <h4 className='text-[40px] font-bold text-white'>THE NEW TOUCH OF HIGH HORSEPOWER & PRECISION FARMING</h4>
                        <p className='text-white text-[25px]'>Introducing the MF 8700 S</p>
                    </div>
                </div>

                <div className='mt-20 w-[80%] mx-auto'>
                    <h4 className='text-[#292524] text-[30px] font-semibold mb-10'>MF 8700 S</h4>
                    <p className='text-[20px] opacity-60'>The New MF 8700 S Series is aimed at customers looking for a New touch of high horse power and a precision farming tractor with inspired design and optimised efficiency.

                        The New MF 8700 S with its powerful new styling is designed to captivate you from the start. The NEW MF light bar and iconic MF triple triangle logo is at the heart of the ‘S’ effect distinctive styling, the full embodiment of MF’s power, design and engineering quality.</p>
                    
                    <VehicleForm />
                </div>
                
            </div>
        </div>
    )
}

export default page
