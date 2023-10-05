
'use client';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='p-[38px] bg-[#222] ev-one-footer' style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className='flex justify-between w-full'>
        <div className='w-1/2'>
          <p className='text-white text-[12px] leading-6 '><a href='#' className='text-white hover:border-b-[1px]'>©2023 EV One Group (Myanmar) Co., Ltd.</a></p>
        </div>
        <div className='w-1/4 text-white flex justify-end text-[10px] leading-6'>
          <Link href='/privacynote' className='ml-[8px] mr-[8px] leading-6 text-white hover:border-b-[1px]'>Privacy Notice</Link>|
          <Link href='/termandcondition' className='ml-[8px] mr-[8px] leading-6 text-white hover:border-b-[1px]'>Terms & Conditions</Link>|
          <Link href='/sitemap' className='ml-[8px] mr-[8px] leading-6 text-white hover:border-b-[1px]'>Site Map</Link>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-between w-full text-white mt-9'>
        <a href='#' className='w-[90px] footer_img h-[90px] text-white flex justify-center items-center'>
          <img alt='footer' src='https://tse1.mm.bing.net/th?id=OIP.GCEnSTN4caiLb4KonzmT1gHaFG&pid=Api&P=0&h=220' className='w-full' />
        </a>
        <a href='#' className='w-[90px] footer_img h-[90px] text-white flex justify-center items-center'>
          <img alt='footer' src='https://tse1.mm.bing.net/th?id=OIP.GCEnSTN4caiLb4KonzmT1gHaFG&pid=Api&P=0&h=220' className='w-full' />
        </a>
        <a href='#' className='w-[90px] footer_img h-[90px] text-white flex justify-center items-center'>
          <img alt='footer' src='https://tse1.mm.bing.net/th?id=OIP.GCEnSTN4caiLb4KonzmT1gHaFG&pid=Api&P=0&h=220' className='w-full' />
        </a>
        <a href='#' className='w-[90px] footer_img h-[90px] text-white flex justify-center items-center'>
          <img alt='footer' src='https://tse1.mm.bing.net/th?id=OIP.GCEnSTN4caiLb4KonzmT1gHaFG&pid=Api&P=0&h=220' className='w-full' />
        </a>
        <a href='#' className='w-[90px] footer_img h-[90px] text-white flex justify-center items-center'>
          <img alt='footer' src='https://tse1.mm.bing.net/th?id=OIP.GCEnSTN4caiLb4KonzmT1gHaFG&pid=Api&P=0&h=220' className='w-full' />
        </a>


      </div>
      <div className='flex justify-between w-full mt-9'>
        <div className='flex flex-wrap w-full'>
          <p className='text-white text-[12px] text-center leading-6'>We use cookies to improve your experience on this site and show you personalized advertising. To find out more, read our  <a href='#' className='ml-3 text-white hover:border-b-[1px]'>Cookie Policy</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
