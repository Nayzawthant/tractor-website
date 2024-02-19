import React from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";
import { WiTime3 } from "react-icons/wi";
import { MdCarRental } from "react-icons/md";

const LatestCard = () => {
  return (
    <div className="overflow-hidden rounded shadow-lg cursor-pointer bg-slate-200">
      <div className="px-5 pt-4">
        <div className="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
      </div>
      <img className="w-full h-48" src="https://pngimg.com/uploads/tractor/tractor_PNG101301.png" alt="Mountain" />

      <div className="px-3 pt-4 pb-4">
        <div className='flex justify-between storebutton'>
          <div className='text-black '>
            <div className='flex justify-center'>
              <GiSteeringWheel className='mb-2 text-xl text-blue-600' />
            </div>
            John Deere
          </div>
          <div className='text-black'>
            <div className='flex justify-center'>
              <MdCarRental className='mb-2 text-xl text-yellow-600' />
            </div>
            $30 / day
          </div>
          <div className='text-black'>
            <div className='flex justify-center'>
              <WiTime3 className='mb-2 text-xl text-red-600' />
            </div>
            6 days
          </div>
          <div className='text-black'>
            <div className='flex justify-center'>
              <FaGasPump className='mb-2 text-xl text-green-600' />
            </div>
            30 Gallons
          </div>

        </div>
      </div>
    </div>
  )
}

export default LatestCard
