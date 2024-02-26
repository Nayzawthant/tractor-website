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
                        <img src="/HeroOne.jpg" alt="" className="w-full h-full" />

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
                        <img src="HeroTwo.jpg" alt="" className="w-full h-full" />
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
                        <img src="HeroThree.jpg" alt="" className="w-full h-full" />



                    </div>
                </SwiperSlide>


                


            </Swiper>
        </div>

    )
}

export default HeroSlide
