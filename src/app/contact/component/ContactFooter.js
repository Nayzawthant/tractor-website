'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFacebook, BsFillCaretRightFill, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ContactFooter = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        // <div className="flex justify-center ">
        //     <div className='flex flex-col items-center justify-center w-full mt-8 text-center border-gray-500 h-96'>
        //         <h4 className="mb-10 text-[24px] lg:text-[40px] font-bold" data-aos="zoom-in-up" data-aos-duration="900">Follow EV One</h4>
        //         <div className="flex flex-wrap items-center mt-9 mb-5 text-3xl text-black w-[65%] mx-auto justify-between" data-aos="zoom-in-up" data-aos-duration="900">
        //             <a href="https://www.instagram.com/" className="">
        //                 <BsInstagram />
        //             </a>
        //             <a href="https://www.facebook.com/" className="">
        //                 <BsFacebook />
        //             </a>
        //             <a href="https://www.linkedin.com/" className="">
        //                 <BsLinkedin />
        //             </a>
        //             <a href="https://youtube.com/" className="">
        //                 <BsYoutube />
        //             </a>
        //             <a href="https://twitter.com/" className="">
        //                 <BsTwitter />
        //             </a>
        //         </div>
                
        //     </div>
        // </div>
        <div className="flex justify-center ">
                <div className='flex flex-col items-center justify-center w-full mt-8 text-center border-gray-500 h-96'>
                    <h1 className='text-[#C41230] mb-5 font-semibold' data-aos="zoom-in-up" data-aos-duration="900" >Follow EV One</h1>
                    <div className="flex flex-wrap items-center mt-9 mb-5 text-3xl text-black w-[65%] mx-auto justify-between" data-aos="zoom-in-up" data-aos-duration="900">
                        <a
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110' data-aos="zoom-in-up" data-aos-duration="900" >
                                <BsInstagram />
                            </div>
                        </a>
                        <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110' data-aos="zoom-in-up" data-aos-duration="900" >
                                <BsFacebook />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/'>
                            <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110' data-aos="zoom-in-up" data-aos-duration="900" >
                                <BsLinkedin />
                            </div>
                        </a>
                        <a href='https://youtube.com/'>
                            <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                                <BsYoutube />
                            </div>
                        </a>
                        <a href='https://twitter.com/'>
                            <div className='p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                                <BsTwitter />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
    )
}

export default ContactFooter
