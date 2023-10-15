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
        <div className="flex justify-center ">
            <div className='flex flex-col items-center justify-center w-full mt-8 text-center border-gray-500 h-96'>
                <h4 className="mb-10 text-[24px] lg:text-[40px] font-bold" data-aos="zoom-in-up" data-aos-duration="900">Follow EV One</h4>
                <div className="flex flex-wrap items-center mt-9 mb-5 text-3xl text-black w-[65%] mx-auto justify-between" data-aos="zoom-in-up" data-aos-duration="900">
                    <a href="https://www.instagram.com/" className="">
                        <BsInstagram />
                    </a>
                    <a href="https://www.facebook.com/" className="">
                        <BsFacebook />
                    </a>
                    <a href="https://www.linkedin.com/" className="">
                        <BsLinkedin />
                    </a>
                    <a href="https://youtube.com/" className="">
                        <BsYoutube />
                    </a>
                    <a href="https://twitter.com/" className="">
                        <BsTwitter />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default ContactFooter
