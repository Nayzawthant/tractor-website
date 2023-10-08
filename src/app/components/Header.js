"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Header = () => {
  return (
    <div className='mainback young-font'>
      <div className='w-[80%] mx-auto flex items-center justify-between '>
        <div className='flex items-center'>
          <div className='px-3 py-2 mr-3 bg-white shadow-logo'>
            <img className='w-[100px] h-[50px]' src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/logos/MF-logo-Header.png' alt='logo' />
          </div>
          <div className='text-[#292524] flex text-[.6125rem]'>
            <div className='mr-3'>MM</div>
            <div>|</div>
            <div className='ml-3'>EN</div>
          </div>
        </div>
        <div className='text-[#292524] text-[1rem] px-10 py-2 flex items-center justify-center gap-7 flex-wrap'>
          <Link href={'/'}>Home</Link>
          <Link href={'/vehicels'}>Vehicles</Link>
          <Link href={'/newandreviews'}>News & Reviews</Link>
          <Link href={'#'}>Contact us</Link>
          <Link href={'#'}>Art & Culter</Link>
          <Link href={'#'}>Sustainability</Link>

        </div>

        <div className='shadow-login'>

          <Link href={'#'} className='text-white tex-[12px] two' >Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
