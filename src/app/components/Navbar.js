"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#fff');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                    : 'fixed w-full h-20 z-[100] mainback'
            }
        >
            <div className='flex items-center justify-between w-full h-full px-2 2xl:px-32'>

                <a href='/' className='flex items-center'>
                    <div className='px-5 py-3 bg-gray-200 shadow-lg'>
                        <img
                            src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/logos/MF-logo-Header.png'
                            alt='/'
                            width='100'
                            height='40'
                            className='cursor-pointer '
                        />
                    </div>
                    <ul style={{ color: `${linkColor}` }} className='flex items-center ml-5 '>
                        <li className='mr-3 text-sm uppercase '>
                            <Link href='/'>MM</Link>
                        </li>
                        <div>|</div>
                        <li className='ml-3 text-sm uppercase '>
                            <Link href='/'>EN</Link>
                        </li>
                    </ul>
                </a>

                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase '>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase'>
                            <Link href='/vehicels'>Vehicles</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase'>
                            <Link href='/newandreviews'>News & Reviews</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase'>
                            <Link href='/#projects'>About Us</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase'>
                            <Link href='/#contact'>Contact us</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className='md:hidden'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className='shadow-login'>
                    <Link href={'#'} className='text-white tex-[12px] two' >Login</Link>
                </div>
            </div>


            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex items-center justify-between w-full'>

                            <a href='/'>
                                <img
                                    src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/logos/MF-logo-Header.png'
                                    width='87'
                                    height='35'
                                    alt='/'
                                />
                            </a>

                            <div
                                onClick={handleNav}
                                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col py-4'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/vehicels'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Vehicels
                                </li>
                            </Link>
                            <Link href='/newandreview'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    News & Reviews
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    About Us
                                </li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Contact Us
                                </li>
                            </Link>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
