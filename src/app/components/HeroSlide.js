"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroSlide() {
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='w-11/12 mx-auto'>
            <Swiper
                ref={swiperRef}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
            >

                <SwiperSlide>
                    <div className='relative w-[100%] slide_show h-[91vh] young-font'>
                        <div className='absolute top-[6%] left-[6%] w-[350px] flex-wrap  flex'>
                            <div className='text-center'>
                                <div className='flex flex-wrap text-left'>
                                    <h1 className='text-[25px] w-full md:text-[40px] lg:text-[50px] font-black text-white ' >Mercedes-Benz
                                        Vehicles.</h1>

                                </div>

                            </div>
                        </div>
                        <img src="https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/discover-mf/mf-experience-tour/mf-experience-tour-2023-1400x700.jpg" alt="" className="w-full h-full" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[100%] slide_show h-[91vh] young-font'>
                        <div className='absolute top-[6%] left-[6%] w-[350px] flex-wrap  flex'>
                            <div className='text-center'>
                                <div className='flex flex-wrap text-left'>
                                    <h1 className='text-[25px] w-full md:text-[40px] lg:text-[50px] font-black text-white' >Mercedes-Benz
                                        Vehicles.</h1>

                                </div>
                            </div>
                        </div>
                        <img src="https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/homepage/hero/MF_IDEAL_8_8T_WORK_FR_0722_07_Felix_edit_IDEAL-2.jpg" alt="" className="w-full h-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[100%] slide_show h-[91vh] young-font'>
                        <div className='absolute top-[6%] left-[6%] w-[350px] flex-wrap  flex'>
                            <div className='text-center'>
                                <div className='flex flex-wrap text-left'>
                                    <h1 className='text-[25px] w-full md:text-[40px] lg:text-[50px] font-black text-white' >Mercedes-Benz
                                        Vehicles.</h1>

                                </div>

                            </div>
                        </div>
                        <img src="https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/balers/mf-2200/2nd-gen/mf-2200-hero-2023-1400x700.jpg" alt="" className="w-full h-full" />



                    </div>
                </SwiperSlide>


                <button className="prev-button" onClick={handlePrev}>
                    <MdArrowBackIos />
                </button>
                <button className="next-button" onClick={handleNext}>
                    <MdArrowForwardIos />
                </button>


            </Swiper>
        </div>

    )
}

export default HeroSlide
