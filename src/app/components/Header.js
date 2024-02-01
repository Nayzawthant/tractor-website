"use client"

import { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight , BiX } from 'react-icons/bi';
import { SearchContext } from "../context/search";
import { usePathname } from "next/navigation";

const Header = () => {
    const { setSearchActive } = useContext(SearchContext);
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);
    const pathname = usePathname();
    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    });

    const handleClick = () => {
        setNav(true);
    }

    useEffect(() => {
        const handleScroll = () => {
            // header
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }

            // search
            if (window.scrollY > 800) {
                setSearchActive(true)
            } else {
                setSearchActive(false)
            }
        };

        // add event listener
        window.addEventListener('scroll', handleScroll);

        // remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    console.log(header);

  return (
    <header className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed  w-full mx-auto z-20 transition-all duration-300`}>
      <div className="lg:w-[90%] xl:w-[90%] mx-auto flex flex-col  lg:container xl:container lg:flex-row xl:flex-row lg:items-center xl:items-center lg:justify-between xl:justify-between">
        <div className='flex flex-col lg:container xl:container lg:flex-row xl:flex-row lg:items-center xl:items-center lg:justify-between xl:justify-between'>
            <div className="flex items-center justify-between px-4">
            <Link
                href='/'
                smooth={desktopMode}
                spy={true}
                className='cursor-pointer'
            >
                <Image src={'/logo.svg'} width={194} height={64} alt="" />
            </Link>

            <div
                 onClick={() => setNav(!nav)}
                className="cursor-pointer lg:hidden xl:hidden">{nav ? 
                 (<BiX className='text-4xl' />) : (<BiMenuAltRight className="text-4xl" />)}</div>
            </div>

            <nav className={`${nav ? 'max-h-max py-8 px-4 lg:px-0 xl:px-0' : 'max-h-0 lg:max-h-max xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold lg:font-medium xl:font-medium lg:flex-row xl:flex-row lg:w-max xl:w-max lg:gap-x-8 xl:gap-x-8 lg:h-max xl:h-max lg:bg-transparent xl:bg-transparent lg:pb-0 xl:pb-0 transition-all duration-150 text-center lg:text-left xl:text-left uppercase text-sm lg:text-[15px] xl:text-[15px] lg:normal-case xl:normal-case`}>
                <Link 
                    className={`${pathname === '/' ? 'text-[#C41230]' : ''} cursor-pointer hover:text-[#C41230]`}
                    href='/'
                    activeClass='active'
                    smooth={desktopMode}
                    spy={true}
                >
                    Home
                </Link>
                <Link 
                    className={`${pathname === '/vehicels' ? 'text-[#C41230]' : ''} cursor-pointer hover:text-[#C41230]`}
                    href='/vehicels'
                    activeClass='active'
                    smooth={desktopMode}
                    spy={true}
                >
                    VEHICELS
                </Link>
                <Link 
                    className={`${pathname === '/newandreviews' ? 'text-[#C41230]' : ''} cursor-pointer hover:text-[#C41230]`}
                    href='/newandreviews'
                    activeClass='active'
                    smooth={desktopMode}
                    spy={true}
                >
                    NEWS &REVIEWS
                </Link>
                <Link 
                    className={`${pathname === '/about' ? 'text-[#C41230]' : ''} cursor-pointer hover:text-[#C41230]`}
                    href='/about'
                    activeClass='active'
                    smooth={desktopMode}
                    spy={true}
                >
                    ABOUTS US
                </Link>

                <Link 
                    className={`${pathname === '/contact' ? 'text-[#C41230]' : ''} cursor-pointer hover:text-[#C41230]`}
                    href='/contact'
                    activeClass='active'
                    smooth={desktopMode}
                    spy={true}
                >
                    CONTACT US
                </Link>
                <Link 
                    className="cursor-pointer  btn btn-primary btn-sm max-w-[164px] mx-auto"
                    href='/'
                    activeClass='active'
                    smooth={desktopMode}
                    spy={true}
                >
                    See all cars
                </Link>
               
            </nav>
        </div>
      </div> 
    </header>
  )
}

export default Header;
