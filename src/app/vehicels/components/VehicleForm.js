import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr'
import { BsTelephone } from 'react-icons/bs'

const VehicleForm = () => {
    return (
        <div className="py-20">
            <p className='text-xl tracking-widest font-bold mb-8 uppercase text-[#C41230]'>
                Interested in our products and want to learn more?
            </p>
            
            <div className="grid grid-cols-1 text-center lg:grid-cols-2">
                <div className='mt-2'>
                    <div className='flex items-center mb-8'>
                        <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                            <img className='w-[18px] h-[18px]' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-lift-capacity.png' alt='maxi' />
                        </div>

                        <p className='text-[#333333]'>Maximum Lift Capacity(kg) - <span className='text-[#686868] text-[14px]' >12,000</span> </p>
                    </div>
                    <div className='flex items-center mb-8 '>
                        <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                            <img className='w-[18px] h-[18px]' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-pistons.jpg' alt='maxi' />
                        </div>

                        <p className='text-[#333333]'>Transmission - <span className='text-[#686868] text-[14px]' >Dyna-VT</span> </p>
                    </div>
                    <div className='flex items-center mb-6 '>
                        <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                            <img className='w-[18px] h-[18px]' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-turbo.jpg' alt='maxi' />
                        </div>

                        <p className='text-[#333333]'>Engine - <span className='text-[#686868] text-[14px]' >All-in-One Stage V</span> </p>
                    </div>
                    
                    <div className='flex items-center mb-6 '>
                        <div className='p-4 mr-6 duration-300 ease-in bg-white border cursor-pointer rounded-xl border-black/30 hover:scale-110' >
                            <img className='w-[18px] h-[18px]' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-max-horsepower.png' alt='maxi' />
                        </div>

                        <p className='text-[#333333]'>Maximum HP - <span className='text-[#686868] text-[14px]' >400</span> </p>
                    </div>
                </div>
                <div className="">
                    <input type="text" className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Name" />
                    <input type="email" className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Email" />
                    <input type="text" className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Phone" />
                    <input type="text" className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Township" />
                    <input type="text" className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Village" />
                    <input type="date" className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Date" />
                    <button className="w-full p-2 text-white bg-[#C41230] btn hover:bg-[#C91230]">Send</button>

                </div>

            </div>
        </div>

    )
}

export default VehicleForm
