import React from 'react'

const page = () => {
  return (
    <div className='w-[90%] mx-auto teko'>
      <div className='relative w-full h-[95vh]'>
        <img className='w-full h-full' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/tractors/mf-8700-s/MF8700S-Hero.jpg' alt='details'  />
        <div className='absolute flex-wrap w-full text-center top-12'>
            <h4 className='text-[40px] font-bold text-white'>THE NEW TOUCH OF HIGH HORSEPOWER & PRECISION FARMING</h4>
            <p className='text-white text-[25px]'>Introducing the MF 8700 S</p>
        </div>
      </div>
      
      <div className='mt-20 w-[80%] mx-auto'>
        <h4 className='text-[#292524] text-[30px] font-semibold'>MF 8700 S</h4>
      </div>
    </div>
  )
}

export default page
