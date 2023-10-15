
import React from 'react'
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr'
import { BsTelephone } from 'react-icons/bs'
import ContactFooter from './ContactFooter';

const Contact = () => {
    return (
        <div className='w-full'>
            <div className="relative flex justify-center w-full mb-3 lg:mb-14">
                <div className="flex w-full h-[300px] bg-black/10 justify-center items-center overflow-hidden" >
                    <img
                        width={1500}
                        height={1500}
                        src='/MF-logo-Header.png'
                        className="w-[60%] h-[95%]"
                    />
                </div>
                <div className="absolute bottom-0 isolate">
                    <div className="relative contact-outer-parent">
                        <h1 className="px-10 py-8 m-0 text-2xl font-bold text-black lg:px-32 lg:text-4xl lg:py-11 font-bruno-ace">
                            CONTACT US
                        </h1>
                        <div
                            className="absolute inset-0 bg-white/80 contact-inner-header-bg custom-clip-path"
                            style={{ zIndex: "-1" }}
                        ></div>
                    </div>
                </div>
            </div>
            <div id='contact' className='w-full lg:h-screen'>
                <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>

                    <div className='grid items-center w-full gap-8 md:grid-cols-2 lg:grid-cols-2'>
                        <div>
                            <img src='https://images.pexels.com/photos/5622305/pexels-photo-5622305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='contact_img' />
                        </div>
                        <div className='p-2'>

                            <div className=''>
                                <div>
                                    <p className='text-xl tracking-widest font-bold uppercase text-[#C41230]'>
                                        EV One Group Myanmar is ready to serve you.
                                    </p>
                                    <div className='py-4 text-[#272727] text-sm'>If you have any comments or suggestions concerningEV one services , you can reach us through the contacts below.</div>
                                    <p className='text-xl tracking-widest font-bold uppercase mb-4 text-[#C41230]'>
                                        Customer Contact Center
                                    </p>
                                    <div className='flex items-center mb-8'>
                                        <div className='bg-[#ecf0f3] mr-6 rounded-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                                            <GrLocation />
                                        </div>

                                        <p className='text-[#333333]'>Yangon - Myanmar</p>
                                    </div>
                                    <div className='flex items-center mb-8 '>
                                        <div className='bg-[#ecf0f3]  mr-6  rounded-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                                            <AiOutlineMail />
                                        </div>

                                        <p className='text-[#333333]'>nayzawt349@gmail.com</p>
                                    </div>
                                    <div className='flex items-center mb-6 '>
                                        <div className='bg-[#ecf0f3] mr-6  rounded-xl p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                                            <BsTelephone />
                                        </div>

                                        <p className='text-[#333333]'>+95 940095846</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
            <div>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&#39;m <span className='text-[#1127f2]'> Nay Zaw Thant</span>
                </h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                    I’m focused on building responsive front-end web applications
                    integrating back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a
                        href='https://www.linkedin.com/in/nay-zaw-zaw-b6b345271/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a
                        href='https://github.com/Nayzawthant'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href='/#contact'>
                        <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                            <AiOutlineMail />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
