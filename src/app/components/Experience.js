'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {useTranslations} from 'next-intl';
// ..

const Experience = () => {
    // const t = useTranslations('DriveWorld');
    useEffect(() => {
        AOS.init();

    }, []);


    return (
        <div className='mt-16 bg-[#fff] w-[91%] mx-auto'>
            <div className="bg-[#fff] experience  w-full h-auto py-[150px] items-center flex justify-center text-center  " >
                <div className='text-center max-w-[800px]'>

                    <div className='text-[30px] py-5 z-10 md:text-[40px] lg:text-[60px] text-center  text-[#fff] young-font tracking-wider' data-aos="zoom-in-up" data-aos-duration="900">
                        {/* {t('drive')} */}
                        Drive Change:
                    </div>
                    <div className='text-[30px] py-5 z-10 md:text-[40px] lg:text-[60px] text-center  text-[#fff] young-font tracking-wider' data-aos="zoom-in-up" data-aos-duration="900">
                        {/* {t('electric')} */}
                        Farm Tractors for
                    </div>
                    <div className='text-[30px] py-5 z-10 md:text-[40px] lg:text-[60px] text-center  text-[#fff] young-font tracking-wider' data-aos="zoom-in-up" data-aos-duration="900">
                        {/* {t('world')} */}
                        a Sustainable World
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience
