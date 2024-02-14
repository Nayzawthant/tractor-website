"use client"
import React, { useState } from 'react'
import { FaCarAlt } from "react-icons/fa";
import { AiOutlineCaretDown } from 'react-icons/ai'
import { RiExpandUpDownLine } from "react-icons/ri";
import LatestCard from './LatestCard';


const Latest = () => {
    const [showBrandOption, setShowBrandOption] = useState(false)
    const [selectedBrandOption, setSelectedBrandOption] = useState("years")

    const data = [
        { id: 1, years: "2014" },
        { id: 2, years: "2015" },
        { id: 3, years: "2016" },
        { id: 4, years: "2017" },
        { id: 5, years: "2018" },
        { id: 6, years: "2019" },
        { id: 7, years: "2020" },
        { id: 8, years: "2021" },
        { id: 9, years: "2022" },
        { id: 10, years: "2023" },
        { id: 11, years: "2024" },
    ]
    console.log("data", data);
    return (
        <div className='mt-16 bg-[#fff] w-[80%] mx-auto'>
            <div className='py-10 pb-0 text-[30px] text-[#C41230] font-semibold tracking-wider opacity-90'>
                Latest Products
                <div className='text-gray-700 text-[14px] font-semibold mt-5'>Explore out tactors you might like</div>
            </div>
            <div className='flex items-center justify-between mt-12'>
                <div className='w-[300px]'>
                    <div className='flex items-center p-2 border rounded-lg shadow-lg border-1 text-black/50 '>
                        <FaCarAlt className='mr-3' />
                        <input type='text' placeholder='search...' className='' />
                    </div>
                </div>
                <div className='relative mt-6'>
                    <div className='flex shadow-lg items-center justify-between w-[200px] p-2 rounded-lg text-base border border-1 cursor-pointer' onClick={() => setShowBrandOption(showBrandOption => !showBrandOption)} >
                        <span className='text-base font-light'> {selectedBrandOption}</span>
                        <RiExpandUpDownLine className='ml-3 text-lg' />
                    </div>

                    {
                        showBrandOption ? (
                            <div className='absolute w-full border border-1 shadow-2xl rounded-lg lef-0 h-56 overflow-auto top-[100%]' style={{ zIndex: showBrandOption ? '100' : '-1' }}>
                                
                                <div className='w-full p-2  text-base bg-white cursor-pointer hover:bg-[#C41230] hover:text-white'

                                    style={{ background: (selectedBrandOption === "years") ? '#C41230' : null  ,   color: (selectedBrandOption === "years") ? '#FFF' : null }}
                                    onClick={() => {
                                        setSelectedBrandOption("years")
                                        setShowBrandOption(false)
                                       
                                        // handleUpdate([])
                                    }}
                                >
                                    years

                                </div>
                                {
                                    data?.map((option, i) => {
                                        return (
                                            <div key={i}>


                                                <div className='w-full p-3 text-base bg-white cursor-pointer hover:bg-[#C41230] hover:text-white'

                                                    style={{ background: (selectedBrandOption === option?.years) ? '#C41230' : null , color: (selectedBrandOption === option?.years) ? '#FFF' : null }}
                                                    onClick={() => {
                                                        setSelectedBrandOption(option?.years)
                                                        setShowBrandOption(false)
                                                        
                                                        // handleUpdate([])
                                                    }}>


                                                    {option?.years}

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5 py-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
                <LatestCard />
                <LatestCard />
                <LatestCard />
                <LatestCard />
            </div>
        </div>
    )
}

export default Latest
