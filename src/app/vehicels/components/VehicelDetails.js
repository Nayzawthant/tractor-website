"use client"
import React, { useState } from 'react';
import VehicleForm from './VehicleForm'
import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";
import { WiTime3 } from "react-icons/wi";
import { MdCarRental } from "react-icons/md";
import { GrFormPreviousLink } from "react-icons/gr";

import { GrLinkNext } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const VehicelDetails = () => {
    const imgs = [
        { id: 0, value: "https://images.pexels.com/photos/2575135/pexels-photo-2575135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 1, value: "https://media.istockphoto.com/id/491151340/photo/tractor-on-the-field.jpg?s=2048x2048&w=is&k=20&c=Xb9WgHAK6K1kyEKJH5OSIh7mVzQuAnysFwrjxudDY84=" },
        { id: 2, value: "https://images.pexels.com/photos/4439573/pexels-photo-4439573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ]
    const [wordData, setWordData] = useState(imgs[0])
    const [val, setVal] = useState(0)
    const handleClick = (index) => {
        console.log(index)
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }
    const handleNext = () => {
        let index = val < imgs.length - 1 ? val + 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }
    const handlePrevious = () => {
        let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }

    return (
        <div className='vehicels_details'>
            <div className='w-[90%] relative mx-auto'>
                <div className='flex w-[80%] justify-between  py-10 mx-auto'>
                    <div className="main w-[1/2]">
                        <div className='relative h-[50vh] w-full'>
                            <button className='btns-p' onClick={handlePrevious}>
                                <MdArrowBackIos className='text-white' />
                            </button>
                            <img src={wordData.value} className='w-full h-full rounded-xl' />
                            <button className='btns-n' onClick={handleNext}>
                                <MdArrowForwardIos className='text-white' />
                            </button>


                        </div>
                        <div className='flex_row'>
                            {imgs.map((data, i) =>
                                <div className="thumbnail" key={i} >
                                    <img className={wordData.id == i ? "clicked w-full h-full" : "w-full h-full"} src={data.value} onClick={() => handleClick(i)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mt-10 w-[30%]'>
                        <div className='flex items-center mb-8'>
                            <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                                <GiSteeringWheel className='text-blue-600' />
                            </div>

                            <p className='text-[#333333]'>John Deere </p>
                        </div>
                        <div className='flex items-center mb-8 '>
                            <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                                <MdCarRental className='text-yellow-600 ' />
                            </div>

                            <p className='text-[#333333]'>$30 / day </p>
                        </div>
                        <div className='flex items-center mb-6 '>
                            <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                                <WiTime3 className='text-red-600 ' />
                            </div>

                            <p className='text-[#333333]'> 6 day </p>
                        </div>

                        <div className='flex items-center mb-6 '>
                            <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                                <FaGasPump className='text-green-600 ' />
                            </div>

                            <p className='text-[#333333]'> 30 Gallons </p>
                        </div>
                    </div>
                </div>


                <div className='mt-20 w-[80%] mx-auto'>
                    <p className='text-[25px] tracking-widest font-bold mb-8 uppercase text-[#C41230]'>
                        MF 8700 S
                    </p>
                    <p className='text-[16px] opacity-60'>The New MF 8700 S Series is aimed at customers looking for a New touch of high horse power and a precision farming tractor with inspired design and optimised efficiency.

                        The New MF 8700 S with its powerful new styling is designed to captivate you from the start. The NEW MF light bar and iconic MF triple triangle logo is at the heart of the ‘S’ effect distinctive styling, the full embodiment of MF’s power, design and engineering quality.</p>

                    <VehicleForm />
                </div>

            </div>
        </div>
    )
}

export default VehicelDetails
